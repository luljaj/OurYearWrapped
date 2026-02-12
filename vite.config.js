import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeBase(input) {
  if (!input) return '/'
  return input.endsWith('/') ? input : `${input}/`
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const prodBase = normalizeBase(env.VITE_BASE || '/our-year-wrapped/')
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true'

  return {
    plugins: [react()],
    // GitHub Pages project sites are served under "/<repo>/".
    // Vercel serves at "/" by default, so forcing "/<repo>/" breaks asset MIME types due to 404s.
    base: isVercel ? '/' : mode === 'production' ? prodBase : '/',
    build: {
      outDir: 'dist',
    },
  }
})
