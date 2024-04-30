import { MdEmail, MdDriveFileRenameOutline, MdAddPhotoAlternate } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer } from 'react-toastify';

const SignUpForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signUp, updateUser, errorToast, successToast } = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateToHomePage = () => {
        setTimeout(() => {
            navigate("/");
            location.reload();
        }, 2000)
    }

    const handleSubmit = (data) => {
        data.preventDefault();
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;

        const name = data.target.name.value;
        const email = data.target.email.value;
        const url = data.target.url.value;
        const password = data.target.password.value;

        
        const hasUpperCase = upperCase.test(password);
        const hasLowerCase = lowerCase.test(password);
        const isLengthValid = password.length >= 6;
        
        
        if (!hasUpperCase) {
            errorToast('Password must contain at least one uppercase letter.');
        }
        if (!hasLowerCase) {
            errorToast('Password must contain at least one lowercase letter.');
        }
        if (!isLengthValid) {
            errorToast('Password must be at least 6 characters long.');
        }
        
        if (hasLowerCase && hasUpperCase && isLengthValid) {
            console.log(name, email, url, password);
            signUp(email, password)
                .then((userCredential) => {
                    updateUser(name, url)
                        .then(() => {
                            successToast('Registration Successful')
                            // console.log("Shakur");
                            console.log(url);
                            data.target.reset();
                            navigateToHomePage();
                        }).catch((error) => {
                            errorToast(error.message)
                        })
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    errorToast(error.message)
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <label className='bg-[#ECECEC] py-4 pl-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <MdDriveFileRenameOutline className="text-2xl" />
                        <div>
                            {/* <p className="text-xs">Name: </p> */}
                            <div>
                                <input type='text' placeholder='Your Name' required name="name"
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
                            {/* <p className="text-xs">Email:</p> */}
                            <div>
                                <input type='email' placeholder='Your Email' required name="email"
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
                            {/* <p className="text-xs">Photo Url:</p> */}
                            <div>
                                <input type='url' placeholder='Photo URL' required name="url"
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>
                </label>
                <label className='flex items-center justify-between bg-[#ECECEC] p-4 rounded-lg'>
                    <div className="flex items-center gap-7">
                        <FaKey className="text-2xl" />
                        <div>
                            {/* <p className="text-xs">Password:</p> */}
                            <input
                                placeholder='Password'
                                type={showPassword ? 'text' : 'password'}
                                required
                                name="password"
                                className="bg-[#ECECEC] text-base focus:outline-none w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </label>
                <label>
                    <input type="submit" value='Login' className="py-4 rounded-2xl text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] w-full" />
                </label>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUpForm;