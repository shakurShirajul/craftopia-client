import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            {
                loading ?
                    (
                        <div className="text-center my-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    (
                        <div className='md:w-3/5 md:mx-auto my-10 bg-white'>
                            <div className='grid grid-cols-2 gap-5 p-5'>
                                <div>
                                    <img src={craftItem.image} alt="" className='aspect-square' />
                                </div>
                                <div className='font-inter'>
                                    <p className='text-4xl'>{craftItem.item_name}</p>
                                    <div className='flex items-center gap-2'>
                                        <p>{craftItem.subcategory_name}</p>
                                        <span> | </span>
                                        <p>{craftItem.rating}</p>
                                    </div>

                                    <p className='text-lg'>{craftItem.short_description}</p>
                                    <p>$ {craftItem.price}</p>

                                    <p>Customization: {craftItem.customization}</p>
                                    <p>Procising Time: {craftItem.processing_time}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default ItemDetails;