import { useState } from "react"
import { Link } from "react-router-dom";




const Login = () => {

  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const [showPassword, setShowPassword] = useState(false);


  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 

  return (
   <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
    <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
    Hiii!! <span className="text-primaryColor">Welcome</span> Doctor
    </h3>

    <form className="py-4 md:py-0">
      <div className="mb-5">
      <input type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleInputChange} 
      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px]
      leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required/>
      
      </div>
      <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px]
              leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
            <label className="absolute top-1/2 right-9 transform -translate-y-1/2 cursor-pointer">
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
          
      <div className="mt-7">
        <button type="submit" className="w-full btn rounded-lg px-4 py-3">Login</button>
      </div>
      <p className="mt-5 text-textColor text-center">Don&apos;t have an Account?<Link to='/doctorssignup' className="text-primaryColor">Signup</Link></p>
    </form>
    </div>
   </section>
  )
}

export default Login
