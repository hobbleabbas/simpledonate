import Link from 'next/link'

export default function ButtonSecondary(props) {
  return (
    <Link href = {props.path}>
    	<a className = 'inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-200'>
    		{props.body}
    	</a>
    </Link>
  )
}
