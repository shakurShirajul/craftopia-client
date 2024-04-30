import LoginForm from '../../components/LoginForm/LoginForm';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { githubSignIn, googleSignIn, successToast, errorToast } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToHomePage = () => {
        setTimeout(() => {
            navigate(location?.state ? location.state : "/");
        }, 2000);
    }

    const handleSocialSignIn = (socialMedia) => {
        socialMedia()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser.photoURL);
                successToast('LOGIN SUCCESSFUL')
                navigateToHomePage();
            })
            .catch((error) => {
                errorToast(error.message)
                console.log('Error', error.message);
            })
    }

    return (
        <div className='container mx-auto my-10'>
            <Helmet>
                <title>Login | Craftopia</title>
            </Helmet>
            <div className='font-inter container mx-auto md:my-10'>
                <div className='md:w-[70%] rounded-3xl mx-auto bg-cover shadow-xl' style={{ backgroundImage: 'url(https://i.ibb.co/ws6T5QW/prince-abid-p-Ev-Pk-Pmu-Hzo-unsplash.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden md:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium font-rancho ">
                                <h1 className="text-4xl md:text-8xl">
                                    Welcome back to the heart of creativity.
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl shadow-xl">
                                <div className='text-right mb-10'>
                                    <p className='font-normal font-poppins'>Not A member? <Link to='/signup' className='text-[#0B6EFE]'>Register Now</Link></p>
                                </div>
                                <div className='text-left font-rancho space-y-2 mb-10'>
                                    <h1 className='text-5xl'>Hello Again!</h1>
                                    <p className='text-4xl text-[#0B6EFE]'>Welcome back you've been missed</p>
                                </div>
                                <div className=''>
                                    <LoginForm navigateToHomePage={navigateToHomePage}></LoginForm>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center gap-9 my-5">
                                        <hr className="flex-1" />
                                        <p>OR</p>
                                        <hr className="flex-1" />
                                    </div>
                                    <div className="flex justify-center gap-5 cursor-pointer">
                                        <button
                                            onClick={() => handleSocialSignIn(googleSignIn)} className="">
                                            <div>
                                                <FcGoogle className="w-[32px] h-[32px]" />
                                            </div>
                                        </button>
                                        <div
                                            onClick={() => handleSocialSignIn(githubSignIn)} className="">
                                            <div>
                                                <FaGithub className="w-[32px] h-[32px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
};

export default Login;