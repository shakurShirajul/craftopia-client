import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const CategoryCardDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://craftopia-server-ruddy.vercel.app/subcategory/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                setLoading(false);
            })

    }, [])

    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        processing_time
    } = details;

    return (
        <div className='mx-5 md:mx-0 font-inter my-10'>
            <Helmet>
                <title>Details | Craftopia</title>
            </Helmet>
            {
                loading ? (
                    <div className="text-center my-10">
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                ) : (
                    <div>
                        <div className='md:w-3/5 md:mx-auto mb-10 shadow-lg rounded-xl'>
                            <div className='grid md:grid-cols-2 gap-5 p-5'>
                                <div>
                                    <img src={image} alt="" className='aspect-square rounded-xl' />
                                </div>
                                <div className='font-inter'>
                                    <p className='text-4xl mb-3 font-semibold'>{item_name}</p>
                                    <div className='flex items-center border-y-2 border-dashed mb-3 py-2 gap-2'>
                                        <p><span className='font-semibold'>Subcategory Name: </span>{subcategory_Name}</p>
                                        <span className='font-semibold'> | </span>
                                        <h1 className="flex items-center gap-2"><FaStar className="text-orange-500 text-lg" /> <span className="text-lg font-semibold">{rating}</span></h1>
                                    </div>
                                    <div className='flex justify-between items-center mb-3 flex-wrap'>
                                        <p><span className="font-semibold">Processing Time:</span> {processing_time}</p>
                                    </div>
                                    <div>
                                        <p className='text-xl  mb-4'><span className='font-semibold'>Description: </span> {short_description}</p>
                                        <h1 className="text-[#0B6EFE] text-4xl font-medium text-right"><span>${price}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CategoryCardDetails;