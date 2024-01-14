import express from 'express'
import{registerUser,loginUser,logoutUser,getUserProfile} from '../controller/userController.js '


const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',logoutUser)
router.get('/profile/me',getUserProfile)

export default router