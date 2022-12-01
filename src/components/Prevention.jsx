import React from 'react'
import img1 from "../photos/advice-a.png"
import img2 from "../photos/advice-b.png"
import img3 from "../photos/advice-c.png"
import img4 from "../photos/advice-d.png"

export default function () {
    return (
        <div id='Prevention' className='container d-flex flex-column mt-5 pt-5 align-items-center'>
            <div className='blue_text mt-5 BoldNum'>HOW TO PROTECT YOURSELF?</div>
            <div className='corona_bold_text mt-3 mb-3'>PREVENTION & ADVICE</div>
            <div className='centerFont mb-5 pb-5 MaxWidth800px'> There is currently no vaccine to prevent coronavires disease 2019(COVID-19).<span className='bold_text'>The best way to prevent illness is to avoid being exposed to this virus.
            </span>  Stay aware of the latest information on the COVID-19 outbreak,available on the WHO websitw and through your national and local public health authorlty</div>

            <div></div>
            <div className="row cotainer mb-5 pb-5">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 border-0 d-flex flex-column align-items-center " >
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img1} />
                        <div className="card-body  d-flex flex-column align-items-center">
                            <h5 className="card-title ">Wash your hands frequently</h5>
                            <p className="card-text">Regularly and thorughtly clan your hands with an alcohol-based hand rub or wash them with soap and water for at leat 20 seconds</p>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 border-0 d-flex flex-column align-items-center" >
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img2} />
                        <div className="card-body  d-flex flex-column align-items-center">
                            <h5 className="card-title">Maintain social distance</h5>
                            <p className="card-text">Maintain at least 1 meter (3 feet) distance between yourself & anyone who is coughing or sneexing .if you are too close .get chance to infected</p>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="card h-100 border-0 d-flex flex-column align-items-center" >
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img3} />
                        <div className="card-body  d-flex flex-column align-items-center">
                            <h5 className="card-title ">Avoid touching face</h5>
                            <p className="card-text">Hands touch many surfaces and can pick up viruses.So, hands can transfer the virusn to your eyes , nose or mouth and can make you sick</p>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="card h-100 border-0 d-flex flex-column align-items-center" >
                        <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img4} />
                        <div className="card-body  d-flex flex-column align-items-center">
                            <h5 className="card-title ">Practice respiration hygiene</h5>
                            <p className="card-text ">Maintain good respiration hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-evenly mb-5 pb-5'> 

                 <button style={{minWidth: "400px",maxHeight:"40px"}} className='col col-12 col-md-5 btn btn-primary reduis mb-5 MakeShadow'>
                    Check how you wash hand<i className="fa-solid fa-arrow-right"></i>
                    </button>
                    
                    <button style={{minWidth: "400px",maxHeight:"40px",color: "#0d6efd"}} className='col col-12 col-md-5 btn bold_text   mb-5 '>
                    Q&A on Coronavirus<i className="fa-solid fa-arrow-right"></i>
                    </button>
                  

                   
                </div>
        </div>
    )
}
