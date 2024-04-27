// import { useForm } from 'react-hook-form';
import { MdEmail, MdDriveFileRenameOutline, MdAddPhotoAlternate } from "react-icons/md";
import { FaKey } from "react-icons/fa";
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProviders';
// import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { ToastContainer } from 'react-toastify';

const SignUpForm = () => {

    // const [showPassword, setShowPassword] = useState(false);
    // const { signUp, updateUser, errorToast, successToast } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm();

    // const navigateToHomePage = () => {
    //     setTimeout(() => {
    //         navigate("/");
    //         location.reload();
    //     }, 2000)
    // }

    // const onSubmit = (data) => {
    //     const upperCase = /[A-Z]/;
    //     const lowerCase = /[a-z]/;


    //     const { name, email, url, password } = data;

    //     const hasUpperCase = upperCase.test(password);
    //     const hasLowerCase = lowerCase.test(password);
    //     const isLengthValid = password.length >= 6;


    //     if (!hasUpperCase) {
    //         errorToast('Password must contain at least one uppercase letter.');
    //     }
    //     if (!hasLowerCase) {
    //         errorToast('Password must contain at least one lowercase letter.');
    //     }
    //     if (!isLengthValid) {
    //         errorToast('Password must be at least 6 characters long.');
    //     }

    //     if (hasLowerCase && hasUpperCase && isLengthValid) {
    //         signUp(email, password)
    //             .then((userCredential) => {
    //                 updateUser(name, url)
    //                     .then(() => {
    //                         successToast('Registration Successful')
    //                         reset();
    //                         navigateToHomePage();
    //                     }).catch((error) => {
    //                         errorToast(error.message)
    //                     })
    //             })
    //             .catch((error) => {
    //                 const errorMessage = error.message;
    //                 errorToast(error.message)
    //             })
    //     }
    // }

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4'> */}
            <form className='grid grid-cols-1 gap-4'>
                <label className='bg-[#ECECEC] py-4 pl-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <MdDriveFileRenameOutline className="text-2xl" />
                        <div>
                            <p className="text-xs">Name: </p>
                            <div>
                                <input type='text' placeholder='example name' required
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>
                </label>
                <label className='bg-[#ECECEC] py-4 pl-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <MdEmail className="text-2xl" />
                        <div>
                            <p className="text-xs">Email:</p>
                            <div>
                                <input type='email' placeholder='example@gmail.com' required
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>
                </label>
                <label className='bg-[#ECECEC] py-4 pl-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <MdAddPhotoAlternate className="text-2xl" />
                        <div>
                            <p className="text-xs">Photo Url:</p>
                            <div>
                                <input type='url' placeholder='example.com/image.jpg' required
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>
                </label>
                <label className='flex items-center bg-[#ECECEC] p-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <FaKey className="text-2xl" />
                        <div>
                            <p className="text-xs">Password:</p>
                            <input
                                placeholder='***********'
                                // type={showPassword ? 'text' : 'password'}
                                required
                                className="bg-[#ECECEC] text-base focus:outline-none w-full"
                            />
                        </div>
                    </div>
                    <div>
                        {/* <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button> */}
                    </div>
                </label>
                <label>
                    <input type="submit" value='Login' className="py-4 rounded-2xl text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] w-full" />
                </label>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default SignUpForm;