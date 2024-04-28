import { useEffect, useState } from "react";
import AllArtAndCraftTable from "../../components/AllArtAndCraftTable/AllArtAndCraftTable";

const AllArtAndCraft = () => {
    const [artAndCraftItems, setArtAndCraftItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setArtAndCraftItems(data))
    }, [])
    return (
        <div>
            <AllArtAndCraftTable artAndCraftItems={artAndCraftItems}></AllArtAndCraftTable>
        </div>
    );
};

export default AllArtAndCraft;