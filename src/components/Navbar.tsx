import education from '../assets/education.svg';
import { User, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 w-full z-1000">
            <div className='w-full h-[60px] bg-[#A03037] flex items-center justify-center'>
                <div className='flex items-center justify-between w-[70%] max-[450px]:w-[100%] h-full gap-[10px]'>
                    <div className='flex w-[60%] justify-between'>
                        <div className='flex gap-3 items-center max-[500px]:!ml-2 cursor-pointer'>
                            <img src={education} alt="Bookstore Logo" />
                            <h3 className='text-white text-[20px] max-[500px]:!mr-3'>Bookstore</h3>
                        </div>
                        <div className="w-[75%] sm:w-[60%] lg:w-[75%] h-[40px] flex items-center gap-2 rounded-[3px] !pl-[5px] bg-white max-[500px]:hidden ">
                            <Search className="text-gray-500 w-4 h-4 !ml-1" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent outline-none px-2 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div className='flex h-full'>
                        <div className='m-[10px] w-[80px] max-[500px]:w-[60px] border-x-2 border-[#801F28] flex flex-col justify-center items-center cursor-pointer'>
                            <User className="text-white mx-[20px]" />
                            <h6 className='text-[#FFFFFF] text-[12px]'>Profile</h6>
                        </div>
                        <div className='m-[10px] w-[80px] max-[500px]:w-[60px] border-r-2 border-[#801F28] flex flex-col justify-center items-center cursor-pointer'>
                            <ShoppingCart className="text-white" />
                            <h6 className='text-[#FFFFFF] text-[12px]'>Cart</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;