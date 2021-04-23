import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/home/HowItWorks'
import Button from '../components/Button'
import ButtonTertiary from '../components/ButtonTertiary'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title = "See Where Your Donations Go" subtitle = "Make all of your donations in one place. See how much of your donation actually goes to charity, download tax receipts, and see proof of donation all in one place" />
      <About title = "What's the point?" explain  = "Unfortunately, there isn't a streamlined way to donate. Every charity has a different setup, where the money goes isn't transparent, and getting tax receipts is a pain. SimpleDonate fixes that." />
      <HowItWorks />
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      <section className = 'relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'px-4 sm:px-6 md:px-8 pt-0 pb-24 -m-20'>
          <ButtonTertiary path = '/' body = 'GitHub' />
        </div>
      </section>
    </>
  )
}
