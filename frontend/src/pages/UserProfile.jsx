
import { useSelector } from 'react-redux'



const userProfile = () => {
    const {userInfo} = useSelector((state)=>state.auth)
    console.log(userInfo);
  return (
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-3 gap-10'>
        <div className='pb-[50px] px-[30px] rounded-md'>
            <div className='flex items-center justify-center'>
                <figure className=' w-[200px] h-[200px] rounded-full border-2 border-solid border-primaryColor'>
                    <img src={userInfo.image} alt='' className='w-full h-full rounded full'/>
                </figure>
            </div>
            <div className='text-center mt-4'>
                <h3 className='text-[24px] leadinig-[32px] text-headingColor font-bold'>{userInfo.name}</h3>
                <p className='text-textColor text-[20px] leading-6 font-medium'>{userInfo.email}</p>
                <p className='text-textColor text-[20px] leading-6 font-medium'>Blood Type:{userInfo.bloodType}</p>
            </div>
            <div className='mt-[50px] md:mt-[100px]'>
                <button className='w-full bg-[#181A1E] p-3 text-[18px] leading-8 rounded-md text-white'>Logout</button>
                <button className='w-full bg-red-600 mt-3 p-3 text-[18px] leading-8 rounded-md text-white'>Delete Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default userProfile
