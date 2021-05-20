import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import CharityHero from '../../../components/charity/CharityHero'
import About from '../../../components/About'
import OpenSource from '../../../components/OpenSource'
import Contact from '../../../components/charity/Contact'
import { supabase } from '../../../utils/supabaseClient'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DetailsModule from '../../../components/charity/DetailsModule'
import CharityReach from '../../../components/charity/CharityReach'

export const getStaticPaths = async () => {
  return {
    paths: [{ params: {id: '4cf442cf-6104-4e89-9074-29b5548db45b'} }],
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  let { data: todos, error } = await supabase.from('charity').select('*').eq('id', '4cf442cf-6104-4e89-9074-29b5548db45b')
  if (error) console.log('error', error)

  return { props: { 
    causeData : todos[0],
  } }
}

export default function Home(props) {

  const data = props.causeData

  console.log(data)
  const name = data['charityName']
  const location = data['basedInCity'] + ', ' + data['basedInState']
  const status = data['receiptStatus']
  const logo = data['charityLogo']
  const about = data['aboutCharity']
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <Navbar />
      <CharityHero title = {name} logo = {logo} location = {location} status = {status} about = {about}/>
      <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8 '>
          <div className ="flex flex-row">
            <div className = 'w-2/3 mr-8 rounded-lg overflow-hidden'>
              <h1 className = 'text-2xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight text-gray-900 mb-2 sm:mb-4'>About {name}</h1>
              <div className = 'bg-gray-200 w-full h-0.5'></div>
              <p className = 'text-lg sm:text-lg lg:text-lg leading-none tracking-tight text-gray-900 mb-4 mt-2 sm:mt-4 sm:mb-6'>{about}</p>
              <h1 className = 'text-2xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight text-gray-900 mb-2 sm:mb-4'>Our Reach</h1>
              <div className = 'bg-gray-200 w-full h-0.5'></div>
              <CharityReach />
            </div>
            <div className = 'w-1/3'>
              <DetailsModule location = {location} backers = '150' ends = {props.ends} status = {status}/>
            </div>
          </div>
        </div>
      </header>
      <Contact />
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      <OpenSource />
    </>
  )
}


