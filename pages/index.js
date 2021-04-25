import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/home/HowItWorks'
import Button from '../components/Button'
import ButtonTertiary from '../components/ButtonTertiary'
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from 'react'

export default function Home() {

  const supabaseUrl = 'https://owxvnbvnbykpotvzuyxn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTA0NTk3MywiZXhwIjoxOTM0NjIxOTczfQ.7BBoxolFznYqeYC0B2UrsMzUjpUM2ZkWdVPiPKve62s';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [todos, setTodos] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setError] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    let { data: todos, error } = await supabase.from('Causes').select('*').order('id', true)
    if (error) console.log('error', error)
    else setTodos(todos)
  }

  return (
    <>
      <Navbar />
      <Hero title = "Transparent Donations, In One Place" subtitle = "By definition, the most effective charities are the ones that spend the least on fundraising. SimpleDonate helps you find them by providing a platform to list." />
      <About title = "What's the point?" explain  = "Unfortunately, there isn't a streamlined way to donate. Every charity has a different setup, where the money goes isn't transparent, and getting tax receipts is a pain. SimpleDonate fixes that." />
      <HowItWorks />
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      
      <section className = 'relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'px-4 sm:px-6 md:px-8 pt-0 pb-24 -m-20'>
          <ButtonTertiary path = 'https://github.com/hobbleabbas/simpledonate' body = 'GitHub' />
        </div>
      </section>

    </>
  )
}

