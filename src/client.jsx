import { createClient } from '@supabase/supabase-js'
const URL = 'https://wplskatyrsynosruseft.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbHNrYXR5cnN5bm9zcnVzZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMzY4MzMsImV4cCI6MjA2MDYxMjgzM30.JDbhZeD5T3MeVPbFyYpUJPHCSmzJyEXVMh7dIgo559o';

export const supabase = createClient(URL, API_KEY);
