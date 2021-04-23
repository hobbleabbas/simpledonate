import Link from 'next/link'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'

export default function Buttons(props) {
  return (
	<div className = 'flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center'>
		<Button path = '/donate' body = 'Donate'/>
		<ButtonSecondary path = 'https://www.notion.so/shakeelhussein/SimpleDonate-6875a0a0770347e9a0c433c27895d703' body = 'Read White Paper' />
	</div>

  )
}
