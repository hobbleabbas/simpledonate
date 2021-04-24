import Link from 'next/link'

export default function Tabs(props) {

	const style = {
		'border-radius': '18px'
	}

  	return (
	  	<section className = 'w-full relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto'>
	        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-8'>
			    <div className = 'relative col-start-1 col-end-4 px-4 sm:px-6 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-4 xl:col-end-3 row-start-1 row-end-2 xl:row-end-3 pb-8 lg:pb-11 xl:pb-0'>
					<div className = 'flex overflow-auto py-0.5 -my-0.5 pl-0.5 -mx-4 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0'>
						<ul className = 'whitespace-nowrap mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0 flex space-x-2 sm:space-x-6'>
							<li className = 'relative'>
								<div style = {style} className = 'absolute inset-0 bg-gray-100'></div>
								<button className = 'block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-900'>
								Receipts
								</button>
							</li>
							<li class="relative">
			                    <button type="button" class="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400">
			                    Proof of Donation
			                    </button>
			                </li>
			                <li class="relative">
			                    <button type="button" class="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400">
			                    All Donations
			                    </button>
			                </li>
			                <li class="relative">
			                    <button type="button" class="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400">
			                    Manage Recurring Donations</button>
			                </li>
						</ul>
					</div>
				</div>
			</div>
		</section>
  )
}
