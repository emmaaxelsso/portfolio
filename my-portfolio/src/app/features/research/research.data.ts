import type { ResearchStudy } from './research.model';

export const RESEARCH_STUDIES: readonly ResearchStudy[] = [
  {
    title: 'Requirements and AI‑generated code',
    slug: 'ai-code-quality',
    subtitle: 'Chalmers course project · 2026',
    description:
      'We compared 30 versions of a to-do list app to see how leaving out parts of the requirements affects app behaviour and code quality.',
    tags: ['Controlled experiment', 'JUnit', 'SonarQube'],
  },
];