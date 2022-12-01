import React from 'react'

export default function () {
    return (
        <div id='aboutCorona' className="container mt-5 pt-5 pb-5">
            <div className='row d-fex flex-row justify-content-between'>
                <div className="col-12  col-md-12 col-lg-5 d-flex flex-column">
                    <div className='blue_big_text mt-5'>ABOUT THE DISEASES</div>
                    <div className='corona_bold_text'>CORONAVIRUS (COVID-19)</div>
                    <div className='mb-3'><span className='BoldNum'>COVID-19 is a new illness that can affect your lungs and airways</span><span className='text_about_corona'>
                        .its caused by a virus called coronavirus. it was discovered in December 2019 in Wuhan,Hubei,China.</span>
                    </div>
                    <div className='text_about_corona mb-3'> common signs of infection include respiratory symptoms fever,cough,shortness of breath and difficullties.In more servere cases,infection can cause pneumonia,severe acute respiratory syndrome,kidney failure and even death </div>
                    <div className='text_about_corona mb-3'>standard recommendation to prevent infection spread include regular hand washing,cvering mouth and nose when coughing and sneezing .thoroughty cookingmeat and eggs,avoid close contact with anyoun showing symptoms of respiratory liness sush as coughing and sneezing</div>
                </div>

                <div className="col-12  col-md-12 col-lg-4">
                    <table border="0.1" className="table-light table-bordered mt-5 MakeShadow w-100 h-100 reduis centerFont">
                        
                            <tr className="table-light BoldNum centerFont">What you need to know</tr>
                        
                        <tbody>

                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>How coronavirus is spread</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>
                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>Symptoms of coronavirus</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>
                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>how to ptotect yourself</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>
                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>Treatment for coronavirus</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>
                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>Myth-Busters of coronavirus</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>
                            <tr className="table-light BoldNum centerFont"><span className='blue_text'><span>Questions & answers</span>  <i className="fa-solid fa-arrow-right"></i></span></tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
