import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/404PageNotFound.jpg'

const PageNotFound = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='w-[50%] border-2 mx-auto'>
                <img src={notFoundImage} alt="" className='' />
            </div>
            <Link to='/'>
                <button className='btn btn-primary'>Go Back</button>
            </Link>
        </div>
    );
};

export default PageNotFound;