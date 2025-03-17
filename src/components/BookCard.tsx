import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookCard = (bookData: any) => {

    const navigate = useNavigate();

    return (
        <div className='w-[245px] h-[285px] border border-[#E2E2E2] hover:shadow-lg rounded-[5px] z-[100] cursor-pointer' onClick={() => navigate('/bookdetail')} >
            <div className=' h-[171px] bg-[#F5F5F5] w-[100%]  flex justify-center items-center'>
                <img src={bookData.cover} alt="Book Name" className='h-[135px]' />
            </div>
            <div className='bg-[#FFFFFF] h-[101px] w-[80%] !ml-10px '>
                <div className='flex flex-col !ml-[20px] gap-[2px]'>
                    <p className='text-[16px]'>{bookData.title}</p>
                    <p className='text-[13px] text-[#ADADAD]'>by {bookData.author}</p>
                    <div className='flex gap-x-1'>
                        <div className='bg-[green] flex justify-center items-center  w-[33px] h-[16px] rounded-[3px]'>
                            <p className='text-[white] text-[10px] !mr-[3px] !mt-[4px]'>{bookData.rating}</p>
                            <Star fill="white" className=" text-[white] h-[10px] w-[10px]" />
                        </div>
                        <p className='text-[13px] text-[#ADADAD]'>({bookData.ratingsCount})</p>
                    </div>
                    <div>
                        <p className='text-[15px]'> <b>Rs.{bookData.price}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard

