import Link from 'next/link'

export default function Button(props) {
  return (
    <Link href = {props.path}>
    	<a className = 'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-200'>
    		{props.body} {props.arr}
    	</a>
    </Link>
  )
}

Button.defaultProps = {
	arr: '→'
}
