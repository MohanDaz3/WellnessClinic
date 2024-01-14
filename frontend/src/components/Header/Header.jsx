import {useEffect,useRef,useState} from 'react'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import {NavDropdown,Badge,Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { useLogoutMutation } from '../../slices/userSlice/usersApiSlice'
import { clearCredentials } from '../../slices/authSlice'
import {BiMenu} from "react-icons/bi"
import logo from '../../assets/images/hero3.png'
import userImg from '../../assets/images/avatar-icon.png'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'



const navLinks=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/doctors',
    display:'Psychologists'
  },
  {
    path:'/About',
    display:'About'
  },
  {
    path:'/contact',
    display:'Contact'
  },
  
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false);
  
  
  const {userInfo}=useSelector((state)=>state.auth)
  console.log("544444444444444");
  console.log(userInfo);
  
   




  

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };




  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall]=useLogoutMutation();

  const logoutHandler =async()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(clearCredentials());
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

    
   
 
    
    

  return (

    

    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
            {/* ===========logo=========== */}
            <div className='mb-1 max-w-[100%]'>
              
              <Image src={logo} alt='logo' className='max-w-[130%] h-[100px]'/>
            </div>
            {/*==========menu============  */}
            <div className={`navigation ${showMenu ? 'show__menu' : ''}`} ref={menuRef}onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.4rem] mt-4  " >
                  {
                    navLinks.map((link,index)=><li key={index} >
                      <NavLink to={link.path} className={navClass=> navClass.isActive? "text-primaryColor text-[20px] leading-7 font-[600]"
                      :"text-textColor text-[20px] leading-7 font-[500] hover:text-primaryColor"} style={{textDecoration:'none'}}>
                       {link.display} </NavLink>   
                    </li>)
                  }
                  </ul>   
            </div>
                 {userInfo?(
                  <>
                  <NavDropdown title={userInfo.name} id='username' className='mr-[-40px]'>
                    <LinkContainer to='/profile/me'>
                      <NavDropdown.Item>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={ logoutHandler }>Logout</NavDropdown.Item>
                  </NavDropdown>
                  <>
                  <figure className="w-[65px] h-[65px] mr-[-35px] rounded-full">
                    <img src={userInfo?userInfo.image:userImg} className="w-full rounded-full" alt="avatar"/>
                  </figure>
                  </>
                  
              
                  </>
                 ):(
                  <>
                   
                  <Link to='/login'className='login-btn mb-8 ml-[160px] 'style={{textDecoration:'none'}}>
                  <button className="bg-red-600 btns py-4 px-3 text-white text-[18px] font-[600] h-[26px] flex items-center justify-center rounded-[80px]">Login</button>
                </Link>
                <div className='avatar mt-4'>
                
                <figure className="w-[65px] h-[65px] rounded-circle">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              
            </div>
                  </>
                 )}
                 
                
              
            
            {/*========nav right=================  */}
            <div className="flex items-center gap-2">
            
                <span className='lg:hidden' onClick={toggleMenu}>
                  <BiMenu className="w-6 h-6 cursor-pointer"/>
                </span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
