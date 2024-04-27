import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { AuthContext } from "../../providers/AuthProviders";
const MyItemCard = ({ craftItem, handleDeleteButton }) => {

    const {
        _id,
        customization,
        email,
        image,
        item_name,
        price,
        processing_time,
        rating,
        short_description,
        subcategory_name,
        userName,
        stock
    } = craftItem;

    return (
        <div>
            <div className="card w-96 rounded-2xl bg-white shadow-xl font-roboto my-10">
                <figure className="px-5 pt-5">
                    <img src={image} className="rounded-2xl aspect-square" />
                </figure>
                <div className="p-5">
                    <h2 className="card-title">{item_name}</h2>
                    <div className="flex justify-between items-center my-2">
                        <h1 className="flex items-center gap-2"><FaStar className="text-orange-500 text-lg" /> <span className="text-lg">{rating}</span></h1>
                        <h1 className="text-[#0B6EFE] text-xl font-medium"><span>$ {price}</span></h1>
                    </div>
                    <div className="flex justify-between py-2 border-y-2 border-dashed">
                        <h1>Customizable: {customization}</h1>
                        <h1 className="">{stock}</h1>
                    </div>
                    <div className="flex gap-5 mt-2">
                        <button
                            className="py-3 rounded-lg text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] font-medium px-5 w-full"
                        >
                            Update
                        </button>

                        <button
                            className="py-3 rounded-lg text-white bg-[#d33] hover:border hover:border-[#d33] hover:bg-white hover:text-[#d33] font-medium px-5 w-full"
                            onClick={()=>handleDeleteButton(craftItem)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemCard;