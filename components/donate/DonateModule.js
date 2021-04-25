import Spacer from '../Spacer'
import Link from 'next/link'

export default function DonateModule(props) {

	const goal = props.goal
	const raised = props.amount

	const progress = ((raised/goal)*100)+'%'
	console.log(progress)
	
	const progressbar = {
		'width': progress
	}

  	return (
	    <div className = 'w-full shadow rounded-md flex flex-col'>
	    	<img className = 'rounded-t-md' src = 'https://www.dccomics.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg'></img>
	    	<div className = 'justify-left p-8'>
		        <p className = 'text-blue-500 pb-2'>${props.amount} of ${props.goal} raised.</p>
		        <div class="relative pt-1">
				  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
				    <div style={progressbar} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
				  </div>
				</div>
		        <h3 className = 'text-2xl sm:text-2xl lg:text-2xl leading-none font-extrabold text-gray-900 tracking-tight mb-2'>
		            {props.title}
		        </h3>
		        <p className = 'text-base text-1xl mb-4'>
		            {props.description}
		        </p>
		        <Link href = 'cause/[id]' as = {'/cause/${props.id}'}>
		        	<a className = 'text-base text-1xl mb-4 font-bold'>By {props.charity}</a>
		        </Link>
				<p className = 'mb-4'></p>
		        <Link href = 'cause/[id]' as = {'/cause/${props.id}'}>
		        	<a className = 'text-md text-blue-600 font-bold'>See More →</a>
		        </Link>
	        </div>
	    </div>
    
  )
}
