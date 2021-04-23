import Link from 'next/link'

export default function Navbar(props) {
  return (
    <nav className = 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-8 pb-8'>
    	<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
	        <div class="hidden sm:block sm:ml-6 justify-center">
	          <div class="flex space-x-8">
	            <Link href = '/'><a className = {props.className}>Home</a></Link>
	            <Link href = '/post'><a className = {props.className}>Post</a></Link>
		    	<Link href = '/donate'><a className = {props.className}>Donate</a></Link>
		    	<Link href = 'https://www.notion.so/shakeelhussein/SimpleDonate-6875a0a0770347e9a0c433c27895d703'><a className = {props.className}>White Paper</a></Link>
		    	<Link href = '/login'><a className = {props.className}>Log In</a></Link>
		    	<Link href = '/account/Bapu'><a className = {props.className}>Account</a></Link>

	          </div>
	        </div>
      </div>
	</nav>
  )
}

Navbar.defaultProps = {
	'className': 'w-full sm:w-auto flex-none text-gray-800 hover:text-gray-400 font-mono leading-6 py-3 sm:px-6  flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200'
}
