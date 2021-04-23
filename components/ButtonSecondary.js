import Link from 'next/link'

export default function ButtonSecondary(props) {
  return (
    <Link href = {props.path}>
    	<a className = 'w-full sm:w-auto flex-none bg-gray-50 text-gray-800 hover:text-gray-400 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200'>
    		{props.body}
    	</a>
    </Link>
  )
}
