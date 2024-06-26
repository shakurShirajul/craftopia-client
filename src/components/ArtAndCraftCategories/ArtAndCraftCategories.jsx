import { useEffect, useState } from "react";
import ArtAndCraftCategoriesCard from "../ArtAndCraftCategoriesCard/ArtAndCraftCategoriesCard";

const ArtAndCraftCategories = () => {
    const [subcatgoryItems, setSubcategoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://craftopia-server-ruddy.vercel.app/subcategory/items')
            .then(res => res.json())
            .then(data => setSubcategoryItems(data))
        setLoading(false)
    }, [])

    const displayItems = subcatgoryItems.slice(0, 6);

    return (
        <div className="my-16">
            <div>
                <h1 className="text-5xl font-bold font-rancho text-center my-8">Art & Craft Categories Section</h1>
            </div>
            {
                loading ?
                    (
                        <div className="text-center my-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    (
                        <div className="flex justify-center">
                            <div className="grid mx-5 gap-5 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    displayItems.map(item =>
                                        <ArtAndCraftCategoriesCard item={item} />
                                    )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default ArtAndCraftCategories;