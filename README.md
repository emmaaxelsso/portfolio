# Emma Axelsson — Portfolio

My personal portfolio, built with Angular and SCSS. 

**[Visit the portfolio ↗](https://www.emmaxelsson.se)**

## About

I'm a software engineering student at Chalmers University of Technology, based in Gothenburg, Sweden. I enjoy combining structure and creativity to build thoughtful, useful software.

This portfolio is an ongoing personal project, evolving as I learn and build.

## Built with

- **Angular 17** and **TypeScript**
- **SCSS** for styling
- **GitHub Pages** for hosting
- **GitHub Actions** for automated builds and deployment

## Run locally

Requires Node.js 20 and npm.

```bash
git clone https://github.com/emmaaxelsso/portfolio.git
cd portfolio/my-portfolio
npm ci
npm start
```

Open [localhost:4200](http://localhost:4200) in your browser.

To create a production build:

```bash
npm run build
```

The generated website files are saved in `my-portfolio/dist/my-portfolio/browser/`, relative to the repository root.

## Project structure

```text
portfolio/
├── .github/workflows/       # Automated deployment
├── my-portfolio/
│   └── src/
│       ├── app/
│       │   ├── core/        # Layout and core functionality
│       │   ├── features/    # Pages and feature components
│       │   └── shared/      # Reusable components
│       └── styles/          # Global styles and design variables
└── README.md
```

## Deployment

Changes pushed or merged into `main` are automatically built and deployed to GitHub Pages. Development takes place on separate branches before being merged through pull requests.
