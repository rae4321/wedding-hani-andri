import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://orsrfayrptffcvtndgwp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc3JmYXlycHRmZmN2dG5kZ3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NzY5MTIsImV4cCI6MjA5NjE1MjkxMn0.zAw6E_k1gsrZQgpjczW5X62QXs3Y14JP0AwDcb9PfVw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)