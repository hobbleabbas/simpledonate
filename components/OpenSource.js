import Link from 'next/link'
import ButtonWrapper from './ButtonWrapper'
import ButtonTertiary from './ButtonTertiary'

export default function OpenSource(props) {
  return (
    <section className = 'relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'px-4 sm:px-6 md:px-8 pt-0 pb-24 -m-20'>
      		<ButtonTertiary path = 'https://github.com/hobbleabbas/simpledonate' body = 'GitHub' />
    	</div>
  	</section>
  )
}
