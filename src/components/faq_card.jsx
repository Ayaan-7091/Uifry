export default function FaqCard({bg,text,sub_text}){

    return(
        <div className={`faq-card bg-${bg} p-6 rounded-md mt-5 shadow-md md:shadow-none`}>
                    <h2 className={`mb-10 font-semibold text-md md:text-4xl text-${text}`} >
                    
                    The Best Financial Accounting App Ever!</h2>
                    <p className={`text-md md:text-xl text-md  font-medium text-${text} ${sub_text}`}>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
                    </div>
    )
}