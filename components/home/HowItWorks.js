export default function HowItWorks(props) {
  return (
    <section className = 'w-full relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-24'>
            <section className = 'flex flex-wrap -mx-3'>
                <div className = 'flex-col w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP ONE</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Donate To A Cause
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Choose a cause on our site and donate to it. All proceeds go directly to the cause.
                    </p>
                </div>
                <div className = 'flex-col w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP TWO</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Access Tax Receipts
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        You can download any eligible tax receipts from your SimpleDonate dashboard.
                    </p>
                </div>
                <div className = 'flex-col w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP THREE</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Receive Proof
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Get proof of where your donation went, including receipts and photos.
                    </p>
                </div>
            </section>
        </div>
    </section>
    
  )
}
