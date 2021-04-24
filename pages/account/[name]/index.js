import {useRouter} from 'next/router'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/account/AccountHero'
import ReceiptWrapper from '../../../components/account/ReceiptWrapper'
import Tabs from '../../../components/account/Tabs'

const index = () => {

	const router = useRouter()
	const {name} = router.query

	return (
		<>
			<Navbar />
			<Hero name = {name} subtitle = 'This is your account. Here, you can access tax receipts, manage recurring donations, get proof of donation, and more.' />
			<Tabs />
			<ReceiptWrapper />
		</>
	)
}

export default index