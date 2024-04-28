import CraftItem from "../CraftItem/CraftItem";
import { useEffect, useState } from "react";

const CraftItems = () => {
    const [craftItems, setCraftItems] = useState([]);
    useEffect(() => {
        fetch('https://craftopia-server-ruddy.vercel.app/items')
            .then(res => res.json())
            .then(data => setCraftItems(data))
    }, [])
    console.log(craftItems);
    return (
        <div className="my-10 ">
            {/* <div className="text-5xl text-[#030712CC] text-center font-bold mb-10">Listed Properties</div> */}
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
    );
};

export default CraftItems;