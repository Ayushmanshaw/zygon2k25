import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white">
      <div className="container mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://silicon.ac.in/" className="flex items-center">
              <img
                src="./siliconLogo.png"
                className="h-14 me-6"
                alt="Silicon University"
              />
            </a>
            {/* <address className="not-italic leading-6 mb-4 text-sm lg:text-lg font-semibold">
              Silicon University, <br />
              Silicon Hills, Patia <br />
              Bhubaneswar- 751024 <br />
              Odisha, India.
            </address> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold mb-3">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">Zygon</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Silicon University</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 <a href="#" className="hover:underline">Zygon</a>. All Rights Reserved.
          </span>
          <span className="text-sm text-gray-400 sm:text-center flex items-center">
            Made with love <FaHeart className="m-1 text-red-500 relative top-[1px]" /> by Team SSC.
          </span>
        </div>
        {/* Social Media Icons */}
          {/* <div className="flex mt-4 sm:mt-0 space-x-5 text-2xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div> */}
      </div>
    </footer>
  );
};

export default Footer;
