import { createClient } from '@supabase/supabase-js';

// Ganti dengan data dari Supabase project Paduka
const supabaseUrl = 'https://ymqvzbqmtuevnhickftn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcXZ6YnFtdHVldm5oaWNrZnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDY1NjksImV4cCI6MjA2MzgyMjU2OX0.sgY7EckE5n6ubALVLaqzke3nYzWu0xVDTCBDnE1pjc8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
