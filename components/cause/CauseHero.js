import Link from 'next/link'
import ButtonWrapper from '../ButtonWrapper'
import DetailsModule from './DetailsModule'
import ButtonSecondary from '../ButtonSecondary'
import { BadgeCheckIcon } from '@heroicons/react/solid'

export default function CauseHero(props) {

  const progress = ((props.amountRaised/props.amountGoal)*100) + '%'
  
  // Check if company is verified, add badge
  const verified = true
  let icon 

  if (verified) {
    icon = '<BadgeCheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />'
  } else {
    icon = ''
  }

  // <div className = 'flex justify-items-center'>
  //      <ButtonSecondary path = '/' body = 'Recommend Cause'/>
  // </div>

  //<button>
  // <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
  // Hello
  // </button>

  return (
    <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16 '>
        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
          <div className = 'flex flex-row justify-between'>
            <h1 className = 'text-4xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-4 sm:mt-8 sm:mb-6'>{props.title}
              <span><BadgeCheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /></span>
            </h1>
          </div>
          <p className = 'text-blue-500 pb-8 text-lg'>{props.location.toUpperCase()} | <span className = 'text-gray-500'>{props.tldr}</span></p>
        	<div class="flex flex-row">
		  		<div className = 'w-2/3 mr-8 rounded-lg overflow-hidden'>
		  			<iframe className = 'w-full h-full' src="https://www.youtube.com/embed/DZQ0LMsgkg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		  		</div>
		  		<div className = 'w-1/3'>
		  			<DetailsModule location = {props.location} backers = '150' ends = {props.ends} progress = {progress} goal = {props.amountGoal} amount = {props.amountRaised}/>
		  		</div>
			</div>
        </div>
    </header>
  )
}