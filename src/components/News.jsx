import React from 'react'
import img1 from "../photos/blog-a.jpg"
import img2 from "../photos/blog-b.jpg"
import img3 from "../photos/blog-c.jpg"
export default function News() {
    return (
        <div id='News' className='container d-flex flex-column mb-5 pb-5 mt-5 pt-5 align-items-center'>
            <div className='blue_text mt-5 BoldNum'>RECENT FROM BLOG</div>
            <div className='corona_bold_text mt-3 mb-5 '>LATEST UPDATE</div>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div  className="card m-1 border-0" >
                            <img  className="shadow-4-strong m-4 reduisLow" alt="avatar2" src={img1} />
                            <div className="card-body centerFont medText">
                                <h5 className="card-title">Caring for someone at home</h5>
                                <p className="card-text">Most people who get sick with Covid-19 will have only mid illness and shoud recover at home. Care at home can help stop the spread of COVID-19</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4"> 
                    <div className="card border-0" >
                            <img  className="shadow-4-strong m-4 reduisLow" alt="avatar2" src={img2} />
                            <div className="card-body centerFont medText">
                                <h5 className="card-title">15 ways to keep safe and healthy</h5>
                                <p className="card-text">Most people who get sick with Covid-19 will have only mid illness and shoud recover at home. Care at home can help stop the spread of COVID-19 </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <div className="card m-1 border-0" >
                            <img s className="shadow-4-strong m-4 reduisLow" alt="avatar2" src={img3} />
                            <div className="card-body centerFont medText">
                                <h5 className="card-title">If You Think You Are Sick</h5>
                                <p className="card-text">if you are sick with COVID-19 or think you might have it. follow the steps below to help protect other people in your home and community.</p>

                            </div>
                        </div>
                    </div>
                </div>









            </div>
        </div>
    )
}
