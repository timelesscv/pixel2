
import { createClient } from '@supabase/supabase-js';

// Accessing environment variables injected by Vite's define block
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Log helpful warnings if keys are missing in the environment
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Check your .env file and vite.config.ts.');
}

// Initialize client with whatever is available, or placeholders to avoid "required" throw
// if the app is still in a pre-auth loading state.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder'
);
