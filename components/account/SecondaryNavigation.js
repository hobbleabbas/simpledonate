import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'


import Link from 'next/link'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

	const router = useRouter()
	const path = router.pathname

	let home = false
	let receipts = false
	let proof = false
	let all = false
	let billing = false

	if (path == '/account') {
		home = true
	} else if (path == '/account/manage/receipts') {
		receipts = true
	} else if (path == '/account/manage/proof') {
		proof = true
	} else if (path == '/account/manage/all') {
		all = true
	} else if (path == '/account/manage/billing') {
		billing = true
	}

	const navigation = [
	  { name: 'Account Home', href: '/account', current: home },
	  { name: 'Receipts', href: '/account/manage/receipts', current: receipts },
	  { name: 'Proof of Donation', href: '/account/manage/proof', current: proof },
	  { name: 'All Donations', href: '/account/manage/all', current: all },
	  { name: 'Manage Billing', href: '/account/manage/billing', current: billing },
	]

  	return (
	    <Disclosure as="header" className="bg-white border">
		    {({ open }) => (
	        <>
	          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
	           
	            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
	              {navigation.map((item) => (
	              	<Link href={item.href}>
		                <a
		                  key={item.name}
		                  className={classNames(
		                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
		                    'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
		                  )}
		                  aria-current={item.current ? 'page' : undefined}
		                >
		                  {item.name}
		                </a>
	                </Link>
	              ))}
	            </nav>
	          </div>
	        </>
		    )}
    	</Disclosure>
  	)
}