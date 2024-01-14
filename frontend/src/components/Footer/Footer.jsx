
import { Link } from 'react-router-dom'
import hero3 from '../../assets/images/hero3.png'

import {AiFillYoutube,AiOutlineInstagram,AiFillFacebook,AiFillMail} from 'react-icons/ai'

const socialLinks=[
  {
    path:"",
    icon: <AiFillYoutube className='group:hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon: <AiOutlineInstagram className='group:hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon: <AiFillFacebook className='group:hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon: <AiFillMail className='group:hover:text-white w-4 h-5'/>
  },
 
];

const quickLinks1=[
  {
    path:'/home',
    display:"Home",
  },
  {
    path:'/services',
    display:"Services",
  },
  {
    path:'/About',
    display:"About",
  },
  {
    path:'/home',
    display:"Support",
  },
  {
    path:'/contact',
    display:"Contact",
  },
  
];
const quickLinks2=[
  {
    path:'/doctors',
    display:"Find a Doctor",
  },
  {
    path:'',
    display:"Request an Appoinment",
  },
  {
    path:'/',
    display:"Get a Opinion",
  },
  {
    path:'/',
    display:"Find Location",
  },
];

// const quickLinks3=[
//   {
//     path:'/home',
//     display:"Support",
//   },
//   {
//     path:'/contact',
//     display:"Contact",
//   },
 

  
// ];

const Footer = () => {
  const year= new Date().getFullYear()
  return (
   <footer className='pb-16 pt-10 bg-slate-200' >
    <div className="container" >
      <div className="flex justify-betweenflex-col md:flex flex-wrap gap-[60px]">
        <div>
          <img src={hero3} alt="" />
          
          <p className='text-[18px] leading-7 font-[400] text-black mt-8'>Copy © {year} developed by Das All Rights Reserved</p>
          <div className='flex items-center gap-3 mt-8'>
            {socialLinks.map((link,index)=><Link to={link.path} key={index} className='w-16 h-16 border-solid border-[#0c0c0c] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
              {link.icon}</Link>)}
          </div>
        </div>
        <div>
          <ul>
            {quickLinks1.map((item,index)=><li key={index}className='mb-4' ><Link to={item.path} className='text-[18px] leading-7 font-[400] text-black'>{item.display}</Link></li>)}
          </ul>
        </div>
        <div>
          <ul>
            {quickLinks2.map((item,index)=><li key={index}className='mb-4'><Link to={item.path} className='text-[18px] leading-7 font-[400] text-black'>{item.display}</Link></li>)}
          </ul>
        </div>
        <div>
         
          <input
                className="w-[220px] h-[30px] border-solid border-[#0c0c0c] rounded-md p-2"
                type="mail"
                placeholder="email"
              />
              
              <button className="w-[120px] h-[30px] border-solid bg-red-600 rounded-full ml-2 text-[16px] font-[500]">Subscribe</button>
        </div>
      
        
        
      </div>
    </div>
   </footer>
  )
}

export default Footer
