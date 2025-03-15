import React, { useState } from 'react';
import { Select, Pagination } from "antd";
import BookCard from './BookCard';
import booklogo from '../assets/booklogo.png';


const { Option } = Select;

interface Book {
    image: string;
    title: string;
    author: string;
    rating: number;
    ratingsCount: number;
    price: number;
}

const BooksContainer: React.FC = () => {

    const [selectedValue, setSelectedValue] = useState<string>("relevance");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(16);

    const bookDetails: Book[] = Array(69).fill({
        image: booklogo,
        title: "Don't Make Me Think",
        author: "Steve Krug",
        rating: 4.5,
        ratingsCount: 20,
        price: 1500,
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bookDetails.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
        console.log("Selected: ", value);
    };

    return (
        <div className='flex flex-col justify-center items-center gap-10 !pt-[10px]'>
            <div className='w-[70%] h-[70px] flex justify-between items-center max-[450px]:flex-col'>
                <div className='flex items-center gap-1 max-[450px]:items-left'>
                    <p className='text-[30px]'>Books</p>
                    <p className='!mt-2 text-[15px] text-[#878787]'>({bookDetails.length} items)</p>
                </div>

                <Select
                    defaultValue="relevance"
                    style={{ width: 200 }}
                    onChange={handleChange}
                    getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
                >
                    <Option value="relevance">Sort By Relevance</Option>
                    <Option value="price-low">Price: Low to High</Option>
                    <Option value="price-high">Price: High to Low</Option>
                    <Option value="newest">Newest First</Option>
                </Select>
            </div>

            <div className='w-[80%] flex justify-center items-center flex-wrap gap-6' >
                {currentItems.map((book, index) => (
                    <BookCard key={index} {...book} />
                ))}
            </div>

            <div className='!mb-[40px]'>
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    total={bookDetails.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange} 
                    showSizeChanger={false} 
                    />
            </div>
        </div>
    );
}

export default BooksContainer;
