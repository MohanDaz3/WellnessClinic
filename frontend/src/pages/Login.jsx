import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { useLoginMutation } from "../slices/userSlice/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false)
  const [login] = useLoginMutation();
  const {userInfo} = useSelector((state) => state.auth)

  useEffect(()=>{
    if(userInfo){
      navigate('/home')
    }
  },[navigate,userInfo])
 
  const [showPassword, setShowPassword] = useState(false);
  

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  // const handleInputChange = e=>{
  //   setFormData({...formData,[e.target.name]:e.target.value})
  // }

  const submitHandler = async(e)=>{
    e.preventDefault();
    setLoading(true)
    
    try {
      const res = await login({email,password}).unwrap();
      dispatch(setCredentials({...res}))
     
      navigate('/home')
      toast.success("login successfull")
    } catch (err) {
      toast.error(err?.data?.message||err.error)
      setLoading(false)
    }

  }
 

  return (
   <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
    <h3 className="text-headingColor text-[30px] leading-9 font-bold mb-10 ">
      Hello!!! <span className="text-primaryColor">Welcome</span> Back
    </h3>

    <form onSubmit={submitHandler} className="py-4 md:py-0">
      <div className="mb-5">
      <input type="email" placeholder="Enter Your Email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} 
      className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px]
      leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required/>
      
      </div>
      <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px]
              leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            
          </div>
          <div className="mb-6 relative">
          <label className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer leading-7">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-primaryColor"
              />
              <span className="text-headingColor text-sm ml-2">Show Password</span>
            </label>
          </div>
          {/* <div className="mb-5 ml-2">
            <label className="text-headingColor">
              Choose type:
              <select
                value={userType}
                onChange={handleUserTypeChange}
                className="ml-3 px-4 py-2 border border-solid border-[#0066ff61] rounded-md focus:outline-none focus:border-b-primaryColor text-[16px] leading-6 text-headingColor"
              >
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
          </div> */}
          <p className="mt-12">Are you a Doctor?<Link to='/doctorslogin' className="text-primaryColor ">Doctors Login</Link></p>
      <div className="mt-7">
        <button disabled={loading && true} type="submit" className="w-full btns rounded-lg px-4 py-3">{loading?(<HashLoader size={45} color="#ffffff" speedMultiplier={8.5} />):('Login')}</button>
      </div>
      <p className="mt-5 text-textColor text-center">Don&apos;t have an Account?<Link to='/register' className="text-primaryColor font-medium ml-1">Signup</Link></p>
    </form>
    </div>
   </section>
  )
}

export default Login
