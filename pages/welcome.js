import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Form from '../components/post/Form'
import About from '../components/About'
import Hero from '../components/Hero'
import { createClient } from "@supabase/supabase-js";


export default function Home() {
	const supabaseUrl = 'https://owxvnbvnbykpotvzuyxn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTA0NTk3MywiZXhwIjoxOTM0NjIxOTczfQ.7BBoxolFznYqeYC0B2UrsMzUjpUM2ZkWdVPiPKve62s';
  const supabase = createClient(supabaseUrl, supabaseKey);

	const user = supabase.auth.user()
  console.log(user)
  return (
    <>
      <Navbar />
      <Hero title = "List Your Cause On SimpleDonate" subtitle = "If you would like to list your donation on SimpleDonate, enter your details below and we'll be in touch." />
      <About title = 'Why List On SimpleDonate?' explain = 'When you list with SimpleDonate, we call and verify everything about your post, including the percentage of proceeds that actually go to receipients and how you plan to provide proof. This allows for a more transparent and easier donation process for everyone.'/>
      <Form />
    </>
  )
}
