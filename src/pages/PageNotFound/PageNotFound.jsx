import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/404PageNotFound.jpg'

const PageNotFound = () => {
    return (
        <div className='w-screen h-screen font-roboto'>
            <div className='m-auto w-full h-full flex items-center justify-center'>
                <div className='space-y-10'>
                    <h1 className='font-rancho text-9xl'>404 Page Not Found</h1>
                    <div className='flex items-center justify-center'>
                        <Link to="/">
                            <button
                                className='py-4 text-2xl font-bold rounded-2xl bg-[#0B6EFE] hover:border hover:border-[#0B6EFE] hover:bg-white hover:text-[#0B6EFE] px-5'
                            >
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PageNotFound;