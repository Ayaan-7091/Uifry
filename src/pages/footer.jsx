import logo from '../assets/logo.png';

export default function Footer({ darkMode }) {
    return (
        <div className={`footer grid ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}-100 mt-40`}>
            <div className="section-2 flex flex-col md:flex-row justify-evenly gap-4 p-6 md:p-4 ">
                <div className="block-s-1 flex flex-col space-y-4">
                    <div className="tab-1 flex items-center space-x-4">
                        <img width="100" height="100" src={logo} className="mb-5" />
                    </div>
                    <div className="tab-3 flex items-center space-x-2">
                        <img width="16" height="16" src="https://img.icons8.com/material-rounded/24/ff5555/filled-message.png" alt="phone"/>
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Help@Frybix.Com</p>
                    </div>
                    <div className="tab-4 flex items-center space-x-2">
                        <img width="16" height="16" src="https://img.icons8.com/ios-filled/50/ff5555/phone.png" alt="new-post"/>
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}> +1 234 456 678 89</p>
                    </div>
                </div>
                <div className="block-s-2 flex flex-col space-y-4">
                    <div className="tab-1 flex items-center space-x-4">
                        <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Links</p>
                    </div>
                    <div className="tab-2 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Home</p>
                    </div>
                    <div className="tab-3 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>About Us</p>
                    </div>
                    <div className="tab-4 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Bookings</p>
                    </div>
                    <div className="tab-5 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Blog</p>
                    </div>
                </div>
                <div className="block-s-3 flex flex-col space-y-4">
                    <div className="tab-1 flex items-center space-x-4">
                        <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Legal</p>
                    </div>
                    <div className="tab-2 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Terms Of Use</p>
                    </div>
                    <div className="tab-3 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Privacy Policy</p>
                    </div>
                    <div className="tab-4 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Cookie Policy</p>
                    </div>
                </div>
                <div className="block-s-4 flex flex-col space-y-4">
                    <div className="tab-1 flex items-center space-x-4">
                        <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Product</p>
                    </div>
                    <div className="tab-2 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Take Tour</p>
                    </div>
                    <div className="tab-3 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Live Chat</p>
                    </div>
                    <div className="tab-4 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Reviews</p>
                    </div>
                </div>
                <div className="block-s-5 flex flex-col space-y-4">
                    <div className="tab-1 flex items-center space-x-4">
                        <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Newsletter</p>
                    </div>
                    <div className="tab-2 flex items-center space-x-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Stay Up To Date</p>
                    </div>
                    <div className="tab-3 flex md:items-center space-x-2 flex-col md:flex-row">
                        <input type="text" className="border p-2 mb-2 md:mb-0" placeholder="Your Email" />
                        <button className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} p-2 rounded-sm col-span-1 w-[10rem]`}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="section-3 flex flex-col items-center space-y-4 pt-8 border-t p-6 md:p-12">
                <p className={`text-${darkMode ? 'white' : 'black'}`}>
                    Copyright 2022 Uifry.Com All Rights Reserved
                </p>
            </div>
        </div>
    );
}
