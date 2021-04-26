import Link from 'next/link'
import ButtonWrapper from '../ButtonWrapper'
import DetailsModule from './DetailsModule'

export default function CauseHero(props) {
  return (
    <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16 -mt-8'>
        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
        	<h1 className = 'text-4xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-4 sm:mt-8 sm:mb-6'>{props.title}</h1>
        	<p className = 'text-blue-500 pb-4'>{props.location.toUpperCase()} | <span className = 'text-gray-500'>{props.tldr}</span></p>
        	<div class="flex flex-row">
		  		<div className = 'w-2/3 mr-8 rounded-lg overflow-hidden'>
		  			<iframe className = 'w-full h-full' src="https://www.youtube.com/embed/DZQ0LMsgkg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		  		</div>
		  		<div className = 'w-1/3'>
		  			<DetailsModule location = {props.location} backers = '150' days = '5' progress = '70%' goal = '8000' amount = '5000'/>
		  		</div>
			</div>
        </div>
    </header>
  )
}
