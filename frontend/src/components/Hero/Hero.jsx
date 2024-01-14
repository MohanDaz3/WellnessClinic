import React from 'react'

const Hero = () => {
  return (
    <>
    {/* ================Hero section================== */}
    
    <section className='hero__section pt-[30px] 2xl:h-[800px]'>
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[900px] md:flex md:flex-row items-center justify-between">
        {/* ==========hero content============ */}
        <div>
          <div className='lg:w-[570px] bg-heading'>
            <h1 className='text-[30px] leading-[46px] text-headningColor font-[700] md:text-[80px] md:leading-[70px] ml-[20px]'>
              Don't Suffer Alone</h1>
              <h2 className='text-[28px] leading-[48px] ml-[20px] font-[700]'>
                let's talk it out
              </h2>
              <button className='btns ml-[20px]'>Book an Appoinment</button>
          </div>
          {/* ============hero-counter================ */}
          <div className='rating mt-[20px]  lg:mt-[40px] flex flex-col lg:flex-row lg:items-center md:flex-row gap-5 lg:gap-[25px]'>
            <div className='mr-[-30px]'>
              <h2 className='number text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
              <span className='line w-[100px] h-2 bg-yellowColor rounded-full block mt-[-20px]'></span>
              <p className='text__para'>Years of Experience</p>
            </div>
            <div className='mr-[-30px]'>
              <h2 className='number text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
              <span className='line w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-20px]'></span>
              <p className='text__para'>Patient Satisfication</p>
            </div>
            <div className='mr-[-30px]'>
              <h2 className='number text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
              <span className='line w-[100px] h-2 bg-purpleColor rounded-full block mt-[-20px]'></span>
              <p className='text__para'>Clinic location</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* =================Hero section ends========================== */}
    </>
  )
}

export default Hero
