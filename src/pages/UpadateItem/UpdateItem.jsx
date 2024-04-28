import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const UpdateItem = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

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

        console.log(subcategory_name, customization, stock)
        fetch(`http://localhost:5000/itemupdate/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/mylist');
                }
            })
    }
    return (
        <div className="w-2/4 mx-auto bg-white p-8 rounded-3xl shadow-lg my-10">
            <div>
                <div>
                    <h1 className="text-6xl font-rancho py-5">Update Craft Items</h1>
                </div>
                <form onSubmit={submitForm} className="grid grid-cols-1 space-y-2 font-roboto">
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
                                <option disabled selected value="">Select Subcategory</option>
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
                                <option disabled selected value="">Select Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Stock Status:</p>
                            <select name="stock" className="select select-bordered w-full border-none  bg-[#F3F3F3] focus:outline-none" required>
                                <option disabled selected value="">Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-x-5">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Price:</p>
                            <input type="text" placeholder="Price" name="price" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Rating:</p>
                            <input type="text" placeholder="Rating" name="itemRating" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Processing Time:</p>
                            <input name="processingTime" type="text" placeholder="Processing Time" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" required />
                        </label>
                    </div>
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Short Description:</p>
                        <textarea type="text" placeholder="Short Description" name="description" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg break-words" required />
                    </label>
                    <div className="flex justify-end">
                        <label >
                            <input type="submit" value="Update Item" className="rounded-xl py-3 text-white bg-[#0B6EFE] px-4 font-medium text-lg" />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;