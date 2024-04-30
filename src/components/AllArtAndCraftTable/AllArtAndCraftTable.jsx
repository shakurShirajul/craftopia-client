import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllArtAndCraftTable = ({ artAndCraftItems }) => {
    console.log(artAndCraftItems)
    return (
        <div className="container mx-auto my-10 shadow-lg rounded-lg border none ">
            <div className="overflow-x-auto">
                <table className="table font-inter">
                    <thead className="text-lg border-b">
                        <tr className="border-none">
                            <th></th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            artAndCraftItems.map((item, index) =>
                                <tr className="border-none text-base font-medium">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1>{item.item_name}</h1>
                                    </td>
                                    <td>{item.subcategory_name}</td>
                                    <th>
                                        $ {item.price}
                                    </th>
                                    <th>
                                        <div className="flex items-center gap-1"> <FaStar className="text-orange-500 text-lg" />
                                            {item.rating}</div>
                                    </th>
                                    <th>
                                        <Link to={`/item/${item._id}`}> <button className="cursor-pointer rounded-xl py-3 text-white bg-[#0B6EFE] px-4 font-medium text-lg">Details</button></Link>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraftTable;