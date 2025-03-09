import React from 'react'
import "../../Components/Header/header.css"
// import HomePage from './Components/HomePage'
// import 'bootstrap/dist/css/bootstrap.css';
// import Icons from './Assets/Icons';


const Header = ()=>{

  return(


    <>
       {/* warnning banner */}

       <div className='  warning-banner text-center' style={{backgroundColor: "#F4835F", padding: "10PX" }}>
            <p className='warning-text ' style={{ color: "#FFFFFF", }}>Usage of Illegal Property Images to upload content showing area in non standard/Illegal units is prohibited</p>
            <button className='learn-more-btn'style={{ backgroundColor: "#FFFFF",  }}>Learn More</button>
        </div>
    
    </>

  )

}
export default Header;