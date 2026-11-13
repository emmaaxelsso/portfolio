export const educationCourses = {
  masters: {
    selected: [
      'Advanced requirements engineering',
      'Quality assurance and testing',
      'Behavioral software engineering',
    ],
    years: [
      {
        label: 'Year 1',
        courses: [
          'Quality assurance and testing',
          'Empirical software engineering',
          'Project management',
          'Advanced requirements engineering',
          'Agile development processes',
          'Social innovation and social entrepreneurship',
          'Behavioral software engineering',
          'Life cycle assessment',
        ],
      },
      {
        label: 'Year 2',
        courses: [
          'Software evolution project 15hp · ongoing',
          'Research project in software engineering 15hp · ongoing',
          "Master's thesis 30hp · planned for spring 2027",
        ],
      },
    ],
  },
  bachelors: {
    selected: [
      'Object-oriented programming and design',
      'Data structures and algorithms',
      'Design and implementation of graphical interfaces',
    ],
    years: [
      {
        label: 'Year 1',
        courses: [
          'Introduction to computer engineering',
          'Machine oriented programming',
          'Linear algebra',
          'Communication and professional development',
          'Discrete mathematics',
          'Object-oriented programming and design',
          'Design and implementation of graphical interfaces',
        ],
      },
      {
        label: 'Year 2',
        courses: [
          'Calculus',
          'Mathematical statistics and discrete mathematics',
          'Object-oriented programming project',
          'Agile software project management',
          'Physics for engineers',
          'Introduction to data science and AI',
          'Data structures and algorithms',
        ],
      },
      {
        label: 'Year 3',
        courses: [
          'Software engineering principles for complex systems',
          'The role of digitalization in the sustainable society',
          'Professional development for engineers and English',
          'Mathematical modelling and problem solving',
          'Computational methods in bioinformatics',
          'Finite automata and formal languages',
        ],
      },
    ],
    additional: [
      'Programming for effective problem solving · Umeå University',
    ],
  },
} as const;