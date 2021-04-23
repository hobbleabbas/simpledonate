import Link from 'next/link'

export default function Button(props) {
  return (
    <Link href = {props.path}>
    	<a className = 'w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-900 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200'>
    		{props.body} {props.arr}
    	</a>
    </Link>
  )
}

Button.defaultProps = {
	arr: '→'
}
