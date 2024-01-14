

import React, { useEffect, useState } from 'react'
import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/patient-avatar.png'
import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary.js';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/userSlice/usersApiSlice.js';
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice.js';
import HashLoader from 'react-spinners/HashLoader.js';

const Signup = () => {

  const [selectedFile,setSelectedFile]=useState(null)
  const [previewUrl,setPreviewUrl]=useState("")
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    photo:'selectedFile',
    gender:""
  })
  
   const [show1Password, setShow1Password] = useState(false);
   const [show2Password, setShow2Password] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [loading,setLoading] = useState(false);
   const [signup] = useRegisterMutation()
  //  const {userInfo} = useSelector((state)=>state.auth)

  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange=async event=>{
    const file=event.target.files[0]
    const data = await uploadImageToCloudinary(file)
    console.log('New Preview URL:', data.url);
    setPreviewUrl(data.url);
  
    console.log('New Selected File:', data.url);
    setSelectedFile(data.url);
  
    console.log('New Form Data Photo:', data.url);
    setFormData({ ...formData, photo: data.url });
  }

  useEffect(() => {
    console.log('Form Data:', formData);
  }, [formData]);
  
  
  const handleCheckbox1Change = () => {
    setShow1Password(!show1Password);
  };
  const handleCheckbox2Change = () => {
    setShow2Password(!show2Password);
  };

  // useEffect(()=>{
  //   if(userInfo){
  //     navigate('/home')
  //   }
  // },[navigate,userInfo])

  const submitHandler=async event=>{
    event.preventDefault()
    setLoading(true)
    if(formData.password!==formData.cpassword){
      toast.error("password does not match!!!")
    }else{
      try {
        const res = await signup({...formData})
        dispatch(setCredentials({...res}))
        toast.success("Created successfully")
        navigate('/login')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
        setLoading(false)
      }
    }
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[900px]  mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-2'>
        {/* ==============image box=============== */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg h-[100px]'>
            <figure className='rounded-l-lg'>
                <img src={signupImg} alt="" />
            </figure>
          </div>
          {/*================signup box===============  */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[28px] leading-9 font-bold mb-10'>
            Hii!!<span className='text-primaryColor'>User</span> Create an <span className='text-primaryColor'>Account</span>
            </h3>
            <form onSubmit={submitHandler}>
            <div className="mb-5">
             <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange} className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px]
              leading-7 text-headingColor placeholder:text-textColor cursor-pointer" />
           </div>
            <div className="mb-5">
             <input type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px]
              leading-7 text-headingColor placeholder:text-textColor cursor-pointer" />
           </div>
            <div className="mb-5 relative">
             <input type={show1Password ? "text" : "password"} placeholder="Create your Password" name="password" value={formData.password} onChange={handleInputChange} className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px]
              leading-7 text-headingColor placeholder:text-textColor cursor-pointer" />
              <label className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer leading-7">
              <input
                type="checkbox"
                checked={show1Password}
                onChange={handleCheckbox1Change}
                className="form-checkbox1 h-5 w-5 text-primaryColor"
              />
              <span className="text-headingColor text-sm ml-2">Show Password</span>
            </label>
           </div>
            <div className="mb-5 relative">
             <input type={show2Password ? "text" : "password"} placeholder="Confirm your Password" name="cpassword" value={formData.cpassword} onChange={handleInputChange} className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px]
              leading-7 text-headingColor placeholder:text-textColor cursor-pointer" />
              <label className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer leading-7">
              <input
                type="checkbox"
                checked={show2Password}
                onChange={handleCheckbox2Change}
                className="form-checkbox2 h-5 w-5 text-primaryColor"
              />
              <span className="text-headingColor text-sm ml-2">Show Password</span>
            </label>
           </div>
           <p className="mt-2 mb-2">Are you a Doctor?<Link to='/doctorssignup' className="text-primaryColor ">Doctors Signup</Link></p>
           <div className='mb-2  flex items-center justify-between'>
           <label className='text-headingColor font-bold text-[14px] leading-6'>
            gender:
            <select name="gender" id="" value={formData.gender} onChange={handleInputChange} className=' text-textColor font-semibold text-[12x] leading-7 px-4 py-3 focus:outline-none '>
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Other</option>
            </select>
           </label>
           </div>
           
           <div className='mb-5 flex items-center gap-3'>
              {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor'>
                  <img src={previewUrl} alt="" className=' w-full rounded-full' />
              </figure>}
              <div className='relative w-[130px] h-[50px]'>
                <input type="file" name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg,.png' className='absolute top-0 left-0 w-full opacity-0 cursor-pointer' />
                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6
                 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer '>upload photo</label>
              </div>
           </div>
           <div className="mt-2">
        <button disabled={loading && true} type="submit" className="w-full btns rounded-lg px-4 py-3">{loading?(<HashLoader size={45} color="#ffffff" speedMultiplier={8.5} />):('Signup')}</button>
      </div>
      <p className="mt-5 text-textColor text-center">Already have an Account?<Link to='/login' className="text-primaryColor font-medium ml-1">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
