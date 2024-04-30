import { useNavigate } from "react-router-dom";

const ArtAndCraftCategoriesCard = ({ item }) => {

    const navigate = useNavigate();
    
    const handleSubmit = () =>{
        navigate(`/subcategory/itemcard/${item.subcategory_Name}`)
    }

    return (
        <div onClick={handleSubmit}>
            <div className="card w-96 rounded-2xl shadow-xl font-roboto">
                <figure className="px-5 pt-5">
                    <img src={item.image} className="rounded-2xl aspect-square" />
                </figure>
                <div className="p-5">
                    <h2 className="card-title">{item.item_name}</h2>
                    <div>
                        <p className="text-xl text-wrap"><span className="font-medium">Category: </span>{item.subcategory_Name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftCategoriesCard;