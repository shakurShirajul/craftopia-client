import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AddCraftItem = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitForm = (event) => {

        event.preventDefault();
        const image = event.target.photoURL.value;
        const item_name = event.target.itemName.value;
        const subcategory_name = event.target.elements.subcategory.value;
        const customization = event.target.elements.customization.value;
        const stock = event.target.elements.stock.value;
        const price = event.target.price.value;
        const processing_time = event.target.processingTime.value;
        const short_description = event.target.description.value;
        const rating = event.target.itemRating.value;
        const userName = user?.displayName;
        const email = user?.email;

        fetch('http://localhost:5000/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                email,
                image,
                item_name,
                subcategory_name,
                customization,
                stock,
                price,
                rating,
                processing_time,
                short_description
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        title: "Item Added Successfully",
                        text: "Add Another Item",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "YES",
                        cancelButtonText: "NO",

                    }).then((result) => {
                        if (result.isConfirmed) {
                            event.target.reset();
                            navigate('/addItem');
                        } else {
                            navigate('/');
                        }
                    });
                }
            })
    }

    console.log(user);

    return (
        <div className="w-2/4 mx-auto bg-white p-8 rounded-3xl shadow-lg my-10">
            <div>
                <div>
                    <h1 className="text-6xl font-rancho py-5">Add Craft Items</h1>
                </div>
                <form onSubmit={submitForm} className="grid grid-cols-1 space-y-2 font-roboto">
                    <div className="grid grid-cols-2 gap-x-5">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">User Name:</p>
                            <input type="text" placeholder="example name" name="name" disabled className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" value={user?.displayName} />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">User Email:</p>
                            <input type="email" placeholder="example@gmail.com" name="email" disabled className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" value={user?.email} />
                        </label>
                    </div>
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Image:</p>
                        <input type="text" placeholder="example.com/image.jpg" name="photoURL" required className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                    </label>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Item Name:</p>
                            <input type="text" placeholder="Item Name" name="itemName" required className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Subcategory Name:</p>
                            <select name="subcategory" className="select select-bordered w-full border-none bg-[#F3F3F3] focus:outline-none" required>
                                <option disabled>Select Subcategory</option>
                                <option>Clay Sculpture</option>
                                <option>Stone Sculpture</option>
                                <option>Metal Sculpture</option>
                                <option>Food carving</option>
                                <option>Natural Material Sculpture</option>
                                <option>Beaded Sculpture</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Customization:</p>
                            <select name="customization" className="select select-bordered w-full border-none  bg-[#F3F3F3] focus:outline-none" required>
                                <option disabled>Select Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Stock Status:</p>
                            <select name="stock" className="select select-bordered w-full border-none  bg-[#F3F3F3] focus:outline-none" required>
                                <option disabled>Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-x-5">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Price:</p>
                            <input type="text" placeholder="Price" name="price" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required/>
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Rating:</p>
                            <input type="text" placeholder="Rating" name="itemRating" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required/>
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Processing Time:</p>
                            <input name="processingTime" type="text" placeholder="Processing Time" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required/>
                        </label>
                    </div>
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Short Description:</p>
                        <textarea type="text" placeholder="Short Description" name="description" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg break-words" required/>
                    </label>
                    <div className="flex justify-end">
                        <label >
                            <input type="submit" value="Add Item" className="rounded-xl py-3 text-white bg-[#0B6EFE] px-4 font-medium text-lg" />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;