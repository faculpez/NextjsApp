import Link from 'next/link';
import { SlSocialLinkedin } from 'react-icons/sl'
import { TbBrandGmail } from 'react-icons/tb'


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="faculpez1998@gmail.com" className="text-white hover:text-gray-400 transition duration-300">
              <TbBrandGmail/>
            </a>
            <Link href="https://www.linkedin.com/in/facundo-lopez-9a149321a/" className="text-white hover:text-gray-400 transition duration-300">
              <SlSocialLinkedin/>
            </Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  