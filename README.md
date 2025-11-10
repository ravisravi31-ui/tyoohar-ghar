Tyoohar Ghar - React + Vite + Tailwind (Production-ready)
========================================================

This package contains a full React + Vite project ready to deploy to Netlify.

Important notes before deploying to Netlify:
- Ensure package.json (this repo) includes @vitejs/plugin-react (it does).
- Netlify must install devDependencies. If your Netlify site has NPM_FLAGS set to --production, remove it in Site settings -> Build & deploy -> Environment.
- If you had previous failed builds, choose 'Clear cache and deploy' in Deploys -> Trigger deploy -> Clear cache and deploy site.

Deploy via GitHub (no terminal):
1. Create a GitHub repo and upload all files/folders in this project (commit to main).
2. In Netlify, New site -> Import from Git -> connect GitHub and select the repo.
3. Build command: npm run build, Publish directory: dist. Click Deploy.
4. If build errors, open deploy log and paste here — I'll help debug.

Local preview (optional):
1. npm install
2. npm run dev
3. Open http://localhost:5173

Replace /src/assets placeholder images with your product photos: hero.png, small.jpg, medium.jpg, large.jpg
