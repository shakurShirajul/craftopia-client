import { Typewriter } from 'react-simple-typewriter'
const BoxOne = () => {
    return (
        <div
            className="w-full h-96 bg-center bg-no-repeat rounded-3xl"
            style={{
                backgroundImage: 'url(https://i.ibb.co/HCvgcQ5/potter-4682257-1920.jpg), linear-gradient(180deg, lightgray 50%, transparent 50%)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="h-full flex items-center">
                <div className="md:pl-10 p-5 space-y-3">
                    <h1 className="font-rancho font-bold text-5xl text-white max-w-[500px]"><span>{' '}</span>
                        <Typewriter
                            words={['Turning Clay Into Something Amazing', 'Turning clay into something extraordinary where artistry meets alchemy.']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        /></h1>
                    <p className="text-white font-medium font-poppins md:text-2xl">Turning clay into something amazing is akin to coaxing life from earth itself.</p>
                </div>
            </div>
        </div>
    );
};

export default BoxOne;
