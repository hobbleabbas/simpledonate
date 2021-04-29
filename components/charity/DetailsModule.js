import Link from 'next/link'

export default function DetailsModule(props) {
    console.log(props.status)

    return (
		<div className = 'relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 xl:mr-4'>
			<article className = 'text-gray-900 leading-6'>
				<h2 className = 'transition-opacity duration-1500 delay-500 text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1 '>
					${props.amount} Raised asdasd Of ${props.goal} Goal
				</h2>
				<dl className = 'transition-opacity duration-1500 delay-500 flex flex-wrap divide-y divide-gray-200 border-b border-gray-200 '>
					<div className = 'px-4 sm:px-6 pb-6 pt-6'>
						<dd className = 'text-sm sm:text-base'>
							Ends {props.ends}
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
                    		Joined
                    	</dt>
                        <dd class="text-sm sm:text-base">
                        	{props.backers}
                        </dd>
                    </div>
                    <div class="w-full flex-none flex items-center px-4 sm:px-6 py-4">
                        <dt class="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                        	Receipt Status
                        </dt>
                        {props.status == true ? <dd class="text-sm sm:text-base font-medium text-gray-700 bg-green-100 rounded-full py-1 pl-2 pr-4 flex items-center">
                            <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                            Can Issue Receipts
                        </dd> : 
                        <dd class="text-sm sm:text-base font-medium text-gray-700 bg-red-100 rounded-full py-1 pl-2 pr-4 flex items-center">
                            <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-red-500 mr-2">
							  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
                            Can't Issue Receipts
                        </dd>
                    	}
                    </div>
				</dl>
				<div class="grid grid-cols-1 gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-4">
                    <a href = '#donate' class="w-full text-base font-medium rounded-lg bg-blue-700 hover:bg-blue-900 text-white py-3 text-center cursor-pointer transition-colors duration-200">Support Cause</a>
                </div>
			</article>
		</div>
  )
}
