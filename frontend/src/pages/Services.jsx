import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'

const Services = () => {
  return (
    <section>
      <div className="conatiner">
        <div className='lg:w-[470px] mx-auto mt-[80px]'>
          <p className='sub-heading text-center'>
              Our Services
          </p>

          <h2 className='service-heading text-center'>
            What Services Provide?
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[80px] lg:mt-[55px]'>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>Family Counselling</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    Family therapy is most often used to help treat an individual’s problem that is affecting the entire family.
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon6} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>Depression & Anxiety Management</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Train yourself to think more healthy and hopeful way. Practice to be relaxed and mindful.
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>Sexual Life Wellness</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Intendent to help individuals & couples to resolve difficulties in sexual life and provide healthy romantic life.
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon4} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>Stress & Anger Management</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Training to cope up with daily life stressors and skill enhancement to tackle your anger.
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon5} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>IQ & Learning Enhancement</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Assessment for measuring individual’s intelligence and remedial training to overcome your learning difficulties.
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt=""/>
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>Child and Adolescents</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  We provide guidance for both parents and children to nurture healthy emotional and behavioral development .
                    </p>
                    <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Services
