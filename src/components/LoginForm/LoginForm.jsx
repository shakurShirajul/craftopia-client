import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
const LoginForm = () => {
    return (
        <div className="font-poppins">
            <form className='grid grid-cols-1 gap-6'>
                <div className='grid grid-cols-1 gap-5'>
                    <label className='bg-[#ECECEC] p-4 rounded-lg'>
                        <div className="flex items-center  gap-7">
                            <MdEmail className="text-2xl" />
                            <div className=''>
                                <p className="text-xs">Email:</p>
                                <div className=''>
                                    <input type='email' placeholder='example@gmail.com' required
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </label>
                    <label className='bg-[#ECECEC] p-4 rounded-lg'>
                        <div className="flex items-center  gap-7">
                            <FaKey className="text-2xl" />
                            <div className=''>
                                <p className="text-xs">Password:</p>
                                <div className=''>
                                    <input type='email' placeholder='***********' required
                                    className='bg-[#ECECEC] text-base focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <input type="submit" value="Sign In" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default LoginForm;