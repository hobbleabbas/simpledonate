import Link from 'next/link'
import ButtonWrapper from '../ButtonWrapper'

export default function Hero(props) {
  return (
    <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16'>
        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
        	<h1 className = 'text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10'>{props.title}</h1>
        	<p className = 'max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-4 sm:mb-4'>{props.subtitle}
        	</p>
            <div className = 'mb-4'>
            <dd class="text-lg sm:text-xl font-medium text-gray-700 rounded-full py-1 pl-2 pr-4 flex items-center mb-2">
                <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
                Tax Receipts (Where Available)
            </dd>
            <dd class="text-lg sm:text-xl font-medium text-gray-700 rounded-full py-1 pl-2 pr-4 flex items-center mb-2">
                <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
                Proof Of Donation
            </dd>
            <dd class="text-lg sm:text-xl font-medium text-gray-700 rounded-full py-1 pl-2 pr-4 flex items-center">
                <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
                Recurring Donations
            </dd>
            </div>
        	<ButtonWrapper hidden = {props.hidden}/>
        </div>
    </header>
  )
}
