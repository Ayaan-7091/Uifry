import logo from '../assets/logo.png';
import '../App.css';
import * as React from 'react';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function Navigation() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 p-6 items-center'>
                <div className="left-panel col-span-1 flex flex-wrap items-center">
                    <div className="logo-img mr-4">
                        <img src={logo} alt="" className="h-8" />
                    </div>
                    <p className="nav-item-1 mt-2 mr-4 hover:text-customRed cursor-pointer">Home</p>
                    <div className="nav-item-2 mt-2 mr-4 hover:text-customRed cursor-pointer">About us</div>
                    <div className="nav-item-3 mt-2 mr-4 hover:text-customRed cursor-pointer">Pricing</div>
                    <div className="nav-item-4 mt-2 hover:text-customRed cursor-pointer">Features</div>
                </div>
                <div className="right-panel col-span-1 flex justify-end mt-4 md:mt-0">
                    <div>
                        <button className='bg-black text-white p-2 rounded-sm mr-2 hover:bg-customRed'>
                            <Brightness5Icon />
                        </button>
                        <button className='bg-black text-white p-2 rounded-sm pl-4 pr-4'>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
