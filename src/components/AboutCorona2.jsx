import React from 'react'
import img1 from "../photos/spread-a.png"
import img2 from "../photos/spread-b.png"
import img3 from "../photos/spread-c.png"

export default function AboutCorona2() {
    return (
        <div className='container d-flex flex-column mt-5 pt-5 align-items-center'>
            <div className='blue_text  BoldNum'>HOW CORONAVIRUS IS SPREAD</div>
            <div className='corona_bold_text mt-3 mb-3'>TREANSMISSION OF COVID-19</div>
            <div> Becouse its a new illnes,we dont know how coronavirus spreads </div>
            <div className=' mb-5 pb-5'> from person to  person,Similiar viruses are spread in cough droplets</div>
            <div></div>
            <div className="row cotainer mb-5 pb-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 " >
                        <img src={img1} className="card-img-top MakeShadow" alt="spread-a"/>
                            <div className="card-body ">
                                <h5 className="card-title blue_text">Person-toPerson spread as close contact with infected</h5>
                                <p className="card-text">The coronavirus is thorought to spread mainly from person to person .this can happen between people who are in close contact with one another</p>
                                 
                            </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100" >
                        <img src={img2} className="card-img-top MakeShadow" alt="spread-b"/>
                            <div className="card-body">
                                <h5 className="card-title blue_text">Touching or contact with infected surfave or  objects</h5>
                                <p className="card-text">A person can get COVID-19 by touching a surface or object that has the virous on it and then touching ther own mouth or possiple their eyes</p>
                                 
                            </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                <div className="card h-100" >
                        <img src={img3} className="card-img-top MakeShadow" alt="spread-c"/>
                            <div className="card-body ">
                                <h5 className="card-title blue_text">Droplets that from infected person coughs or sneezes</h5>
                                <p className="card-text">The coronavirus is thought to spread mainly from person to person .This can happen between people who are in close contact with one another</p>
                                 
                            </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary reduis mb-5 MakeShadow'>
            <i class="fa fa-question-circle"></i>  Have question about spreading <i class="fa-solid fa-question"></i>
            </button>
            
        </div>
    )
}
