import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import CauseHero from '../../../components/cause/CauseHero'
import About from '../../../components/About'
import ChoosePlan from '../../../components/cause/ChoosePlan'
import Button from '../../../components/Button'
import ButtonTertiary from '../../../components/ButtonTertiary'
import OpenSource from '../../../components/OpenSource'
import { createClient } from "@supabase/supabase-js";

export default function Home() {

  const supabaseUrl = 'https://owxvnbvnbykpotvzuyxn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTA0NTk3MywiZXhwIjoxOTM0NjIxOTczfQ.7BBoxolFznYqeYC0B2UrsMzUjpUM2ZkWdVPiPKve62s';
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <>
      <Navbar />
      <CauseHero title = "Donate to XYZ Cause" location = 'Zimbabawe, Ontario' tldr = 'This will do xyz, allowing the population of abc to idek' subtitle = "Make all of your donations in one place. See how much of your donation actually goes to charity, download tax receipts, and see proof of donation all in one place" />
      <ChoosePlan bPlan = '25' cPlan = '1000' bBackers = '150' cBackers = '20'/>
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      <OpenSource />
    </>
  )
}
