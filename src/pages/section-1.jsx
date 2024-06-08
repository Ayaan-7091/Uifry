import strap_img from '../assets/vnag-strap.png';
import mobile_img from '../assets/mobile-op.png';
import blur_img from '../assets/blur1.png';
import '../App.css';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Section1({darkMode}) {
    return (
        <div className={`grid grid-cols-2  ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} `}>
            <div className="left-side col-span-1 grid-rows-2 p-2 md:p-8 lg:p-10">

            <div className="main-heading row-span-1 grid-rows-2 gap-6 order-1" style={{ backgroundImage: `url(${blur_img})`, backgroundSize: '30% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
    <h1 className="row-span-1 font-black text-2xl lg:text-6xl mt-4"> Make The Best Financial Decisions</h1>
    <span className="row-span-1 text-xs mt-4 md:text-sm">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</span>
</div>


                <div className="row-span-1 grid-rows-2 mt-4 mb-6">
                    <div className="grid grid-cols-2 items-start w-[21rem] md:w-[25rem]">
                        <button className='bg-black text-white p-2 rounded-sm col-span-1 w-[10rem]'>Get Started →</button>
                        <button className='bg-white text-black p-2 rounded-sm col-span-1 w-[10rem] hover:bg-customRed hover:text-white'><PlayCircleOutlineIcon /> Watch Video</button>
                    </div>
                    <div className="hidden md:block lg:block">
                        <img src={strap_img} alt="" />
                    </div>
                </div>
            </div>
            <div className="right-side col-span-1 mt-8 mb-8 md:mt-0 md:mb-0">
                <img src={mobile_img} alt="" />
            </div>
        </div>
    )
}
