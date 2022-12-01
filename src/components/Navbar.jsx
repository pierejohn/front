import React from 'react'
import "../App.css"
import logo from "../photos/istockphoto-1216798128-170667.jpg"
import"./StyleSheet.css"
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className=" nav navbar navbar-expand-lg fixed-top bg-white">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                      
                    <Link  className='remove_underline'smooth to="#home"   >
                    
                        <li   >
                    
                            <a className="nav-link active" aria-current="page" id="NavParText" >home</a>
                        </li>
                        </Link>
                   
                  
                        <Link activeClass="active" className='remove_underline'smooth to="#aboutCorona" >
                        <li className="">
                       
                            <a className="nav-link active"  aria-current="page" id="NavParText" >about Corona</a>
                        </li>
                        </Link>
                        <Link activeClass="active" className='remove_underline'smooth to="#symptoms" >
                        <li className="">
                            <a className="nav-link active" aria-current="page" id="NavParText" >symptoms</a>
                        </li>
                        </Link>
                        <Link activeClass="active" className='remove_underline'smooth to="#Prevention" >
                        <li className="">
                            <a className="nav-link active" aria-current="page" id="NavParText" href="#">Prevention</a>
                        </li>
                        </Link>
                        <Link activeClass="active" className='remove_underline'smooth to="#treatment" >
                        <li className="">
                            <a className="nav-link active" aria-current="page" id="NavParText" href="#">Treatment</a>
                        </li>
                        </Link>
                        <Link activeClass="active" className='remove_underline'smooth to="#faq" >
                        <li className="">
                            <a className="nav-link active" aria-current="page" id="NavParText" href="#">FAQ</a>
                        </li>
                        </Link>
                        <Link activeClass="active" className='remove_underline'smooth to="#News" >
                        <li className="">
                            <a className="nav-link active" aria-current="page" id="NavParText" href="#">News</a>
                        </li>
                        </Link>
                        <li className="">
                            <button  className="btn btn-primary btn-floating reduis" type="submit">Do & Dont</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )




    // function customLink( {href ,children,...props}){
    //     const path=window.location.pathname
    //     if (path==href)
    //     return(
    //         <div className={path==href?"active":""}>
    //     <Link activeClass="active" className='remove_underline' smooth to={href} >
    //     <li className="nav-item active">
    //         <a className="nav-link "{...props}aria-current="page" id="NavParText">{children}</a>
    //     </li>
    //     </Link></div>)
    // }
    



}


