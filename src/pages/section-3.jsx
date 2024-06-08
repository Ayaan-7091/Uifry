import mobile_img from '../assets/specs3.png';
import blur_img from '../assets/blur1.png';

export default function Section3(){

    return(
        <div className="grid grid-cols-2 md:pl-8 md:pr-8">
            
          
            <div className="left-side col-span-1 grid grid-rows-1 md:pt-14 md:pl-10 pl-4">

                    <div className='row-span-1' >
                    <p className='text-customRed md:text-xl text-sm'>ADVANTAGES</p>
                    <h1 className='text-2xl md:text-6xl font-black mb-10 '>Why Choose Uifry?</h1>
                   
                
                   
                        <h2 className='flex items-center mb-10 font-semibold text-md md:text-3xl'>
                            <img className='pr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxUlEQVR4nNXaT2gUVxwH8K1Sba2ttaUtpRXaQ0WKKHiol5b20rrQxbg7v+/MkoQsUjEEQXKo2qKwhR49NSVixR5qimDBGAQtFHOINIK0HhRaSUIsjc0aRJvU/xWTb3mjSWa3m83szm92xoHv9b332fdn35s3iUQID3O5p2jbq2lZ7xFIEviYlvUBbXstm5qeS8T1IfAaRbZQ5DBF/qDIJAFWSIEixynSzkxmVdSNX0jAIfCTj4bPl18IbGMqtaR+gETiCQI5AoMBG18uVwl8ZoZmuAjLWkOgPwRAaYZo2xvCQYi0ELhTBwQ9+YbAIh0AsIjA93UG0JMz3LTpxWCIVGoJgR8jRNCNyO90nBW1IbZufZLAycgR8MybbPaV6iHAdzFoPEtytqoVjSKtMWg050inP0QmsyqC1am6WFaDnyHVG3lDMU9ERggsrYSQyBsJ3/my0tw4p13h/R07eG/3btJxtHvlHzY2Li/XG2a7rVrZja4uFgoFN9d7e0nb1sZ8Xg7yg2Ylky0tvDIyMgMx+XfnTu3hNWQ2sbOIhobnKXJXpXDH4c2DB3nl0qUihJvLlzlx9Cinmpv1MJa1fhZiWRmtgie6u/8PKMm1/n5OZbNamC+8w+prjULN0JkPMZ3bHR1akNNeyFmNQm8cOuQbcv3UKR2IuFNi4TRkXKPQ8RMnfEOunj+v1SMk8KZBvKRV4N/VQC5c0INY1kcJOs7Kxx4iggRte91jDwE+UYVc6+vzDTH/M7oQR2loZbMcGxjwDTF50NqqOLSgM9lvdXZWhTAZ7+nR2n99GHj5vd/ezoljx1gYHa0aMr2ZvLdnTzCI47wR6A/RbM9rBZTm1r59tQ6ru8znFwTaotzcv18FYWJWPNYG6fNuUdI1QQ4ciB6C4k3jMrVt/Oy4dYeeN+aMoloH3LxTesw9olqBbXNseLh4uW1r00YMFh2sXIhtb9D+te7s3fvwlDg66h57Q+iNXeVfPgC/alc21dTEyVwuDMSEOdnOBalp0kcSkXxZhAcTpxfXnCN/srn5mcqQh3uvuL8yTVVEzGDMDW3UjcWc6fCF8GC+jUGjWZIzTCYX13L93B2DxvNRBplOv1wVInZXb8BvTKdfrwlRcgUX3e2VyM8EXgiEKHM9fbuOiCmKfKV2PV2EMR/KAKfr0AsDM6e+kD/haCRwMQTAGIFPq16ZAoHy+QWPbrjMYvAgIMKcUNsIPF03QFlUOv0qRTZTpIvAsA/YXwR6CGxnJvNWIq4Pk8nFBN4m8O7Mh2fA++5HORs3PhtGpf8BoWS8Hw0jhMAAAAAASUVORK5CYII=" alt="" />
                          Clever Notifications</h2>
                        <p className='text-md md:text-xl text-xs'>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                        </div>
                
                
            </div>

            <div className="right-side col-span-1 mt-24 md:mt-0">

                
                <img src={mobile_img} alt="" />
            </div>
        </div>
    )
}