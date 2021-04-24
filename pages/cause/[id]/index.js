import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import CauseHero from '../../../components/cause/CauseHero'
import About from '../../../components/About'
import ChoosePlan from '../../../components/cause/ChoosePlan'
import Button from '../../../components/Button'
import ButtonTertiary from '../../../components/ButtonTertiary'
import { createClient } from "@supabase/supabase-js";
export default function Home() {

  const supabaseUrl = 'https://owxvnbvnbykpotvzuyxn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTA0NTk3MywiZXhwIjoxOTM0NjIxOTczfQ.7BBoxolFznYqeYC0B2UrsMzUjpUM2ZkWdVPiPKve62s';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const supadata = supabase.from("causes").select("title");

  console.log('bruh')
  console.log(supadata)


  return (
    <>
      <Navbar />
      <CauseHero title = "Donate to XYZ Cause" location = 'Zimbabawe, Ontario' tldr = 'This will do xyz, allowing the population of abc to idek' subtitle = "Make all of your donations in one place. See how much of your donation actually goes to charity, download tax receipts, and see proof of donation all in one place" />
      
      <About title = "What's the point?" explain  = "Unfortunately, there isn't a streamlined way to donate. Every charity has a different setup, where the money goes isn't transparent, and getting tax receipts is a pain. SimpleDonate fixes that." />
      <ChoosePlan bPlan = '25' bInterval = 'Per Month' cPlan = '1000' cInterval = 'Once' />
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
