import type { Project } from './project.model';

export const PROJECTS: readonly Project[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    showOnHome: false,
    description: 'This webpage! A portfolio for me, myself and I.',
    longDescription:
      'My personal portfolio built in Angular to present my projects and background. I wanted to create a portfolio that was fun, personal and easy to explore. ',
    techStack: ['Angular', 'TypeScript', 'SCSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/emmaaxelsso/portfolio',
      },
    ],
    role: 'I designed and developed everything on this website.',
    learnings:
      'I learned more about Angular components, routing, and responsive styling.'
  },
  {
    title: 'An Interactive Language Map',
    slug: 'interactive-language-map',
    showOnHome: true,
    image: {
      src: 'assets/images/languagePopup.png',
      alt: 'Interactive world map with a language information popup open',
      width: 3024,
      height: 1727,
    },
    description:
      'An interactive map for exploring where languages are spoken, built as a bachelor’s thesis project.',
    longDescription:
      'My groups bachelor’s thesis project. This interactive map lets users explore where languages are spoken. It combines data from Wikidata and OpenStreetMap, with features for searching languages and viewing speaker statistics and language families.',
    techStack: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Wikidata', 'OpenStreetMap', 'SPARQL'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/hannamagn/InteractiveLanguageMap2',
      },
      {
        label: 'Read the bachelor’s thesis',
        url: 'https://hdl.handle.net/20.500.12380/310684',
      },
    ],
    role: 'I worked on both the NestJS backend and the interactive map. My contributions included retrieving language data from MongoDB, making regions clickable, and displaying language families and speaker statistics in map popups. I also refined map highlighting to make selected languages easier to follow.',
    learnings:
      'The project gave me experience in combining external data sources and presenting complex information through an interactive interface.'
  },
  {
    title: 'Eventi',
    slug: 'eventi',
    showOnHome: true,
    repositoryNote: 'Source code is private on Chalmers GitLab.',
    image: {
      src: 'assets/images/eventi_home.png',
      alt: 'Eventi homepage with options to sign up, find events, or host an event',
      width: 3024,
      height: 1788,
    },
    description:
      'An event website built as a team project using agile development practices.',
    longDescription:
      'Eventi was a university team project where we designed and developed an event website. We used agile practices to organise the work and develop the application together.',
    techStack: ['HTML', 'CSS', 'TypeScript', 'TSX', 'MongoDB'],
    role: 'Frontend developer in a team project',
    learnings:
      'I learned more about teamwork, agile processes, and building user-focused interfaces.'
  },

  {
  title: 'Myrestaulvegen',
  slug: 'myrestaulvegen',
  showOnHome: true,
  repositoryNote: 'The repository is private because it contains personal information.',
  description: 'A digital guest guide for our family’s house in Norway. Still a work in progress.',
  longDescription:
    'I’m building a website where guests can find travel information, practical details about the house, and tips for exploring the Gausta area. It is not yet published.',
  techStack: ['Astro', 'CSS', 'javascript'],
  role:
    'I’m designing and developing the site, including its shared layout, navigation, and guest information pages.',
  learnings:
    'I’m learning how to organise practical information so guests can quickly find what they need before and during their stay.'
},
];