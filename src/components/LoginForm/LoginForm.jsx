import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const LoginForm = ({ navigateToHomePage }) => {

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, successToast, errorToast } = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                successToast("Login Successful");
                navigateToHomePage();
            })
            .catch((error) => {
                errorToast('You have entered an invalid username or password');
                console.log(error.code, error.message);
            })

    }

    return (
        <div className="font-poppins">
            <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-6'>
                <div className='grid grid-cols-1 gap-5'>
                    <label className='bg-[#ECECEC] p-4 rounded-lg'>
                        <div className="flex items-center  gap-7">
                            <MdEmail className="text-2xl" />
                            <div className=''>
                                {/* <p className="text-xs">Email:</p> */}
                                <div className=''>
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        name="email"
                                        className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </label>
                    <label className='flex items-center bg-[#ECECEC] p-4 rounded-lg'>
                        <div className="flex items-center  gap-7">
                            <FaKey className="text-2xl" />
                            <div>
                                {/* <p className="text-xs">Password:</p> */}
                                <input
                                    placeholder='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    name="password"
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash/> : <FaEye/>}
                            </button>
                        </div>
                    </label>
                </div>
                <input
                    type="submit"
                    value="Sign In"
                    className='py-4 rounded-2xl text-white bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE]'
                />
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;