import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import DonateHero from '../components/DonateHero'
import About from '../components/About'
import ButtonTertiary from '../components/ButtonTertiary'
import DonateModule from '../components/donate/DonateModule'
import OpenSource from '../components/OpenSource'
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from 'react'

export default function Donate() {

  const [todos, setTodos] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setError] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    let { data: todos, error } = await supabase.from('causes').select('*').order('id', true)
    if (error) console.log('error', error)
    else setTodos(todos)
  }

  return (
    <>
      <Navbar />
      <DonateHero title = "Donate To A Cause" hidden = 'hidden' subtitle = "Choose from the causes below to donate to. All claims are verified by SimpleDonate. You'll receive tax receipts and proof of donation in your account." />
      <section className = 'w-full relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-24'>
          <div className="grid grid-cols-2 gap-4">
            {todos.map((todo) => (
              <Causes key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </section>
      <About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      </About>
      <OpenSource />
    </>
  )
}

const Causes = ({ todo }) => {
  return (
    <div className = 'cols-span-1'>
      <DonateModule 
        amount = {todo.amountRaised} 
        goal = {todo.amountGoal}
        title = {todo.causeTitle}
        description = {todo.causeShortDescription}
        id = {todo.id}
        charity = {todo.charityName}
        charityId = {todo.charity}
        image = {todo.image}
      />
    </div>
  )
}
