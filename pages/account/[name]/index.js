import {useRouter} from 'next/router'

const index = () => {

	const router = useRouter()
	const {name} = router.query
	return (
		<div>
			{name}
		</div>
	)
}

export default index