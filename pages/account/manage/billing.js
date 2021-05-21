import {useRouter} from 'next/router'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/account/AccountHero'
import ReceiptWrapper from '../../../components/account/ReceiptWrapper'
import Tabs from '../../../components/account/Tabs'
import SecondaryNavigation from '../../../components/account/SecondaryNavigation'

const index = () => {

	const router = useRouter()
	const {name} = router.query

	return (
		<>
			<Navbar />
			<SecondaryNavigation />
			<Hero name = {name} subtitle = 'Billing page' />
			<ReceiptWrapper />
		</>
	)
}

export default index