import React, { useEffect, useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const ItemDetails = () => {
    const { id } = useParams();
    const [craftItem, setCraftItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://craftopia-server-ruddy.vercel.app/item/${id}`)
            .then(res => res.json())
            .then(data => setCraftItem(data))
        setLoading(false)
    }, [])

    // console.log(craftItem);

    return (
        <div className='font-inter'>
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
                                    <img src={craftItem.image} alt="" className='aspect-square rounded-xl' />
                                </div>
                                <div className='font-inter'>
                                    <p className='text-4xl mb-3 font-semibold'>{craftItem.item_name}</p>
                                    <div className='flex items-center border-y-2 border-dashed mb-3 py-2 gap-2'>
                                        <p><span className='font-semibold'>Subcategory Name: </span>{craftItem.subcategory_name}</p>
                                        <span className='font-semibold'> | </span>
                                        <h1 className="flex items-center gap-2"><FaStar className="text-orange-500 text-lg" /> <span className="text-lg font-semibold">{craftItem.rating}</span></h1>
                                    </div>
                                    <div className='flex justify-between items-center mb-3 flex-wrap'>
                                        <p>Customization: {craftItem.customization}</p>
                                        <p>Status: {craftItem.stock}</p>
                                        <p>Processing Time: {craftItem.processing_time}</p>
                                    </div>
                                    <div className='flex justify-between items-center border-y-2 border-dashed mb-3 py-2 gap-2 flex-wrap'>
                                        <p className='text-base flex gap-1 items-center'><MdEmail />{craftItem?.email}</p>
                                        <p className='text-base flex gap-1 items-center'><FaUser />{craftItem?.userName}</p>
                                    </div>
                                    <div>
                                        <p className='text-xl  mb-4'><span className='font-semibold'>Description: </span> {craftItem.short_description}</p>
                                        <h1 className="text-[#0B6EFE] text-4xl font-medium text-right"><span>${craftItem.price}</span></h1>
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

export default ItemDetails;