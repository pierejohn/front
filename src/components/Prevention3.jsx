import React from 'react'
import img1 from "../photos/hand-a.png"
import img2 from "../photos/hand-b.png"
import img3 from "../photos/hand-c.png"
import img4 from "../photos/hand-d.png"
import img5 from "../photos/hand-e.png"
import img6 from "../photos/hand-f.png"
export default function () {
    return (
        <div className=" container mt-5  d-flex flex-column align-items-center">
            <div className='BoldNum biggertext m-3'>Follow steps to wash hands</div>
            <div> <button style={{ minWidth: "400px", maxHeight: "40px", color: "#0d6efd" }} className='col col-12 col-md-5 btn bold_text   mb-5 '>
                Why do i need to wash hand<i className="fa-solid fa-arrow-right"></i>
            </button></div>
            <div className='container row mb-5 pb-5'>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img1} />
                    </div>
                    <div style={{ maxWidth: "70px" }}  className='bold_text centerFont'>soap on hand</div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img2} />
                    </div>
                    <div
                   style={{ maxWidth: "70px" }}  className='bold_text centerFont'>plam on plam</div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img3} /> 
                    </div>
                    <div
                   style={{ maxWidth: "70px" }}  className='bold_text centerFont'>between fingers</div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img4} />
                    </div>
                    <div
                    style={{ maxWidth: "70px" }}  className='bold_text centerFont'>Back to Hands</div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img5} />
                    </div>
                    <div
                    style={{ maxWidth: "90px" }}  className='bold_text centerFont'>Clean with Water</div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                    <img className="rounded-circle shadow-4-strong mb-4" alt="avatar2" src={img6} />
                    </div>
                    <div
                  style={{ maxWidth: "70px" }}  className='bold_text centerFont'>Focus on weits</div>
                </div>
            </div>

        </div>
    )
}
