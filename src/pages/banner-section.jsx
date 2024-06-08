import img from '../assets/banner.png';
import blur from '../assets/blur1.png';

export default function BannerSection() {
    return (
        <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 flex flex-col justify-center md:ml-20  p-4 md:p-10 lg:p-20">
                <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold mb-4 ">
                    Ready To Get Started?
                </h1>
                <p className="text-white text-sm md:text-xl lg:text-3xl mb-6 ">
                    Risus Habitant Leo Egestas Mauris Diam Eget Morbi <br /> Tempus Vulputate.
                </p>
                <button className="bg-white text-black p-2 rounded-md flex items-center justify-center w-full max-w-xs">
                    <p className="mr-2 font-semibold text-sm md:text-base">Download App</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none">
                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" fill="#000000"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
