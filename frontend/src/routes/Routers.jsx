
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import DoctorsLogin from '../pages/Doctors/DoctorsLogin'
import DoctorsSignup from '../pages/Doctors/DoctorsSignup'
import UserProfile from '../pages/UserProfile'

import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/doctors'element={<Doctors/>}/>
      <Route path='/doctor/:id'element={<DoctorDetails/>}/>
      <Route path='/doctorslogin'element={<DoctorsLogin/>}/>
      <Route path='/doctorssignup'element={<DoctorsSignup/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Signup/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/services'element={<Services/>}/>
      <Route path='/profile/me'element={<UserProfile/>}/>
      
    </Routes>
  )
}

export default Routers
