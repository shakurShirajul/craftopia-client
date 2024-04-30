import { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="my-16">
            <h1 className="text-center font-rancho text-6xl my-5">What People Are Saying</h1>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.map(review =>
                        <Review review={review}></Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;