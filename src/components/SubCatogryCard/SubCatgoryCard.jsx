import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SubCatgoryCard = ({ data }) => {

    const navigate = useNavigate();

    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        processing_time
    } = data;

    const handleNavigateDetailsPage = () =>{
        console.log("shakur")
        navigate(`/subcategory/card/details/${_id}`)
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
                        <h1 className="font-medium">Sub Category: <span className="font-normal">{subcategory_Name}</span></h1>
                        <h1 className="flex items-center gap-2"><FaStar className="text-orange-500 text-lg" /> <span className="text-lg">{rating}</span></h1>
                    </div>
                    <div className="p-2">
                        <h1><span className="font-medium">Description:</span> {short_description}</h1>
                    </div>
                    <div className="flex justify-between py-2 border-y-2 border-dashed">
                        <h1><span className="font-medium">Time: </span>{processing_time}</h1>
                        <h1 className="text-[#0B6EFE] text-xl font-medium"><span>$ {price}</span></h1>
                    </div>
                    <div className="pt-2">
                        <button
                            className="py-3 rounded-lg text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] font-medium px-5 w-full"
                            // onClick={() => handleDeleteButton(craftItem)}
                            onClick={()=>handleNavigateDetailsPage()}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCatgoryCard;