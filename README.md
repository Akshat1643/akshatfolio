# Akshatfolio

A professional single-page portfolio built with React, Vite, TypeScript, and Tailwind CSS. The layout is intentionally structured for a software developer portfolio and includes a hero section, about block, skills grid, experience timeline, certifications, project cards, and a contact area with a working form.

## Features

- Responsive portfolio layout inspired by a modern developer profile
- Dark and light theme toggle with persistence
- Scroll-triggered reveal animations for sections and cards
- Reusable content-driven components and centralized portfolio data
- Mailto-based contact form that opens the user’s email client with prefilled content

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`

## Project Structure

- `src/App.tsx` drives the page layout and assembles the portfolio sections
- `src/components/` holds reusable UI pieces like the contact form, theme toggle, reveal wrapper, and shared section heading
- `src/data/portfolio.ts` stores the content used across the page so you can replace copy without touching layout code
- `src/hooks/` contains the theme and intersection observer hooks
- `src/index.css` defines the global theme variables, background treatment, and reveal animation styles

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Customizing The Portfolio

- Update personal details, links, and project descriptions in `src/data/portfolio.ts`.
- Replace the placeholder email in the contact data with your own address.
- Add or remove projects by editing the arrays in the data file.
- Tweak colors, spacing, or typography in `src/index.css` and the Tailwind class strings in `src/App.tsx`.

## Notes

The content is intentionally paraphrased and structured similarly to the reference site, but it is not copied verbatim. That makes it a safer base to personalize and publish.
