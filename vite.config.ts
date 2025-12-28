import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// Fix: Import process explicitly to ensure the 'cwd' method is available and correctly typed in the Vite config environment.
import process from 'process';

export default defineConfig(({ mode }) => {
  // Load environment variables from system/process and .env files
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Injects environment variables into the global 'process.env' object for the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY)
    },
    optimizeDeps: {
      include: ['@google/genai']
    }
  };
});