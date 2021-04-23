import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Form from '../components/post/Form'
import About from '../components/About'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title = "List Your Cause On SimpleDonate" subtitle = "If you would like to list your donation on SimpleDonate, enter your details below and we'll be in touch." />
      <About title = 'Why List On SimpleDonate?' explain = 'When you list with SimpleDonate, we call and verify everything about your post, including the percentage of proceeds that actually go to receipients and how you plan to provide proof. This allows for a more transparent and easier donation process for everyone.'/>
      <Form />
    </>
  )
}
