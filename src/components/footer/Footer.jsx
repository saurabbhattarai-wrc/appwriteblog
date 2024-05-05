import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-blue-500 to-blue-700 py-10 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8">
                        <div className="mb-8">
                            <Logo width="100px" />
                        </div>
                        <p className="text-sm text-gray-100">&copy; 2024 Your Company. All Rights Reserved.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8">
                        <h3 className="mb-4 text-sm font-semibold text-gray-100">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Features</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Pricing</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-gray-200">Press Kit</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8">
                        <h3 className="mb-4 text-sm font-semibold text-gray-100">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Account</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Help</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-gray-200">Customer Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8">
                        <h3 className="mb-4 text-sm font-semibold text-gray-100">Legals</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Terms &amp; Conditions</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-gray-200">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
