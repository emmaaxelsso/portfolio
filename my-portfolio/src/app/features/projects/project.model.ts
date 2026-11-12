export interface Project {
  readonly slug: string;
  readonly showOnHome: boolean;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly techStack: readonly string[];
  readonly role: string;
  readonly learnings: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly links?: readonly {
    readonly label: string;
    readonly url: string;
  }[];
  readonly repositoryNote?: string;
}