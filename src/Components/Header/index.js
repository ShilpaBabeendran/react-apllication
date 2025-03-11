import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/Header/header.css"



const Header = ()=>{


  const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  

  return(


    <>
       {/* warnning banner */}

       {isVisible && (
        <div
          className={`d-flex ${
            isMobile ? "flex-column text-center" : "justify-content-center align-items-center"
          } text-white p-3 warning-banner-bgclr`}
        >
          <span className="small">
            Usage of Illegal Property Images to upload content showing area in
            non-standard/Illegal units is prohibited
          </span>
          <button
            className={`btn btn-light btn-sm rounded-pill ${isMobile ? "mt-3" : "ms-3"}`}
            onClick={() => setIsVisible(false)}
          >
            <strong>Learn More</strong>
          </button>
        </div>
      )}
    
    </>

  )

}
export default Header;