# Vite React TypeScript Starter

A starter React 18 + TypeScript project powered by Vite. It includes a small UI component library (Button, Card, Input, Modal, AnimatedBackground), Storybook for component development, Vitest + Testing Library for tests, Tailwind CSS setup, and ESLint for linting.

## Tech Stack
- React 18, TypeScript
- Vite (dev/build/preview)
- Storybook 8 (with a11y, docs, essentials)
- Vitest + Testing Library + jsdom
- ESLint (flat config) with recommended plugins
- Tailwind CSS (optional utility classes)
- styled-components

## Prerequisites
- Node.js 18+ and npm 9+

## Getting Started
```bash
# go to the project root that contains package.json
cd sample-main/project

# install dependencies
npm install

# start the app (http://localhost:5173)
npm run dev
```

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint
- `npm test`: Run unit tests with Vitest (jsdom, globals)
- `npm run test:ui`: Vitest in UI mode
- `npm run storybook`: Start Storybook (http://localhost:6006)
- `npm run build-storybook`: Build static Storybook

## Project Structure
```text
project/
├─ index.html
├─ public/
│  └─ WhatsApp Image 2025-09-06 at 21.20.08_9a142d37.jpg
├─ src/
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ styles/
│  │  └─ theme.ts
│  ├─ test/
│  │  └─ setup.ts
│  ├─ components/
│  │  ├─ AnimatedBackground/
│  │  │  └─ AnimatedBackground.tsx
│  │  ├─ Button/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Button.styled.ts
│  │  │  ├─ Button.types.ts
│  │  │  ├─ Button.stories.tsx
│  │  │  └─ Button.test.tsx
│  │  ├─ Card/
│  │  │  ├─ Card.tsx
│  │  │  ├─ Card.styled.ts
│  │  │  ├─ Card.types.ts
│  │  │  ├─ Card.stories.tsx
│  │  │  └─ Card.test.tsx
│  │  ├─ Input/
│  │  │  ├─ Input.tsx
│  │  │  ├─ Input.styled.ts
│  │  │  ├─ Input.types.ts
│  │  │  ├─ Input.stories.tsx
│  │  │  └─ Input.test.tsx
│  │  ├─ Modal/
│  │  │  ├─ Modal.tsx
│  │  │  ├─ Modal.styled.ts
│  │  │  ├─ Modal.types.ts
│  │  │  ├─ Modal.stories.tsx
│  │  │  └─ Modal.test.tsx
│  │  └─ index.ts
│  └─ vite-env.d.ts
├─ eslint.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ package.json
```

## Styling
- Tailwind is configured in `tailwind.config.js` and applied via `index.css`.
- Component-level styles use `styled-components` (see `*.styled.ts`).

## Testing
- Vitest is configured in `vite.config.ts` with `jsdom` and `globals: true`.
- Setup file: `src/test/setup.ts`.
- Tests co-locate with components as `*.test.tsx`.

Run tests:
```bash
npm test
# or
npm run test:ui
```

## Storybook
- Stories live alongside components as `*.stories.tsx`.

Start Storybook:
```bash
npm run storybook
```

## Linting
Run ESLint:
```bash
npm run lint
```

## Build
Create a production build and preview it:
```bash
npm run build
npm run preview
```

## Notes
- If you see ENOENT errors with npm, ensure you are in `sample-main/project` where `package.json` resides.
