import React from 'react'
import "../HeaderMain/main.css";
import 'bootstrap/dist/css/bootstrap.css';


const HeaderMain = ()=>{

  return(

    <>
    
        <div className=" nav-container d-none d-md-block hidden lg:flex justify-between items-center px-14 py-8 shadow-xs bg-white">
            <div className=" max-width nav">
                <div className=' nav-child-abc'>
                    <div className='abc-child'>
                        <p className="">ABC</p>
                        <p className="">PROPERTIES</p>
                    </div>
                    <span className='real-estate'>Your Perfect Real Estate Partner</span>
                </div>
                <div className=' nav-child-menu fnt-siz '>
                    <div className='nav-chld-text'><p className="">Buy</p></div>
                    <div className='nav-chld-text'><p className='rent' style={{color:"#F4835F"}}>Rent</p></div>
                    <div className=' empty-div'style={{ backgroundColor: "#CBCBCB", padding : "1px", borderRadius:"2px", height:"30px", width: "2px" }}></div>
                    <div className='nav-chld-text'><p className=""> Navigators Edge </p></div>
                    <div className='nav-chld-text'><p className=""> Our Agent</p></div>
                    <div className='nav-chld-text'><p className="">Blogs & Insights</p></div>
                    <div className='nav-chld-text'><p className="">New Launges</p></div>
                    <div className='nav-chld-text'><p className="">About Us</p></div>
                    <div className='nav-chld-text'><p className="">Help & Support</p></div>                  
                </div>
                <div className='nav-child-btn'>Sell Property</div>
            </div>
        </div>    
    </>
    

  )

}
export default HeaderMain;