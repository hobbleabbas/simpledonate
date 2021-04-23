import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import DonateHero from '../components/DonateHero'
import About from '../components/About'
import ButtonTertiary from '../components/ButtonTertiary'
import DonateWrapper from '../components/donate/DonateWrapper'
export default function Donate() {
  return (
    <>
      <Navbar />
      <DonateHero title = "Donate To A Cause" hidden = 'hidden' subtitle = "Choose from the causes below to donate to. All claims are verified by SimpleDonate. You'll receive tax receipts and proof of donation in your account." />
      <DonateWrapper />
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
