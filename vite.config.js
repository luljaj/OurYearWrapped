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

  return {
    plugins: [react()],
    // GitHub Pages project sites are served under "/<repo>/"
    base: mode === 'production' ? prodBase : '/',
    build: {
      outDir: 'dist',
    },
  }
})
