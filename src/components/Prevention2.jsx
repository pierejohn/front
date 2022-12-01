import React from 'react'
import img1 from "../photos/steps.png"
export default function Prevention2() {
    return (
        <div className=' container background-w mt-5 p-2'>
            <div className='row d-flex justify-content-between m-5'>

            <div className='col-12 col-md-12 col-lg-8'>
                <h1 className='mb-5'>Take steps to protect others</h1>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    stay home if youare sick</span>-Stay home if you are sick,exept to get medical care</div>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>   cover your mouth and nose</span>-with a tissue when you cough or sneeze (throw used tissues in the trash ) or use the inside of your elbow</div>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    Wear a facemask if you are</span>-You should waer a facemask when you are around other people(e.g,sharing a room or vechile) and before you enter a healthcare provider's</div>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    Clean AND disinfect frequently touched surfaces daily</span>-This includes phones,tables,light switches,doorknobs,countertops,handles,desks,toilets,faucets and sinks</div>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    clean the dirty surface</span>-Use detergent or soap and water prio to disinfection</div>
                <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    Stay informed about the local CVID-19 situation</span>-Get up-tp-date information about local COVID-19 activity from <span><a href="">public health officals</a></span> </div>
              <div className='bigtext m-4'><span className='bold_text'><i style={{color:"green"}} class="fa-solid fa-circle-check"></i>    Dedicated.,lined trash can</span>-If possible ,dedicate a lined trash can for the ill person .use gloves when removing garbage bags,and handing & disposing of trash</div>
              
            </div>
            
            <div className='col-12 col-md-12  col-lg-4' >
                <img style={{ maxHeight: "600px" }} src={img1} />
            </div>
            </div>

        </div>
    )
}
