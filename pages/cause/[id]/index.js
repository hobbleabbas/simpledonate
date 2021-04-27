import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import CauseHero from '../../../components/cause/CauseHero'
import About from '../../../components/About'
import ChoosePlan from '../../../components/cause/ChoosePlan'
import Button from '../../../components/Button'
import ButtonTertiary from '../../../components/ButtonTertiary'
import OpenSource from '../../../components/OpenSource'
import { supabase } from '../../../utils/supabaseClient'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DonateModule from '../../../components/donate/DonateModule'

export const getStaticPaths = async () => {
  return {
    paths: [{ params: {id: '10741abf-c6f7-4ac2-b04f-27ded3f66e99'} }],
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  let { data: todos, error } = await supabase.from('causes').select('*').eq('id', '10741abf-c6f7-4ac2-b04f-27ded3f66e99')
  if (error) console.log('error', error)

  return { props: { causeData : todos[0] } }
}

export default function Home(props) {

  const data = props.causeData

  console.log(data)
  const title = data['causeTitle']
  const location = data['city'] + ', ' + data['state']
  const tldr = data['causeShortDescription']
  const amountRaised = data['amountRaised']
  const amountGoal = data['amountGoal']
  const bPlan = data['bPlan']
  const cPlan = data['cPlan']

  const router = useRouter()
  const { pid } = router.query

  console.log(router.query['id'])

  return (
    <>
      <Navbar />
      <CauseHero title = {title} location = {location} tldr = {tldr} amountRaised = {amountRaised} amountGoal = {amountGoal} />
      <ChoosePlan bPlan = {bPlan} cPlan = {cPlan} bBackers = '150' cBackers = '20' days = '{days}' />
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      <OpenSource />
    </>
  )
}


