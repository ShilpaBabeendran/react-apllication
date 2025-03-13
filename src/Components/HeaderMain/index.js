// import React from 'react'
import React, { useState } from "react";

import "../HeaderMain/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderMain = ()=>{
    const [isOpen, setIsOpen] = useState(false);


  return(

    <>
    
                
        <div className="nav-container d-none d-md-flex justify-content-between align-items-center px-4 py-3 shadow-sm bg-white">
        <div className="nav d-flex justify-content-between w-100">
          {/* Logo & Text */}
          <div className="nav-child-abc d-flex flex-column">
            <div className="abc-child">
              <p className="mb-0 fw-bold">ABC</p>
              <p className="mb-0">PROPERTIES</p>
            </div>
            <span className="real-estate text-muted">
              Your Perfect Real Estate Partner
            </span>
          </div>

          {/* Navigation Menu */}
            <div className="nav-child-menu fnt-siz d-flex align-items-center">
                <div className=" nav-chld-text d-flex align-items-center">
                    {["Buy", "Rent"].map((item, index) => (
                        <div key={index} className="nav-chld-text mx-2">
                            
                            <p className={`mb-0 link-hover ${item === "Rent" ? "active-rent" : ""}`}>{item}</p>
                        </div>
                    ))}
                </div>

                <div className=' empty-div'style={{ backgroundColor: "#CBCBCB", padding : "1px", borderRadius:"2px", height:"30px", width: "2px" }}></div>
                <div className="nav-chld-text d-flex align-items-center">
                    {["Navigators Edge", "Our Agent", "Blogs & Insights", "New Launches", "About Us", "Help & Support"].map((item, index) => (
                        <div key={index} className="nav-chld-text mx-2">
                            
                            <p className="mb-0 link-hover">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

          {/* Sell Property Button */}
          <button className="nav-child-btn ">Sell Property</button>
        </div>
      </div>

      

    



        
    </>
    

  )

}
export default HeaderMain;