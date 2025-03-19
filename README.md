# Photo Browser

## About this project

This is a single-page app developed with [Next.js](https://nextjs.org). The project was bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Author

Sini Pauliina Kolehmainen  
[kolehmainen.sini@outlook.com](mailto:kolehmainen.sini@outlook.com)  
[https://www.sinipauliina.com/](https://www.sinipauliina.com/) (in Finnish only)

I developed this app to learn Next.js and the other technologies used in this project.
Got any questions? Feel free to send me an email!

### Features

- The app includes two top-level "pages" (the home page and a page with information about the project) and one sub-level "page" (the single-photo page). 
- Each page displays the same header (with navigation) and the same footer.
- The app scales to screens of all sizes.

#### "Home"

- A large hero section
- A photo browser
- Pagination for the photo browser 

#### "About this project"

- A smaller hero section
- Three distinct sections
- An image using a custom image component
- Several basic images
- Regular text
- Lists

#### Single-photo page

- A smaller hero section
- Photo details, including a link to the original-size image
- A random quote
- The photo (larger than the thumbnail in the browser view but not full size)

### Structure

`photo-browser/`
- `public/` <-- Static assets to be served
- `src/` <-- Application source folder
  * `app/` <-- App Router; base layout, "Home" view, favicon
    * `about/` <-- "About this project" view
    * `api/` <-- Route Handlers
    * `photos/[id]/` <-- Single-photo view
  * `components/` <-- Global components
  * `hooks/` <-- React Query hooks
  * `providers/` <-- React Query provider
  * `store/` <-- Zustand stores
  * `styles/` <-- Global styles including custom classes
  * `types/` <-- TypeScript types
- `.env` <-- Environmental variables
- `.gitignore` <-- Files and directories to be ignored by Git
- `eslint-rules.mjs` <-- Custom ESLint rules
- `eslint.config.mjs` <-- Configuration file for ESLint
- `next.config.ts` <-- Configuration file for Next.js
- `package.json` <-- Project metadata, dependencies, scripts, and configurations
- `tailwind.config.ts` <-- Configuration file for Tailwind CSS
- `tsconfig.json` <-- Configuration file for TypeScript

### Frameworks and libraries

- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [TanStack Query (aka React Query)](https://tanstack.com/query/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [ESLint](https://eslint.org/)

### External APIs

- [Lorem Picsum](https://picsum.photos/)
- [Placedog.net](https://placedog.net/)
- [ZenQuotes.io](https://zenquotes.io/)


## Installation and running the app

1. Make sure you have Node 18.18 or later on your local development machine.
2. Download this app from GitHub.
3. On command line go to the project directory.
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.
