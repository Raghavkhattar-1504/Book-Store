import Navbar from './Navbar'
import Footer from './Footer'
import confetti from '../assets/confetti.png'

const OrderPlaced = () => {
    return (
        <div>
            <Navbar />

            <div className='w-[100%] h-[85vh] flex flex-col justify-evenly items-center'>
                <div className='flex flex-col justify-center items-center w-full sm:w-[40%]'>
                    <img
                        src={confetti}
                        alt="Order Successful !"
                        className='h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]'
                    />
                    <p className='font-semibold text-xl sm:text-[25px] text-center'>Order Placed Successfully!</p>
                    <p className='text-sm sm:text-[15px] opacity-75 text-center !pt-[20px] w-[80%] sm:w-[60%]'>
                        hurray!!! your order is confirmed the order id is '#123456' save the order id for further communication..
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center w-full'>
                    <div className="hidden sm:block overflow-x-auto w-[80%]">
                        <table className="w-full border border-[#DCDCDC] rounded-[2px] shadow-lg overflow-hidden">
                            <thead>
                                <tr className="bg-[#FAFAFA] border-[#DCDCDC]">
                                    <th className="!py-4 !px-6 border-[#DCDCDC] w-1/3 text-[15px] font-semibold">Email Us</th>
                                    <th className="!py-4 !px-6 border-r border-[#DCDCDC] w-1/3 text-[15px] font-semibold">Contact Us</th>
                                    <th className="!py-4 !px-6 w-1/3 text-[15px] font-semibold">Address</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="hover:bg-gray-200 transition-all text-center">
                                    <td className="py-4 px-6 border-r border-gray-300 text-[15px]">admin@bookstore.com</td>
                                    <td className="py-4 px-6 border-r border-gray-300 text-[15px]">+91 8163475881</td>
                                    <td className="py-4 px-6 text-[12px]">42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="block sm:hidden w-[90%] max-w-md">
                        <div className="border border-[#DCDCDC] rounded-[2px] shadow-lg overflow-hidden">
                            <div className="border-b border-[#DCDCDC]">
                                <div className="bg-[#FAFAFA] px-4 py-2 font-semibold text-sm border-b border-[#DCDCDC]">
                                    Email Us
                                </div>
                                <div className="px-4 py-3 text-sm text-gray-700">
                                    admin@bookstore.com
                                </div>
                            </div>
                            
                            <div className="border-b border-[#DCDCDC]">
                                <div className="bg-[#FAFAFA] px-4 py-2 font-semibold text-sm border-b border-[#DCDCDC]">
                                    Contact Us
                                </div>
                                <div className="px-4 py-3 text-sm text-gray-700">
                                    +91 8163475881
                                </div>
                            </div>
                            
                            <div>
                                <div className="bg-[#FAFAFA] px-4 py-2 font-semibold text-sm border-b border-[#DCDCDC]">
                                    Address
                                </div>
                                <div className="px-4 py-3 text-xs text-gray-700">
                                    42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default OrderPlaced