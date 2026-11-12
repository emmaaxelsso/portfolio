import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';
import { ProjectsPreviewComponent } from './components/projects-preview/projects-preview.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ResearchPreviewComponent } from './components/research-preview/research-preview.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutPreviewComponent,
    ProjectsPreviewComponent,
    ResearchPreviewComponent,
    NavbarComponent,
    ContactPreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('threadPath')
  private threadPath!: ElementRef<SVGPathElement>;

  private frameId: number | null = null;
  private resizeObserver?: ResizeObserver;
  private motionPreference?: MediaQueryList;
  private listening = false;

  // Each entry connects a screen height to a distance along the path.
  private checkpoints: { distance: number; depth: number }[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      const path = this.threadPath.nativeElement;
      const home = path.closest<HTMLElement>('.home');

      if (!home) {
        return;
      }

      this.motionPreference = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      );

      // Use actual path lengths instead of normalized dash values.
      path.removeAttribute('pathLength');

      window.addEventListener('scroll', this.scheduleUpdate, {
        passive: true
      });
      window.addEventListener('resize', this.refreshGeometry);

      this.motionPreference.addEventListener(
        'change',
        this.scheduleUpdate
      );

      this.resizeObserver = new ResizeObserver(this.refreshGeometry);
      this.resizeObserver.observe(home);

      if (path.ownerSVGElement) {
        this.resizeObserver.observe(path.ownerSVGElement);
      }

      this.listening = true;
      this.rebuildCheckpoints();
      this.updateThread();
    });
  }

  private refreshGeometry = (): void => {
    this.rebuildCheckpoints();
    this.scheduleUpdate();
  };

private rebuildCheckpoints(): void {
  const path = this.threadPath.nativeElement;
  const matrix = path.getScreenCTM();

  this.checkpoints = [];

  if (!matrix) {
    return;
  }

  const svgLength = path.getTotalLength();
  const start = path.getPointAtLength(0).matrixTransform(matrix);

  let previous = start;
  let screenLength = 0;
  let depth = 0;

  this.checkpoints.push({
    distance: 0,
    depth: 0
  });

  for (let i = 1; i <= 1000; i++) {
    const point = path
      .getPointAtLength((i / 1000) * svgLength)
      .matrixTransform(matrix);

    const travelled = Math.hypot(
      point.x - previous.x,
      point.y - previous.y
    );

    screenLength += travelled;

    depth = Math.max(
      depth + travelled * 0.03,
      point.y - start.y
    );

    this.checkpoints.push({
      distance: screenLength,
      depth
    });

    previous = point;
  }

  path.style.strokeDasharray =
    `${screenLength} ${screenLength}`;

  path.style.strokeDashoffset = String(screenLength);
}

  private scheduleUpdate = (): void => {
    if (this.frameId !== null) {
      return;
    }

    this.frameId = window.requestAnimationFrame(() => {
      this.frameId = null;
      this.updateThread();
    });
  };

  private updateThread(): void {
    const path = this.threadPath.nativeElement;
    const svg = path.ownerSVGElement;
    const matrix = path.getScreenCTM();
    const last = this.checkpoints[this.checkpoints.length - 1];

    if (!svg || !matrix || !last) {
      return;
    }

    svg.style.clipPath = 'none';

    if (window.scrollY <= 1) {
      svg.style.opacity = '0';
      path.style.strokeDashoffset = String(last.distance);
      return;
    }

    svg.style.opacity = '1';

    if (this.motionPreference?.matches) {
      path.style.strokeDashoffset = '0';
      return;
    }

    const start = path.getPointAtLength(0).matrixTransform(matrix);
    const scroll = Math.max(0, window.scrollY);

    const acceleration = Math.min(scroll / 300, 1);
    const drawingDistance = scroll * (0.35 + 1.65 * acceleration);

    const remainingScroll = Math.max(
      0,
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY
    );

    const finishProgress =
      1 - Math.min(remainingScroll / 300, 1);

    const drawingDepth = Math.max(
      0,
      Math.min(
        drawingDistance,
        window.innerHeight * 0.55 - start.y
      )
    );

    let visibleLength = last.distance;

    for (let i = 1; i < this.checkpoints.length; i++) {
      const before = this.checkpoints[i - 1];
      const after = this.checkpoints[i];

      if (after.depth >= drawingDepth) {
        const interval = after.depth - before.depth;

        const fraction = interval > 0
          ? Math.min(
              1,
              Math.max(0, (drawingDepth - before.depth) / interval)
            )
          : 0;

        visibleLength =
          before.distance +
          (after.distance - before.distance) * fraction;

        break;
      }
    }

    const finishedLength =
      visibleLength +
      (last.distance - visibleLength) * finishProgress;

    path.style.strokeDashoffset = String(
      last.distance - finishedLength
    );
  }

  ngOnDestroy(): void {
    if (!this.listening) {
      return;
    }

    window.removeEventListener('scroll', this.scheduleUpdate);
    window.removeEventListener('resize', this.refreshGeometry);

    this.motionPreference?.removeEventListener(
      'change',
      this.scheduleUpdate
    );

    this.resizeObserver?.disconnect();

    if (this.frameId !== null) {
      window.cancelAnimationFrame(this.frameId);
    }
  }
}