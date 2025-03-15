import Footer from "./Footer"
import Navbar from "./Navbar"
import bookimage from '../assets/book-image-1.png'
import { Trash2 } from 'lucide-react';

const Wishlist = () => {

  const booklist = [
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
    { image: bookimage, title: 'Dont Make me Think', author: 'Steve Krug', sellingprice: 1500, mrp: 2000 },
  ]

  return (
    <div>
      <Navbar />

      <div className="w-[100%] min-h-[80vh] h-[80%] flex flex-col items-center !my-[18px]">

        <nav aria-label="breadcrumb" className="w-[70%] h-[100px] flex items-center max-md:w-[90%]">
          <ol className="flex w-full flex-wrap items-center rounded-md  px-4 ">
            <li className="flex gap-1 cursor-pointer items-center text-[15px] text-slate-500 transition-colors duration-300 hover:text-slate-800">
              <a href="/home">Home</a>
              <span className="pointer-events-none mx-2 text-slate-800 !mr-1">
                /
              </span>
            </li>
            <li className="flex gap-1 text-black cursor-pointer items-center text-[15px] transition-colors duration-300 hover:text-slate-800">
              <a href="/bookpage">My Wishlist</a>
              <span className="pointer-events-none mx-2 text-slate-800">
                /
              </span>
            </li>
          </ol>
        </nav>

        <div className="w-[70%] border border-[#E4E4E4] bg-[#F5F5F5] !px-[15px] !py-[10px]  ">
          <div>
            <h1 className="text-[20px] font-bold">
              My Wishlist
            </h1>
          </div>
        </div>
        <div className="w-[70%]">
          {booklist.map((book, index) => (
            <div className="border border-[#E4E4E4] !p-[40px] flex justify-between ">
              <div className="w-[40%] flex items-center">
                <div className="image wala w-[140px]">
                  <img src= {book.image} alt={book.title} className="w-[70%] h-[90px] "/>
                </div>
                <div className="container flex flex-col justify-left gap-y-2">
                  <p className="text-[18px] ">{book.title}</p>
                  <p className="text-[12px] text-[#9D9D9D]">by {book.author}</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-[15px] font-semibold">₹ {book.sellingprice}</p>
                    <p className="text-[12px] font-bold line-through text-[#9D9D9D]">₹{book.mrp}</p>
                  </div>
                </div>
              </div>
              <div className="delete wala right cotainer">
                <button className="text-[#9D9D9D] " ><Trash2 /></button>

              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Wishlist
