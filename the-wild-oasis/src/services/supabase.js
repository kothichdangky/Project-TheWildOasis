
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = ""
export const supabaseKey = ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase