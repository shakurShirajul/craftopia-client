import { FaStar } from "react-icons/fa";

const Review = ({review}) => {
    return (
        <div className="mx-5 md:mx-0 font-roboto shadow-lg p-5 space-y-5 rounded-lg"> 
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={review.image} />
                        </div>
                    </div>
                    <h1 className="text-xl">{review.name}</h1>
                </div>
                <div className="flex items-center">
                    <FaStar className="text-orange-500 text-lg" />
                    <span>{review.rating}</span>
                </div>
            </div>
            <div>
                <h1>{review.review}</h1>
            </div>
            <div>
                <p className="text-gray-400">{review.review_date}</p>
            </div>
        </div>
    );
};

export default Review;