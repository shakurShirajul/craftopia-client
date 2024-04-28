import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import Swal from 'sweetalert2'
import { ToastContainer } from "react-toastify";
const MyArtAndCraft = () => {

    const [craftItems, setCraftItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user, successToast } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://craftopia-server-ruddy.vercel.app/items')
            .then(res => res.json())
            .then(data => setCraftItems(data))
        setLoading(false)
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
                fetch(`https://craftopia-server-ruddy.vercel.app/item/${craftItem._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Here", data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Item has been deleted.',
                                'success'
                            )
                            successToast('Delation Successful')
                            const remainingData = craftItems.filter(item => item._id !== craftItem._id);
                            setCraftItems(remainingData);
                        }
                    })
            }
        })
    }

    return (
        <div>
            {
                loading ?
                    (
                        <div className="text-center my-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    (
                        <div className="flex">
                            <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    myCraftItems.map(craftItem =>
                                        <MyItemCard craftItem={craftItem} handleDeleteButton={handleDeleteButton}></MyItemCard>
                                    )
                                }
                            </div>
                        </div>
                    )
            }
            <ToastContainer/>
        </div>
    );
};

export default MyArtAndCraft;