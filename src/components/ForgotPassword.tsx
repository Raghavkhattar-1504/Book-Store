import { NavLink } from 'react-router-dom';
import education from '../assets/education.svg';

const ForgotPassword = () => {
    return (
        <div>
            {/* Navbar */}
            <div className='w-full h-[60px] bg-[#A03037] flex items-center justify-center'>
                <div className='flex items-center justify-between w-[80%] max-[450px]:w-[100%] h-full gap-[10px]'>
                    <div className='flex w-[60%] justify-between'>
                        <div className='flex gap-3 items-center max-[500px]:!ml-2 cursor-pointer' >
                            <img src={education} alt="Bookstore Logo" />
                            <h3 className='text-white text-[20px] max-[500px]:!mr-3'>Bookstore</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex justify-center items-center w-full h-[91vh]">
                <div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[400px] flex flex-col justify-around items-center'>
                    <h1 className='text-[25px] font-bold text-center !pb-[20px]'>Forgot Your Password ?</h1>

                    <div className='w-[100%] h-[350px] border border-[#E4E4E4] border-[2px] flex flex-col justify-between items-center rounded-[2%]'>
                        <div className='gap-y-[20px] flex flex-col w-[80%] !mt-[40px]'>
                            <p className='text-[#878787] text-[17px]'>Enter your email address and we'll send you a link to reset your password.</p>
                            <div>
                                <p className='text-[12px]'>Email Id</p>
                                <input type="text" className='w-[100%] border border-[#E2E2E2] h-[40px] rounded-[3px]' />
                            </div>
                            <button className='w-[100%] text-[white] bg-[#A03037] hover:bg-[#801F28] rounded-[3px] h-[40px] cursor-pointer'>Reset Password</button>
                        </div>

                        <NavLink
                            to="/signup"
                            className='w-[100%] h-[80px] border-[#E4E4E4] border-[2px] bg-[#F9F9F8] !mt-[25px] rounded-b-lg font-semibold flex justify-center items-center cursor-pointer'
                        >
                            CREATE ACCOUNT
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;