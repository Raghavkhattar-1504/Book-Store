import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookCard = (bookData: any) => {
console.log("BOOOK DATA: ", bookData);
    const navigate = useNavigate();
    

    return (
        <div className='w-[245px] h-[285px] border border-[#E2E2E2] hover:shadow-lg rounded-[5px] z-[100] cursor-pointer' 
                onClick={() => navigate(`/bookdetails/${bookData._id}`, {state:{data: bookData}})} >
            <div className=' h-[171px] bg-[#F5F5F5] w-[100%]  flex justify-center items-center'>
                <img src={bookData.cover} alt="Book Name" className='h-[135px]' />
            </div>
            <div className='bg-[#FFFFFF] h-[101px] w-[80%] !ml-10px '>
                <div className='flex flex-col !ml-[15px] gap-[2px]'>
                    <p className='text-[14px] !mt-[3px]'>{bookData.title}</p>
                    <p className='text-[13px] text-[#ADADAD]'>by {bookData.author}</p>
                    <div className='flex gap-x-1'>
                        <div className='bg-[green] flex justify-center items-center  w-[33px] h-[16px] rounded-[3px]'>
                            <p className='text-[white] text-[10px] !mr-[3px] !mt-[4px]'>{bookData.rating}</p>
                            <Star fill="white" className=" text-[white] h-[10px] w-[10px]" />
                        </div>
                        <p className='text-[13px] text-[#ADADAD]'>({bookData.ratingsCount})</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <p className='text-[15px]'> <b>Rs.{bookData.discountedPrice}</b></p>
                        <p className='text-[12px] text-[#ADADAD] line-through'>Rs.{bookData.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard

