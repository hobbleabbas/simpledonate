import ReceiptModule from './ReceiptModule'

export default function ReceiptWrapper(props) {
  return (
  	<section className = 'w-full relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-24'>
		    <div className="grid grid-cols-2 gap-4">
				<div className = 'cols-span-1'>
					<ReceiptModule
						amount = '12,000' 
						goal = '20,000'
						title = 'This is a title'
						description = 'A short description explaining where this donation is intented to go. A short description explaining where this donation is intented to go.' 
						id = '5'
						charity = 'ABC Charity'
						cursor = 'cursor-default'
					/>
				</div>
				<div className = 'cols-span-1'>
					<ReceiptModule
						amount = '12,000' 
						goal = '20,000'
						title = 'This is a title'
						description = 'A short description explaining where this donation is intented to go. A short description explaining where this donation is intented to go.' 
						id = '5'
						charity = 'ABC Charity'
						cursor = 'cursor-pointer'
					/>
				</div>
				<div className = 'cols-span-1'>
					<ReceiptModule
						amount = '50,000' 
						goal = '100,000' 
						title = 'This is a title'
						description = 'A short description explaining where this donation is intented to go. A short description explaining where this donation is intented to go.'
						id = '5'
						charity = 'AWS Charity'
					/>
				</div>
				<div className = 'cols-span-1'>
					<ReceiptModule
						amount = '5,000' 
						goal = '8,000' 
						title = 'This is a title'
						description = 'A short description explaining where this donation is intented to go. A short description explaining where this donation is intented to go.'
						id = '5'
						charity = 'RDS Charity'
					/>
				</div>
			</div>
		</div>
	</section>
    
  )
}
