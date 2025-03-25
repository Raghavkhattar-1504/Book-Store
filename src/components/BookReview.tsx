import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { addBookReviews, getBookReviews } from '../utils/API';

function BookReview() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewComment, setReviewComment] = useState("");
    const [reviews, setReviews] = useState<ResponseType["result"]>([]);
    const { bookId } = useParams();

    interface User {
        _id: string;
        fullName: string;
    }

    interface Review {
        approveComment: boolean;
        _id: string;
        user_id: User;
        product_id: string;
        comment: string;
        rating: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
    }

    interface ResponseType {
        success: string;
        message: string;
        result: Review[];
    }

    const getInitials = (fullName: string) => {
        return fullName
            ? fullName
                  .split(" ")
                  .map(name => name[0])
                  .join("")
                  .toUpperCase()
            : JSON.parse(localStorage.getItem("token") || "null")?.name?.slice(0, 1) || "U";
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                console.log("bookId:", bookId); 
                if (!bookId) {
                    console.warn("No bookId provided, skipping fetch.");
                    return;
                }

                const response: ResponseType = await getBookReviews(bookId);

                const reviewsData = Array.isArray(response.result) ? response.result.reverse() : [];
                setReviews(reviewsData); 
            } catch (error) {
                console.error("Error fetching reviews:", error); 
                setReviews([]); 
            }
        };

        fetchReviews();
    }, [bookId]);

    const handleReviewSubmit = async () => {
        try {
            if (!bookId) {
                console.error("Cannot submit review: bookId is missing.");
                return;
            }
            if (!reviewComment || rating === 0) {
                console.warn("Review comment or rating is missing.");
                return;
            }

            const response = await addBookReviews(reviewComment, rating, bookId) as { result: Review };

            setReviews((prev) => [response.result, ...prev]); // Add new review to the top
            setReviewComment(""); // Clear input
            setRating(0); // Reset rating
        } catch (error) {
            console.error("Error adding review:", error); // Log any errors
        }
    };

    return (
        <>
            <div className="w-[100%] !mt-[35px] p-4 rounded-lg">
                <h2 className="text-lg font-semibold">Customer Feedback</h2>
                <div className="!mt-4 !ml-3 flex flex-col gap-1">
                    <p className="text-gray-700 font-medium">Write Your Review</p>
                    <div className="bg-[#F5F5F5] !p-[10px]">
                        <div className="!mt-3 !ml-3 flex flex-col gap-2">
                            <p className="text-gray-700 font-medium">Overall Rating</p>
                            <div className="flex gap-2 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-5 h-5 cursor-pointer transition ${
                                            (hover || rating) >= star
                                                ? "fill-yellow-500 stroke-yellow-500"
                                                : "stroke-gray-400"
                                        }`}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <textarea
                            className="w-full !mt-1 !mb-5 !p-4 outline-none h-[80%]"
                            rows={4}
                            placeholder="Write Your Review..."
                            value={reviewComment}
                            onChange={(e) => setReviewComment(e.target.value)}
                        />
                        <div className="flex justify-end !pr-2 h-[20%]">
                            <button
                                onClick={handleReviewSubmit}
                                className="bg-[#3371B5] cursor-pointer text-white w-[75px] h-[24%] rounded-[1px] hover:bg-[#2A5C94] transition"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 !mt-[50px]">
                <h2 className="text-lg font-semibold">User Reviews</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-600">No reviews yet.</p>
                ) : (
                    reviews.map((user, index) => (
                        <div key={index} className="p-4 flex gap-4 flex-wrap !mb-[10px]">
                            <div className="flex items-center w-[100%] h-[50px] shrink-0 gap-[10px]">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-lg">
                                    {getInitials(user.user_id.fullName)}
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium text-gray-800">{user.user_id.fullName}</p>
                                    <div className="flex gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${
                                                    user.rating >= star
                                                        ? "fill-yellow-500 stroke-yellow-500"
                                                        : "stroke-gray-400"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-0 !ml-[60px]">
                                <p className="mt-2 text-gray-700 break-words">{user.comment}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default BookReview;