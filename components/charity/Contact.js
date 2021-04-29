import Button from '../Button'
export default function ChoosePlan(props) {

    const progressbar = {
        'width': '30%'
    }

    const selectStyle = {
        'padding': '5px 0px 5px 15%',
        'font-size': '18px',
        'border': '1px solid #CCC',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        'appearance': 'none',
        'border-radius': '0.75rem',
        'background': '#ffffff'
    }

    const inputStyle = {
        'padding': '5px 2.5% 5px 2.5%',
        'font-size': '18px',
        'font-weight': '800',
        'border': '1px solid #CCC',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        'appearance': 'none',
        'border-radius': '0.75rem',
        'background': '#ffffff',
        'width': '100px',
        'height': '3rem',
    }

  return (
    <section className = 'w-full relative z-10 text-left max-w-screen-lg xl:max-w-screen-xl mx-auto' id = 'donate'>
        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-24'>
                <div className = 'col-span-1 rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg p-4'>
                    <p className = 'text-blue-500 pb-4 text-xl'>CUSTOM PLAN</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        <span className = 'text-blue-600'>$<input placeholder = '0' type = 'number' style = {inputStyle}/></span> Donation
                    </h3>
                    <p className = 'text-2xl font-bold'>{props.cBackers} Backers</p>                
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Choose a cause on our site and donate to it. All proceeds go directly to the cause.
                    </p>
                    <div class="grid grid-cols-2 gap-x-1 sm:gap-x-2 text-center">
                        <select style = {selectStyle}>
                            <option value="once">Once</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <Button path = '/' body = 'Donate' />
                    </div>
                </div>
        </div>
    </section>
    
  )
}
