import CraftItem from "../CraftItem/CraftItem";
import { useEffect, useState } from "react";

const CraftItems = () => {
    const [craftItems, setCraftItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedData = fetch('https://craftopia-server-ruddy.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setCraftItems(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className="my-10 ">
            {
                loading ?
                    (
                        <div className="text-center">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    (
                        <div>
                            <div>
                                <h1 className="text-5xl font-bold font-rancho text-center my-8">Art & Craft Section</h1>
                            </div>
                            <div className="flex">
                                <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {
                                        craftItems.map(craftItem =>
                                            <CraftItem key={craftItem._id} craftItem={craftItem}></CraftItem>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default CraftItems;