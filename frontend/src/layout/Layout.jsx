
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const layout = () => {
  return (
    <>
       <Header/>
       <ToastContainer/>
    <main>
    <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default layout

