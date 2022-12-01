import React from 'react'
import "../App.css"
import "./StyleSheet.css"
import img1 from "../photos/istockphoto-1216798128-170667.jpg"
import img2 from "../photos/header-a.png"

export default function Home() {
    return (

        <div id='home' className="container Home mt-5 pt-5 ">
            <div className="row">
                <div className="col-12  col-md-12 col-lg-5">
                    <div className="d-flex flex-column">
                        <div className='m-3'><img src={img1} alt="logo" /></div>
                        <div className='mb-5'> the coronavirus (COVID-19) was reported in wuhan,hubei,China in December 2019,the outbreak was latter regnized as a pandemic by the world health organizathion(wh0) on 1 March 2020
                        </div>
                        <div className='row'>
                            <button type="button" className=" col-4 btn btn-primary reduis">How To Protect <i className="fa-solid fa-shield-halved"></i></button>
                            <button type="button" style={{ color: "#0d6efd" }} className=" col btn ">About COVID-19 <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className=' m-5 d-flex flex-raw raw'>
                            <div className='d-flex flex-column m-2 col-lg-6'><div className='textSmall'>WORLDWIDE CASE</div> <div className='BoldNum'>8,9849,671</div></div>
                            <div className='d-flex flex-column m-2 col-lg-3'><div className='textSmall'>DEATHS</div> <div className='BoldNum'>467,432</div ></div>
                            <div className='d-flex flex-column m-2 col-lg-3'><div className='textSmall'>Recoverd</div> <div className='BoldNum'>4,556,091</div></div>
                           
                         </ div>
                        <div className='textSmall m-2'>*Last Upload jun 21,2020,09:21AM America/Chegaco</div>
                    </div>
                </div>
                <div className="col-12  col-md-12 col-lg-7">
                <div className='m-3'><img src={img2} alt="logo"  className='R_img' /></div>
                </div>
            </div>
        </div>

    )
}
