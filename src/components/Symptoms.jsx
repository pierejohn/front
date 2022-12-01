import React from 'react'

import img1 from "../photos/symptom-a.png"
import img2 from "../photos/symptom-b.png"
import img3 from "../photos/symptom-c.png"
export default function
    () {
        return (
            <div id='symptoms' className='container d-flex flex-column mt-5 pt-5 align-items-center'>
                <div className='blue_text mt-5 BoldNum'>WHAT ARE THE SYMPOTOMS OF COVID-19 ?</div>
                <div className='corona_bold_text mt-3 mb-3'>SYMPOTOMS OF CORONAVIRUS</div>
                <div> the most common symptoms of COVID-19 are fever ,lirdness and dry cough .some </div>
                <div>patients may have aches and pains .nasal congestion,runny nose,sore throat or</div>
                <div>diarrhea.thes symptoms are usually milk and begin gradually .Also the symptoms may </div>
                <div className=' mb-5 pb-5'>appear 2-14 days after exposure</div>
                <div></div>
                <div className="row cotainer mb-5 pb-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0" >
        
                            <div className="card-body MaxWidth400px">
                                <div className='d-flex flex-raw justify-content-between align-items-end'>
                                    <h5 className="card-title blue_text">Fever</h5>
                                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img1} />
                                </div>
                                <p className="card-text MaxWidth300px"><span className='bold_text'>High Fever</span>-this means you feel hot to touch on your chest or back
                                    (you do not need to measure your temperature).It is a common sign and also may appear in 2-10 days if you affected</p>
        
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0" >
        
                            <div className="card-body MaxWidth400px">
                                <div className='d-flex flex-raw justify-content-between align-items-end'>
                                    <h5 className="card-title blue_text">cough</h5>
                                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img2} />
                                </div>
                                <p className="card-text MaxWidth300px"><span className='bold_text'>High Fever</span>-this means you feel hot to touch on your chest or back
                                    (you do not need to measure your temperature).It is a common sign and also may appear in 2-10 days if you affected</p>
        
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="card h-100 border-0" >
        
        
                            <div className="card-body MaxWidth400px">
                                <div className='d-flex flex-raw justify-content-between align-items-end'>
                                    <h5 className="card-title blue_text">Shortness of breath</h5>
                                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src={img3} />
                                </div>
                                <p className="card-text MaxWidth300px"><span className='bold_text'>High Fever</span>-this means you feel hot to touch on your chest or back
                                    (you do not need to measure your temperature).It is a common sign and also may appear in 2-10 days if you affected</p>
        
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row gap-5 justify-content-evenly mb-5 pb-5'> 
                
                    <div className='col col-12 col-md-5 d-flex flex-raw '>
                       <span><i class="fa-solid fa-triangle-exclamation"></i></span>
                        <div><span className='blue_text bold_text'>Stay at home and call your doctor:</span>if you think you have been exposed to COVID-19 and develop a fever and any symptoms,such as cough or difficultty breathing .call your healthcare provider as soon ass possible for medical advice</div>
                    </div>


                    <button style={{maxWidth: "400px",maxHeight:"40px"}} className='col col-12 col-md-5 btn btn-primary reduis mb-5 MakeShadow'>
                        <i class="fa fa-question-circle"></i>  Have question ? find tha answer
                    </button>
                    
                </div>
            </div>
        )
}
