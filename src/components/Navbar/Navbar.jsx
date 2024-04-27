import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Navbar = () => {

    const { user } = useContext(AuthContext);

    const activeButton = "border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-semibold";

    const NavLink =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">All Art & craft Items</Link></li>
            <li><Link to="/addItem">Add Craft Item</Link></li>
            <li><Link to="/">My Art&Craft List</Link></li>
        </>
    return (
        <div className="bg-white shadow-lg">
            <div className="container mx-auto font-roboto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                                {
                                    NavLink
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-4xl font-rancho">Craftopia</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg">
                            {
                                NavLink
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom">
                                            <div className="w-12 rounded-full ">
                                                <img alt="Tailwind CSS Navbar component" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button className="bg-[#4f9f3e] p-2 text-sm md:p-3 md:text-base text-white font-medium rounded-lg">Sign Out</button>
                                    </div>
                                </div>
                                :
                                <div className="flex items-center gap-1 md:gap-5">
                                    <Link to="/signin"><button >Sign In</button></Link>
                                    <Link to="/signup"><button >Sign Up</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;