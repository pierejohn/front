import React from 'react'
import img1 from "../photos/donts-a.png"
import img2 from "../photos/donts-b.png"
import img3 from "../photos/donts-c.png"
import img4 from "../photos/protect.png"
import img5 from "../photos/dos-a.png"
import img6 from "../photos/dos-b.png"
import img7 from "../photos/dos-c.png"
export default function Treatment2() {
    return (
        <div className='container d-flex flex-column mt-5 pt-5 align-items-center'>
            <div className='blue_text mt-5 BoldNum'>DO'S & DON'T</div>
            <div className='corona_bold_text mt-3 mb-3'>PROTECT YOUTSELF</div>
            <div className='centerFont mb-5 pb-5 MaxWidth800px'> The best thing you can do now is plan for how can adabt your routine. Take few steps to protect yourself as Claen your hands often. Avoid close contact, Colver coughts and sneezes, Clean daily used surface etc. The best way to prevent illness is to avoid being exposed to this virus</div>

            <div className=" row ">
                <div className="col-12 col-md-12 col-lg-3 ">
                    <div className='blue_text '>Avoid clos contct<img className=" redBorder rounded-circle shadow-4-strong mb-4 " alt="avatar2" src={img1} /></div>
                    <div className='blue_text'>Dont Touch Face <img className="redBorder rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img2} /></div>
                    <div className='blue_text'>social Distance <img className="redBorder rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img3} /></div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-5 mb-5 pb-5">
                    <img style={{ maxHeight: "500px" }} className="shadow-4-strong mb-4" alt="avatar2" src={img4} />
                </div>
                <div className="col-12 col-md-12 col-lg-3 ">
                    <div className='blue_text'><img className=" greenBorder rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img5} />Wash Your Hands </div>
                    <div className='blue_text'><img className=" greenBorder rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img6} />Dink Much Water</div>
                    <div className='blue_text'><img className=" greenBorder rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img7} />use Face Mask</div>
                </div>

            </div>





        </div>
    )
}
