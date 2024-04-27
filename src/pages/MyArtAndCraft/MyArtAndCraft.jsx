import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import Swal from 'sweetalert2'
const MyArtAndCraft = () => {

    const [craftItems, setCraftItems] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setCraftItems(data))
    }, [])

    const myCraftItems = craftItems.filter(item => item.email === user.email);

    const handleDeleteButton = (craftItem) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/item/${craftItem._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Item has been deleted.',
                            'success'
                        )
                        const remainingData = craftItems.filter(item => item._id !== craftItem._id);
                        setCraftItems(remainingData);
                    }
                })
            }
        })
    }

    return (
        <div>
            <div className="flex">
                <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        myCraftItems.map(craftItem =>
                            <MyItemCard craftItem={craftItem} handleDeleteButton={handleDeleteButton}></MyItemCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyArtAndCraft;