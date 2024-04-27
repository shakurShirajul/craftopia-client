import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AddCraftItem = () => {

    const { user } = useContext(AuthContext);

    const submitForm = (event) => {

        event.preventDefault();
        const imageURL = event.target.photoURL.value;
        const itemName = event.target.itemName.value;
        const subcategory = event.target.elements.subcategory.value;
        const customization = event.target.elements.customization.value;
        const stock = event.target.elements.stock.value;
        const price = event.target.price.value;
        const processingTime = event.target.processingTime.value;
        const description = event.target.description.value;
        const itemRating = event.target.itemRating.value;

        console.log(
            imageURL,
            itemName,
            subcategory,
            customization,
            stock,
            price,
            itemRating,
            processingTime,
            description,
        )

        

    }

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
                        <input type="text" placeholder="example.com/image.jpg" name="photoURL" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                    </label>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Item Name:</p>
                            <input type="text" placeholder="Item Name" name="itemName" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Subcategory Name:</p>
                            <select name="subcategory" className="select select-bordered w-full border-none bg-[#F3F3F3] focus:outline-none">
                                <option disabled selected>Select Subcategory</option>
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
                            <select name="customization" className="select select-bordered w-full border-none  bg-[#F3F3F3] focus:outline-none">
                                <option disabled selected>Select Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Stock Status:</p>
                            <select name="stock" className="select select-bordered w-full border-none  bg-[#F3F3F3] focus:outline-none">
                                <option disabled selected>Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-x-5">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Price:</p>
                            <input type="text" placeholder="Price" name="price" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Rating:</p>
                            <input type="text" placeholder="Rating" name="itemRating" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Processing Time:</p>
                            <input name="processingTime" type="text" placeholder="Processing Time" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                    </div>
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Short Description:</p>
                        <textarea type="text" placeholder="Short Description" name="description" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg break-words" />
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