import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
const BackButton = () => {
    return (
        <Link href="/" className="hidden md:flex md:absolute left-10 items-center justify-center w-10 h-10 mt-4 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600 hover:text-gray-800 transition duration-300">
            <FaArrowLeft />
        </Link>
    );
};

export default BackButton;
