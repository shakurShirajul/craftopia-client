import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import Swal from 'sweetalert2'
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
const MyArtAndCraft = () => {

    const [craftItems, setCraftItems] = useState([]);
    const [backupItem, setBackupItem] = useState([]);

    const [loading, setLoading] = useState(true);

    const { user, successToast } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://craftopia-server-ruddy.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => (item.email === user.email))
                setCraftItems(filterData);
                setBackupItem(filterData);
                setLoading(false);
            })
    }, [])

    const handleOption = (value) => {
        const filterItem = backupItem.filter(item => item.customization === value)
        setCraftItems(filterItem);
    }

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
            <Helmet>
                <title>My Craft | Craftopia</title>
            </Helmet>
            {
                loading ?
                    (
                        <div className="text-center my-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </div>
                    )
                    :
                    (
                        <div>
                            <div className="flex justify-center mt-10 font-roboto">
                                <select name="selectCustomization" className="select select-primary w-full max-w-xs focus:outline-none">
                                    <option disabled selected className="text-base font-medium">Select Customization</option>
                                    <option className="text-base font-medium" onClick={() => handleOption('Yes')}>Yes</option>
                                    <option className="text-base font-medium" onClick={() => handleOption('No')}>No</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {
                                        craftItems.map(craftItem =>
                                            <MyItemCard craftItem={craftItem} handleDeleteButton={handleDeleteButton}></MyItemCard>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    )
            }
            <ToastContainer />
        </div>
    );
};

export default MyArtAndCraft;