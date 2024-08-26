import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/supabase'

export type TableRows<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']

const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export default supabase
