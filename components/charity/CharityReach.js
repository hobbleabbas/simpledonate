import Link from 'next/link'

export default function CharityReach(props) {
    console.log(props.status)

    return (
        <>
    		<div className = 'mb-4 mt-2 sm:mt-4'>
                <dd class="text-lg sm:text-xl font-medium text-gray-700 rounded-full py-1 pl-2 pr-4 flex items-center mb-2">
                    {status == true ? 
                    <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg> : 
                    <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-red-500 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    }
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
        </>
  )
}
