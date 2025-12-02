## Project snapshot

- Type: Single-page frontend app using Vite + React + TypeScript.
- Entry: `index.html` -> `src/main.tsx` which mounts `App` from `src/App.tsx`.
- CSS framework: Bootstrap is installed and imported in `src/main.tsx` (`import 'bootstrap/dist/css/bootstrap.css';`).
- Build tooling: Vite with `@vitejs/plugin-react` (see `vite.config.ts`).

## Fast dev & build commands

- Dev server: `npm run dev` (runs `vite`). Use this for HMR and local development.
- Build: `npm run build` (runs `tsc && vite build`). TypeScript compilation runs before the production bundle.
- Preview production: `npm run preview` (runs `vite preview`).

Examples (run from repo root):

```
npm install
npm run dev
```

## Key files & where to change things

- App shell: `src/App.tsx` — simplest place to add components or test UI changes.
- App bootstrap: `src/main.tsx` — global imports (Bootstrap CSS, root render).
- Static HTML: `index.html` — the root `div#root` and any global meta tags.
- Assets: stored under `src/assets` and imported via ES module imports (example: `import reactLogo from './assets/react.svg'`). `index.html` references `/vite.svg` directly.
- Vite config: `vite.config.ts` — React plugin enabled; add other plugins here.
- `MVC/` directory exists but is empty in the repo — likely a placeholder for server-side code or future structure; confirm intent before moving or deleting.

## Conventions & discoverable patterns

- React + TypeScript functional components with default exports (see `src/App.tsx`).
- Global styles imported per-entry (`src/main.tsx`) and component styles imported alongside components (`import './App.css'`).
- Assets can be referenced either as absolute paths (e.g., `/vite.svg` in `index.html`) or imported as modules (`import foo from './assets/foo.png'`).
- No router, state-management, tests, or CI are present; add them only after confirming project requirements.

## Integration points & external dependencies

- External libs installed: `react`, `react-dom`, `bootstrap`. Bootstrap styles are applied via a global import in `src/main.tsx`.
- Build server: Vite dev server. Production artifacts are Vite-built static files.

## Agent-specific guidance (concise)

- When editing UI, run `npm run dev` and verify HMR updates in the browser; small edits to `src/App.tsx` are safe for quick checks.
- If adding a package, update `package.json`, run `npm install` locally, and verify `npm run dev` still starts. If `package-lock.json` changes, include it in the PR.
- For production verification: run `npm run build` then `npm run preview` and spot-check in browser console/network.

## Examples from the repo

- Bootstrap import: `src/main.tsx` contains `import 'bootstrap/dist/css/bootstrap.css';` — replicate this when adding global CSS.
- Scripts: `package.json` defines `dev`, `build`, and `preview` — prefer using these scripts instead of calling Vite/TS directly.

## Questions / unknowns to confirm with maintainers

- Is the `MVC/` folder intended for a backend service? If yes, where is that service started and what language/runtime is expected?
- Are there any linting, testing, or CI expectations (none are discoverable in the repo)?

If something here is incorrect or you want this file to enforce additional conventions (e.g., branching, PR message format, review checklist), tell me what to include and I will update this file.
