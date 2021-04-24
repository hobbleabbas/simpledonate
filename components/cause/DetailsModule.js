import Link from 'next/link'

export default function DetailsModule(props) {

	const progressbar = {
		'width': props.progress
	}

	// cursor-pointer
  return (
		<div className = 'relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 xl:mr-4'>
			<article className = 'text-gray-900 leading-6'>
				<h2 className = 'transition-opacity duration-1500 delay-500 text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1 '>
					${props.amount} Raised Of ${props.goal} Goal
				</h2>
				<div class="relative pt-2">
				  <div class="overflow-hidden h-2 mr-6 ml-6 text-xs flex rounded bg-blue-200">
				    <div style={progressbar} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
				  </div>
				</div>
				<dl className = 'transition-opacity duration-1500 delay-500 flex flex-wrap divide-y divide-gray-200 border-b border-gray-200 '>
					<div className = 'px-4 sm:px-6 pb-6 pt-6'>
						<dd className = 'text-sm sm:text-base'>
							{props.days} Days Left
						</dd>
					</div>
					<div class="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
                    	<dt class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                    		Location
                    	</dt>
                    	<dd class="text-black text-sm sm:text-base text-gray-900">
                    		{props.location}
                        </dd>
                    </div>
                    <div class="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
                    	<dt class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                    		Backers
                    	</dt>
                        <dd class="text-sm sm:text-base">
                        	{props.backers}
                        </dd>
                    </div>
                    <div class="w-full flex-none flex items-center px-4 sm:px-6 py-4">
                        <dt class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                        	Receipt Status
                        </dt>
                        <dd class="text-sm sm:text-base font-medium text-gray-700 bg-green-100 rounded-full py-1 pl-2 pr-4 flex items-center">
                            <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                            Tax Receipt Available
                        </dd>
                    </div>
				</dl>
				<div class="grid grid-cols-1 gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-4">
                    <div class="w-full text-base font-medium rounded-lg bg-blue-700 hover:bg-blue-900 text-white py-3 text-center cursor-pointer transition-colors duration-200">Support Cause</div>
                </div>
			</article>
		</div>
  )
}
