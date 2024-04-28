import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const activeButton = "border-b-2 border-[#0B6EFE]  text-[#0B6EFE] font-semibold";

    const navigationLink =
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive && activeButton}>Home</NavLink></li>
            <li><NavLink to="/allartcrafts" className={({ isActive }) => isActive && activeButton}>All Art & craft Items</NavLink></li>
            <li><NavLink to="/addItem" className={({ isActive }) => isActive && activeButton}>Add Craft Item</NavLink></li>
            <li><NavLink to="/mylist" className={({ isActive }) => isActive && activeButton}>My Art&Craft List</NavLink></li>
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 font-medium">
                                {
                                    navigationLink
                                }
                            </ul>
                        </div>
                        <Link className="btn btn-ghost text-4xl font-rancho" to="/">Craftopia</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg">
                            {
                                navigationLink
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div>

                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white border">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><a>Logout</a></li>
                                        </ul>
                                    </div>
                                    <button onClick={logOut} className="bg-[#0B6EFE] p-2 text-sm md:p-3 md:text-base text-white font-medium rounded-lg">Sign Out</button>
                                </div>
                                :
                                <div className="flex items-center gap-1 md:gap-2">
                                    <Link to="/signin" className="border-[#0B6EFE] p-2 border-2 text-base md:p-3 text-[#0B6EFE] font-medium rounded-lg"><button >Sign In</button></Link>
                                    <Link to="/signup" className="bg-[#0B6EFE] p-2 text-base md:p-3 text-white font-medium rounded-lg"><button >Sign Up</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;