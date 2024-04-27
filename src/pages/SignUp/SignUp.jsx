import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import { Helmet } from "react-helmet-async";

const SignUp = () => {
    return (
        <div>
            <div className="font-inter container mx-auto md:my-10">
                <div className='md:w-[70%] rounded-3xl mx-auto bg-cover shadow-xl' style={{ backgroundImage: 'url(https://i.ibb.co/JjQsrnT/artpencil.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden md:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium font-rancho ">
                                <h1 className="text-4xl md:text-8xl">
                                    Unleash your creativity!
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl shadow-xl">
                                <div className="mb-9">
                                    <h1 className="font-rancho text-5xl font-medium">Join Our <span className="text-[#0B6EFE]">Community</span></h1>
                                </div>
                                <SignUpForm></SignUpForm>
                                <div>
                                    <p className="text-sm mt-2 text-center">Have an account? <Link to="/signin" className="text-[#0B6EFE]">Log In</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;