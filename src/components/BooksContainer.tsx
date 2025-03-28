import React, { useState, useEffect } from 'react';
import { Select, Pagination } from "antd";
import BookCard from './BookCard';
import { getAllBooksAPI } from '../utils/API';
import { useSearchParams } from 'react-router-dom';
import BookCover1 from '../assets/BookCover1.png';
import BookCover2 from '../assets/BookCover2.png';
import BookCover3 from '../assets/BookCover3.png';
import BookCover4 from '../assets/BookCover4.png';
import BookCover5 from '../assets/BookCover5.png';
import BookCover6 from '../assets/BookCover6.png';
import BookCover7 from '../assets/BookCover7.png';
import BookCover8 from '../assets/BookCover8.png';
import BookCover9 from '../assets/BookCover9.png';

const { Option } = Select;

interface Book {
    bookName: any;
    _id: string;
    image: string;
    title: string;
    author: string;
    rating: number;
    quantity: number;
    price: number;
    cover: string;
    discountPrice: number;
    description: string
}

const BooksContainer: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>("relevance");
    const [currentPage, setCurrentPage] = useState<number>(() => {
        const pageFromUrl = searchParams.get('page');
        return pageFromUrl ? parseInt(pageFromUrl, 10) : 1;
    });
    const [itemsPerPage] = useState<number>(16);
    const [loading, setLoading] = useState<boolean>(true);

    const bookCovers = [
        BookCover1, BookCover2, BookCover3, BookCover4,
        BookCover5, BookCover6, BookCover7, BookCover8,
        BookCover9
    ];

    const ratings: Number[] = [4.1, 4.3, 4.8, 4.2, 4.6, 4.5, 4.9];

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getAllBooksAPI();
                setBooks(response.result);
                setLoading(false);
                // console.log(response.result);

            } catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setSearchParams({ page: page.toString() })
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div className='flex flex-col items-center gap-10 !pt-[10px] min-h-[85vh]'>
            <div className='w-[70%] h-[70px] flex justify-between items-center max-[450px]:flex-col'>
                <div className='flex items-center gap-1 max-[450px]:items-left'>
                    <p className='text-[30px]'>Books</p>
                    <p className='!mt-2 text-[15px] text-[#878787]'>({books.length} items)</p>
                </div>

                <Select
                    defaultValue={selectedValue}
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

            {loading ? (
                <p className='min-h-[54vh]'>Loading books...</p>
            ) : (
                <div className='w-[80%] flex justify-center items-center flex-wrap gap-6'>
                    {currentItems.map((book, index) => (
                        <BookCard key={book._id}
                            _id= {book._id}
                            title={book.bookName}
                            author={book.author}
                            rating={ratings[index % ratings.length]}
                            ratingsCount={book.quantity}
                            discountedPrice={book.discountPrice}
                            price={book.price}
                            cover={bookCovers[index % bookCovers.length]}
                            description={book.description} />
                    ))}
                </div>
            )}

            <div className='!mb-[40px] mn'>
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    total={books.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}

export default BooksContainer;
