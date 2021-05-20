import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import DonateHero from '../components/DonateHero'
import About from '../components/About'
import Button from '../components/Button'
import DonateModule from '../components/donate/DonateModule'
import OpenSource from '../components/OpenSource'
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from 'react'

export default function ThankYou() {

	const amountRaw = 420.69;
	const amount = '$' + amountRaw;

	return (
	<>
		<Navbar />
		<div className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16'>
		  	<h1 className = 'text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10'>Thank you! 🎉</h1>
		  	<h3 className = 'max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-8'>Your donation of {amount} has been processed and is on it's way! Thank you for helping making the world a better place.</h3>
			<Button path = '/' body = 'My Account' />
		</div>
		<div className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16'>
			<h2 className = 'text-xl sm:text-xl lg:text-3xl leading-none font-extrabold tracking-tight text-gray-900 mb-6 sm:mb-6'>What you can expect next</h2>
			<p className = 'text-lg mb-6 font-medium'>We try to be as transparent as possible in our processes, so here's what you can expect next. If you have any questions, please don't hestitate to reach out!</p>
			<div className = 'grid grid-cols-3 gap-4'>
				<div className="bg-white overflow-hidden shadow rounded-lg">
			      <div className="px-4 py-5 sm:p-6 flex flex-col">
			      	<div className="w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center mb-4">
				       	<p className = 'text-4xl text-blue-600 font-extrabold'>
				       		1
				       	</p>
				 	</div>
			      	<h1 className = 'text-xl font-bold mb-2'>Receive Receipt</h1>
			      	<p className = 'text-lg'>Receive a donation receipt, and if eligible, a CRA-Eligible tax receipt</p>
			      </div>
			    </div>
				<div className="bg-white overflow-hidden shadow rounded-lg">
			      <div className="px-4 py-5 sm:p-6 flex flex-col">
			      	<div className="w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center mb-4">
				       	<p className = 'text-4xl text-blue-600 font-extrabold'>
				       		2
				       	</p>
				 	</div>
			      	<h1 className = 'text-xl font-bold mb-2'>Donation Is Processed</h1>
			      	<p className = 'text-lg'>The cause organizing will deliver your donation to those who need it most.</p>
			      </div>
			    </div>
				<div className="bg-white overflow-hidden shadow rounded-lg">
			      <div className="px-4 py-5 sm:p-6 flex flex-col">
			      	<div className="w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center mb-4">
				       	<p className = 'text-4xl text-blue-600 font-extrabold'>
				       		3
				       	</p>
				 	</div>
			      	<h1 className = 'text-xl font-bold mb-2'>Receive Proof Of Donation</h1>
			      	<p className = 'text-lg'>Receive receipts, pictures, and more, detailing where exactly your donation went.</p>
			      </div>
			    </div>
			</div>
		</div>
		<About title = "We're Open Source" explain = "SimpleDonate is an open-source, non-profit project. If you'd like to contribute, check out our Git Repo below.">
      	</About>
      	<OpenSource />

	</>
	)
}
