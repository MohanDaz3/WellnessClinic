import React from 'react'
import testi from '../../assets/images/testi.png'
import { Link } from 'react-router-dom'

const Testimony = () => {
  return (
   
    <section>
    <div className="container">
      <div className="flex justify-between gap-[80px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img className='' src={testi} alt="testi" />
        </div>
        {/* =============content============= */}
        <div className='w-full lg:w-1/2 xl:w-[670px] order-2 lg:order-1'>
            <p className='text-[25px] ml-[50px]'>why suffer</p>
            <h2 className='text-[50px] ml-[50px]'>Alone?we will help you......</h2>
            <p className=' w-3/4 ml-[50px]'>If things around are getting the worst of you, and are starting to affect your wellbeing, are causing stress,
                 or anxiety, that is when you should consider going for counseling or therapy.
                 Counseling can be an option when you want to overcome mental challenges such
                   as mental illness or even a mere confusion over what subjects you should choose...
                  </p>
                   <p className=' w-3/4 ml-[50px]'>
                   We can connect you with our team of certified clinical psychologists and 
                   therapists who understand and direct you in meaningful ways that will help you with
                    the process of healing till you become capable to fight your stressors head-on</p>
                    <Link to='/'>
                        <button className="btns ml-[50px]">📱 Call Us</button>
                    </Link>
        </div>
      </div>
    </div>
  </section>
  
    
    
  )
}

export default Testimony
