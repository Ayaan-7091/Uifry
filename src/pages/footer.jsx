import logo from '../assets/logo.png';

export default function Footer(){

    return(
        <div>
         <div className="footer grid  bg-aliceblue-100 mt-40">
        
        <div className="section-2 flex flex-col md:flex-row justify-evenly gap-4 p-6 md:p-4 bg-white ">
            <div className="block-s-1 flex flex-col space-y-4">
                <div className="tab-1 flex items-center space-x-4">
                    <img width="100" height="100" src={logo} className="mb-5" />
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <img width="16" height="16" src="https://img.icons8.com/material-rounded/24/ff5555/filled-message.png" alt="phone"/>
                    <p className="text-sm  font-medium">Help@Frybix.Com</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <img width="16" height="16" src="https://img.icons8.com/ios-filled/50/ff5555/phone.png" alt="new-post"/>
                    <p className="text-sm  font-medium"> +1 234 456 678 89</p>
                </div>
            </div>
            <div className="block-s-2 flex flex-col space-y-4">
                <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">Links</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Home</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <p className="text-sm  font-medium">About Us</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Bookings</p>
                </div>
                <div className="tab-5 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Blog</p>
                </div>
            </div>
            <div className="block-s-3 flex flex-col space-y-4">
            <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">Legal</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Terms Of Use</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Privacy Policy</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Cookie Policy</p>
                </div>
               
            </div>

            <div className="block-s-3 flex flex-col space-y-4">
            <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">Product</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Take Tour</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Live Chat</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Reviews</p>
                </div>
               
            </div>

            <div className="block-s-3 flex flex-col space-y-4">
            <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">Newsletter</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm  font-medium">Stay Up To Date</p>
                </div>
                <div className="tab-3 flex md:items-center space-x-2 flex-col md:flex-row">
                    <input type="text" className='border p-2 mb-2 md:mb-0' placeholder='Your Email'  />
                    <button className='bg-black text-white p-2 rounded-sm col-span-1 w-[10rem]'>Subscribe</button>
                </div>
               
            </div>
        </div>
        <div className="section-3 flex flex-col items-center space-y-4 pt-8 border-t p-6 md:p-12">
            <p className="text-black">Copyright 2022 Uifry.Com All Rights Reserved</p>
        </div>
    </div>
        </div>
    )
}