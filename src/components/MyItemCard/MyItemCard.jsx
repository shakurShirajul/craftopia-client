import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
const MyItemCard = ({ craftItem, handleDeleteButton }) => {

    const {
        _id,
        customization,
        image,
        item_name,
        price,
        rating,
        stock
    } = craftItem;

    const navigate = useNavigate();

    const handleUpdateButton = () => {
        navigate(`/updateitem/${_id}`)
    }

    return (
        <div>
            <div className="card w-96 rounded-2xl  shadow-xl font-roboto my-10">
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
                        <h1><span className="font-semibold">Customization: </span> {customization}</h1>
                        <h1 className="">{stock}</h1>
                    </div>
                    <div className="flex gap-5 mt-2">
                        <button
                            className="py-3 rounded-lg text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] font-medium px-5 w-full"
                            onClick={() => handleUpdateButton()}
                        >
                            Update
                        </button>
                        <button
                            className="py-3 rounded-lg text-white bg-[#d33] hover:border hover:border-[#d33] hover:bg-white hover:text-[#d33] font-medium px-5 w-full"
                            onClick={() => handleDeleteButton(craftItem)}
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