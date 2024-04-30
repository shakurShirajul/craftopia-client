import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CraftItem = ({ craftItem }) => {
    const {
        _id,
        image,
        item_name,
        subcategory_name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stock,
    } = craftItem;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${_id}`);
    }

    return (
        <div>
            <div className="card w-96 rounded-2xl shadow-xl font-roboto">
                <figure className="px-5 pt-5">
                    <img src={image} className="rounded-2xl aspect-square" />
                </figure>
                <div className="p-5">
                    <h2 className="card-title">{item_name}</h2>
                    <div className="flex justify-between items-center my-2">
                        <h1 className="text-[#0B6EFE] text-xl font-medium">{stock}</h1>
                        <h1 className="flex items-center gap-2"><FaStar className="text-orange-500 text-lg" /> <span className="text-lg">{rating}</span></h1>
                    </div>
                    <p>{short_description}</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[#0B6EFE] text-xl font-medium"><span>$ {price}</span></h1>
                        <button
                            className="font-poppins py-3 rounded-lg text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] font-medium px-5"
                            onClick={handleClick}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItem;