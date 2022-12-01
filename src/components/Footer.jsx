
    import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import img1 from "../photos/istockphoto-1216798128-170667-removebg-preview.png" 
export default function App() {
  return (
    <MDBFooter bgColor='footerbg' className='text-lg-left footerbg white-text mt-5 pt-5'>


      <MDBContainer className='p-4'>
      
      <img  className="shadow-4-strong m-4 reduisLow logoFooter" alt="avatar2" src={img1} />

<div>This website is for health information and advice about coronavirus (COVID-19). how to prevent and protect yourself from disease</div>
<br />
<div>learn about the government response to voronavires on GOV.UK</div>    
<br />     
<div className="row">
<div className="col">
<a className="btn btn-primary border-0 mb-5" style={{background: "#3b5998",minWidth:"300px"}} href="#!" role="button"
  > Find Us on Facebook  <i className="fab fa-facebook-f"></i
></a>
</div>  
<div className="col">
<a className="btn btn-primary border-0 mb-5"style={{background: "#55acee",minWidth:"300px"}}  href="#!" role="button"
  > Find Us on Twitter  <i className="fab fa-twitter"></i
></a>
</div>
<div className="col">
<a className="btn btn-primary border-0 mb-5"style={{background: "#ac2bac",minWidth:"300px"}} href="#!" role="button"
  >Find Us on Instagram<i className="fab fa-instagram"></i
></a>
</div></div>
 <MDBRow>
          <MDBCol lg='3' md='6' className='col-12 col-md-6 col-lg-4 mb-3'>
            <h5 className='text-uppercase'>QUICK LINK</h5>

            <ul className='list-unstyled mb-0 white-text'>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text '>
                  About Corona
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                  Symptoms
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                  Prevention
                </a>
              </li>
              <li>
                <a href='#!'  style={{textDecoration:"none"}} className='white-text'>
                  Protect Yourself
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text '>
                  FAQs
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='col-12 col-md-6 col-lg-4 mb-3'>
            <h5 className='text-uppercase mb-0'>HELPFULL LINK</h5>

            <ul className='list-unstyled'>
            <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text '>
                 Healthcare professionals
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                Healthcare Facilities
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                  Older Adults & Medical Conditions
                </a>
              </li>
              <li>
                <a href='#!'  style={{textDecoration:"none"}} className='white-text'>
                  Repare your Family
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='col-12 col-md-6 col-lg-4 mb-3'>
            <h5 className='text-uppercase'>IMPORTANT LINK</h5>

            <ul className='list-unstyled mb-0'>
            <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text '>
                  WHO Website
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                  CDC Website
                </a>
              </li>
              <li>
                <a href='#!' style={{textDecoration:"none"}} className='white-text'>
                  NHS Website
                </a>
              </li>
              <li>
                <a href='#!'  style={{textDecoration:"none"}} className='white-text'>
                  Harvaed Health
                </a>
              </li>
              
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className=' container p-3'>
        <div style={{fontSize:"14px"}}>© 2021 COVID-19 Templet Made by <span className='bold_text'>amany abdelfattah</span> Thanks to-Mina Karem Ghapical
      <br />
      Discomer.We hope you find the information on this website usful.This website is for genral information and raise of (2019-cov)
      only All the Information based on WHO,NHS AND CDC website. information on our website is most for awsness.if you have andy doubt please verify from repective site.

      </div>
      </div>
    </MDBFooter>
  );
}
