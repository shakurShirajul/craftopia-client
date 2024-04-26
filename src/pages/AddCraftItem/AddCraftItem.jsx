const AddCraftItem = () => {
    return (
        <div className="w-2/4 mx-auto bg-white p-8 rounded-3xl shadow-lg">
            <div>
                <div>
                    <h1 className="text-6xl font-rancho py-5">Add Craft Items</h1>
                </div>
                <form className="grid grid-cols-1 space-y-2 font-roboto">
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Image:</p>
                        <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                    </label>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Item Name:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Subcategory Name:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Short Description:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Price:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                    </div>
                    <label className="space-y-1">
                        <p className="text-lg font-medium">Rating:</p>
                        <div className="flex justify-center py-4">
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"/>
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </label>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Customization:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Processing Time:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">Stock Status:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">User Email:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                        <label className="space-y-1">
                            <p className="text-lg font-medium">User Name:</p>
                            <input type="text" placeholder="Item Name" className="pl-4 py-3 bg-[#F3F3F3] w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <label >
                            <input type="submit" value="Add Item" className="rounded-xl py-3 text-white bg-[#288FB4] px-4 font-medium text-lg" />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;