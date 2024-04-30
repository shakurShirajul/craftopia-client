import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { Tooltip } from 'react-tooltip';


const Navbar = () => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const handleTheme = (event) => {
        if (event.target.checked) {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

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
        <div className="shadow-sm">
            <div className="container mx-auto font-roboto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white rounded-box w-52 font-medium">
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
                    <div className="navbar-end space-x-2">
                        <div>
                            <label className='cursor-pointer grid place-items-center'>
                                <input
                                    type='checkbox'
                                    checked={theme === 'dark'}
                                    className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                                    onChange={handleTheme}
                                />
                                <svg
                                    className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='14'
                                    height='14'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <circle cx='12' cy='12' r='5' />
                                    <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                                </svg>
                                <svg
                                    className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='14'
                                    height='14'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                                </svg>
                            </label>
                        </div>
                        {
                            user ?
                                (
                                    <div className="flex items-center">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user.displayName}>
                                            {console.log(user.photoURL)}
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                        <button
                                            onClick={logOut}
                                            className="bg-[#0B6EFE] p-2 text-sm md:p-3 md:text-base text-white font-medium rounded-lg">
                                            Logout
                                        </button>
                                    </div>
                                )
                                :
                                (
                                    <div className="flex items-center gap-1 md:gap-2">
                                        <Link to="/signin" className="border-[#0B6EFE] p-2 border-2 text-base md:p-3 text-[#0B6EFE] font-medium rounded-lg"><button >Login</button></Link>
                                        <Link to="/signup" className="bg-[#0B6EFE] p-2 text-base md:p-3 text-white font-medium rounded-lg"><button >Register</button></Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;