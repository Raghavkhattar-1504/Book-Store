
import Navbar from './Navbar'
import Footer from './Footer'
import loggedout from '../assets/Page-1.svg'
import { useNavigate } from 'react-router-dom'

const LoggedOut = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div className='flex-1 w-full flex flex-col justify-evenly items-center px-4 py-8'>
                <div className='max-w-md w-full flex flex-col justify-evenly items-center gap-10'>
                    <div className='w-full'>
                        <p className='text-center font-semibold text-xl md:text-[25px]'>PLEASE LOGIN</p>
                        <p className='text-center text-sm md:text-[15px] text-[#9D9D9D]'>Log in to view items in your wishlist.</p>
                    </div>
                    
                    <img 
                        src={loggedout} 
                        alt="Please Login" 
                        className="w-[15%] max-w-xs" 
                    />
                    
                    <button className='border border-[#A03037]-100 text-[#A03037] !px-4 !py-2 rounded-[2px] cursor-pointer'
                    onClick={()=>navigate('/')}
                    >
                        LOGIN/SIGNUP
                    </button>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default LoggedOut