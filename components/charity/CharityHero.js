import Link from 'next/link'
import ButtonWrapper from '../ButtonWrapper'

export default function CauseHero(props) {

  return (
    <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
        <div className = 'flex flex-wrap flex-row mb-4'>
          <div className = 'w-10 h-10 p-2 bg-white shadow-lg mr-4 rounded-full'>
            <img src = {props.logo} className = 'h-full'/>
          </div>
          <div>
            <h1 className = 'text-3xl sm:text-3xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-6'>{props.title} | <span className = 'text-blue-600'>{props.location}</span></h1>
      	  </div>
        </div>
      </div>
    </header>
  )
}
