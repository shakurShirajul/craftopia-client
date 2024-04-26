import LoginForm from '../../components/LoginForm/LoginForm';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=''>
            {/* <div className='w-2/5 mx-auto'> */}
            <div className='grid grid-cols-1'>
                <div className=''>
                    {/* <div className='md:px-16 md:py-11'>
                        <img src="https://i.ibb.co/XzL4MNT/undraw-Art-lover-re-fn8g.png" alt="" />
                    </div> */}
                </div>
                <div className='w-[40%] mx-auto'>
                    <div className='px-16 py-11'>
                        <div className='text-right mb-20'>
                            <p className='font-normal font-poppins'>Not A member? <Link className='text-[#6ca5f1]'>Register Now</Link></p>
                        </div>
                        <div className='text-left font-rancho space-y-2 mb-10'>
                            <h1 className='text-5xl'>Hello Again!</h1>
                            <p className='text-4xl'>Welcome back you've been missed</p>
                        </div>
                        <LoginForm></LoginForm>
                        <div className='flex justify-center items-center'>
                            <hr className='border-[#BFBFBF;]  flex-1' />
                            <span className='mx-9 font-normal'>OR</span>
                            <hr className='border-[#BFBFBF;]  flex-1' />
                        </div>
                        <div className="flex justify-center gap-5 py-5 cursor-pointer">
                            <button
                            // onClick={() => handleSocialSignIn(googleSignIn)} className=""
                            >
                                <div>
                                    <FcGoogle className="w-[32px] h-[32px]" />
                                </div>
                            </button>
                            <div
                            // onClick={() => handleSocialSignIn(githubSignIn)} className=""
                            >
                                <div>
                                    <FaGithub className="w-[32px] h-[32px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;