import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemCard from "../../components/MyItemCard/MyItemCard";

const MyArtAndCraft = () => {

    const [craftItems, setCraftItems] = useState([]);

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setCraftItems(data))
    }, [])

    const myCraftItems = craftItems.filter(item => item.email === user?.email);

    console.log(craftItems);

    return (
        <div>
            <div className="flex">
                <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        myCraftItems.map(myCraftItem =>
                            <MyItemCard key={myCraftItem} myCraftItem={myCraftItem}></MyItemCard>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default MyArtAndCraft;