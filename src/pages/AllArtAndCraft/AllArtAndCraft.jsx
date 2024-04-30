import { useEffect, useState } from "react";
import AllArtAndCraftTable from "../../components/AllArtAndCraftTable/AllArtAndCraftTable";
import { Helmet } from "react-helmet-async";

const AllArtAndCraft = () => {
    const [artAndCraftItems, setArtAndCraftItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://craftopia-server-ruddy.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setArtAndCraftItems(data);
                setLoading(false);
            })

    }, [])
    return (
        <div>
            <Helmet>
                <title>All Art Craft | Craftopia</title>
            </Helmet>
            {
                loading ?
                    (
                        <div className="text-center">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    <AllArtAndCraftTable artAndCraftItems={artAndCraftItems}></AllArtAndCraftTable>
            }

        </div>
    );
};

export default AllArtAndCraft;