import Link from 'next/link'
import Button from '../Button'
import Spacer from '../Spacer'

export default function Form(props) {
  return (
    <>
      <section className = 'relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <div className = 'px-4 sm:px-6 md:px-8 pb-24'>
        <h3 className = 'text-3xl sm:text-4xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8'>
          List On SimpleDonate
        </h3>
        <figure>
          <blockquote>
            <p className = 'max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6'>
              Please fill out the form below, and we'll be in touch.
            </p>
          </blockquote>
        </figure>
        <form className  = 'flex justify-left'>
          <div className = 'px-4 sm:px-6 md:px-8 pb-24 flex flex-col'>
            <label className = 'flex justify-left text-1xl font-bold pb-4' >Charity's Legal Name</label>
            <input className = {props.inputClass} placeholder = 'XYZ Charitable Funds' />
            <Spacer />
            <label className = 'flex justify-left text-1xl font-bold pb-4' >Tax Receipt Status</label>
            <select className = {props.selectClass}>
              <option className = {props.selectClass}>Cannot Issue Receipts</option>
              <option className = {props.selectClass}>Can Issue Receipts</option>
            </select>
            <Spacer />
            <label className = 'flex justify-left text-1xl font-bold pb-4' >Cause</label>
            <input className = {props.inputClass} placeholder = 'Primary School In Tanzania' />
            <Spacer />
            <label className = 'flex justify-left text-1xl font-bold pb-4' >Goal (Thousands USD)</label>
            <input className = {props.inputClass} type = 'number' placeholder = '$50' /> 
          </div>
        </form>
      </div>
      </section>
    </>
  )
}

Form.defaultProps = {
  inputClass: 'w-full sm:w-auto flex-none bg-gray-50 text-gray-800 hover:text-gray-400 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200',
  selectClass: 'w-full sm:w-auto '
}


