import FaqCard from "../components/faq_card";

export default function FAQ(){

    return(
        <div className="p-4 md:p-20 pt-12 md:pt-0">
            <div className="header">
                <p className="text-customRed font-semibold">FAQ</p>
                <h1 className="text-2xl md:text-5xl font-bold">Frequently Asked <br /> Questions</h1>
            </div>
            <div className="cards md:grid md:grid-cols-2">
                <div className="left-side md:col-span-1">   
                    <FaqCard text={'white'} bg={'customRed'} />
                    <FaqCard text={'black'} sub_text={'opacity-40'}/>
                    <FaqCard text={'white'} bg={'customRed'}/>  
                </div>
                <div className="right-side md:col-span-1 ml-3">   
                    <FaqCard sub_text={'opacity-40'}/>
                    <FaqCard text={'white'} bg={'customRed'}/>
                    <FaqCard sub_text={'opacity-40'}/>  
                </div>
            </div>
        </div>
    )
}