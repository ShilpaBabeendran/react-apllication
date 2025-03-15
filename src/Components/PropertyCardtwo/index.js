import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "../../Components/PropertyCardtwo/card.css";
// import Image from "../../assets/iconImages/card-img.png";

import Time from "../../assets/iconImages/time.png";
import headphn from "../../assets/iconImages/headphn.png";
import Verified from "../../assets/iconImages/check-white.png";
import location from "../../assets/iconImages/location.png";
import Whatsapp from "../../assets/iconImages/wtsapn.png";
import Mail from "../../assets/iconImages/mail.png";
import Phone from "../../assets/iconImages/phone.png";
import Check from "../../assets/iconImages/check.png";
import Mask from "../../assets/iconImages/mask.png";
import Bed from "../../assets/iconImages/bed.png";
import Bathrooms from "../../assets/iconImages/bathroom.png";
import Parking from "../../assets/iconImages/parking.png";
import RightArrow from "../../assets/iconImages/right-arrow.png";
import Map from "../../assets/iconImages/map.png"

const PropertyCardtwo = () => {

    const [isNormal, setIsNormal] = useState(false);
        const [isHover, setIsHover] = useState(false);
        const [isClick, setIsClick] = useState(false);
    
    
        const [isPressed, setIsPressed] = useState(false);
    return (

        <>


<div className=" d-flex justify-content-between property-body mt-3  " style={{marginLeft:"5%", marginRight:"5%"}}>












    {/* property card 2 */}

    <div className=" property-card d-none d-md-block g5 rounded-4   "style={{backgroundColor:"#F1F1F399", marginLeft:"5%", marginRight:"5%"}}>

        {[...Array(4)].map((_, index) => (

            <div key={index} className=" d-flex   property-card ">
                                        
                {/* Property Image Section */}


                <div className="col-md-5 position-relative start-10 image">
                    <img
                        src={Image}
                        alt="Property"
                        className="img-fluid rounded"
                        style={{ width: "auto", height: "auto" }}
                    />
                    <div  className="img-top-bar d-flex ">
                        <div className="days  ">
                            <img src={Time} alt="Property" className="time"/> Listed 5 Days ago
                        </div>
                        <div className="verified ">
                            <img src={Verified} alt="Property" className="verified"/>Verified by Athirad
                        </div>
                        <div className=" headphone ">
                            <img src={headphn} alt="Property" className="headohn"/>
                        </div>
                    </div>
                </div>

                                {/* Property Details Section */}
                <div className="card-details">
                    <div className=" flex top-details">
                        <div className= " details-address">
                            <div className=" title-contact ">
                                <div className="card-title">
                                    <div className="titile-text">
                                        <p className="title">VILLA 370 MIRA OASIS 1</p>
                                    </div>

                                        {/* buttonnnn */}
                                    <div className="container text-start">
                                        <h2 
                                            style={{ fontWeight: "bold", color: "#FF916E", fontSize: "30px" }}>
                                            2,50,190{" "}
                                            <span style={{ fontSize: "18px", color: "#FF6347" }}>
                                            AED YEARLY
                                            </span>
                                        </h2>
                                    </div>


                                </div>


                                <div className="button-container d-flex">
                                        {/* WhatsApp Button */}
                                    <button
                                        className={`whatsapp-btn ${isNormal ? "pressed" : ""}`}
                                        onMouseDown={() => setIsNormal(true)}
                                        onMouseUp={() => setIsNormal(false)}
                                        onMouseLeave={() => setIsNormal(false)}>
                                        <img src={Whatsapp} alt="Whatsapp" className="me-2" /> WHAT’S APP
                                    </button>

                                    {/* Contact Icons */}
                                    <div className="contact-icons">
                                        <div className={`icon-box ${isHover ? "pressed" : ""}`}
                                            onMouseDown={() => setIsHover(true)}
                                            onMouseUp={() => setIsHover(false)}
                                            onMouseLeave={() => setIsHover(false)}>
                                            <img src={Phone} alt="phone" className="icon" />
                                        </div>
                                        <div className={`icon-box ${isClick ? "pressed" : ""}`}
                                            onMouseDown={() => setIsClick(true)}
                                            onMouseUp={() => setIsClick(false)}
                                            onMouseLeave={() => setIsClick(false)}>
                                                <img src={Mail} alt="mail" className="icon" />
                                        </div>
                                    </div>
                                </div>                              
                            </div>
                                


                            <div className="container location">
                                <div className="d-flex align-items-center">
                                    <img src={location} alt="loctin"  className="text-primary me-2" size={20} />
                                    <span className="place{">03B, Sharjah, Dubai, UAE</span>
                                </div>
                            </div>


                            <div className=" d-flex status">
                                <div className="for">For Rent</div>
                                <div className="spacing"></div>
                                <div className="for">Furnished</div>
                                <div className="spacing"></div>
                                <div className="for">Atharid Premium</div>
                                
                                
                            </div>
                        </div>
                            
                    </div>





            {/* Features-details */}

            
                    <div className="property-info">
                        <div className=" sqrft">
                            {/* Status Information */}
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center forspace" style={{gap:"10px"}}>
                                    <img src={Check} alt="check"  className="text-warning" />
                                    <span className="txt-xlr">Ready to move</span>
                                </div>
                                <div className="d-flex align-items-center mt-1 forspace">
                                    <img src={headphn} alt="check"  className="w-1" />
                                    <span className="txt-xlr">Premium customer support</span>
                                </div>
                            </div>

                                                {/* Square Footage */}
                            <div className="d-flex align-items-center ">
                                <img src={Mask} alt="check" className="text-info" />
                                <span className=" fw-bold" style={{color:"#12B2AF"}}>1500.00 square ft</span>
                            </div>
                        </div>

                                            {/* Features List */}
                                        
                                        
                        <div className="d-flex justify-content-between mt-3">
                            <div className="d-flex align-items-center  rounded p-3 me-2 facility">
                                <img src={Bed} alt="bed" className="bi bi-house-door fs-4 me-2"/> 1 Bedroom
                            </div>
                            <div className="d-flex align-items-center rounded p-3 me-2 facility">
                                <img src={Bathrooms} alt="car"className="bi bi-shower fs-4 me-2"/> 1 Bathroom
                            </div>
                            <div className="d-flex align-items-center  rounded p-3 me-2 facility">
                                <img src={Parking} alt="car"   className="bi bi-car-front fs-4 me-2"/> Parking Available
                            </div>
                            <div className="">
                                <img src={RightArrow} alt="arrow"  className=""/>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}


                </div>
            </div>
        ))}

    </div>
    {/* </div> */}



            {/* said bar of body property */}
            


                        <aside className="rigt-said right-said-pos d-none d-md-block">
                            <div className="said-content">
                                         
                                <div className="said-content">
                                    <p className="support-map">Map support</p>
                                    <p className="para-map">Use our map support to find the property</p>
                                </div>
                                <div className="content-img">
                                    <img src={Map} className="map-img"/>
                                </div>
                                <div className="content-btn">
                                    Explore
                                </div>
                                 
                            </div>
                        </aside>
    















    </div>

                {/* said bar of body property */}
                                
            
            
            
                



         {/* mobile view of card */}
                                    
         <div className=" property-card-2 martop2p d-block d-md-none">
           {[...Array(4)].map((_, index) => (
               <div key={index} className=" property-card">
                    {/* Property Image Section */}
                        <div className="image">
                            <img src={Image} alt="Property" className="bg-image"/>

                            {/* Overlay Badges */}
                            <div className=" flex image-top-bar" >
                                <div className=" flex days">
                                    <img src={Time} alt="Property" className="time" />  
                                    <p>Listed 5 Days ago</p>
                                </div>
                                <div className="flex verified">
                                    <img src={Verified} alt="Property" className="verified"/>
                                    <p>Verified by Athirad</p>
                                </div>
                                <div className="flex headphone">
                                    <img src={headphn} alt="Property" className="headohn"/>
                                </div>
                            </div>


                            {/* Next Image Button */}
                            {/* <button className="right arrow">
                            <img src={Rightarrow} alt="arrow"/>
                            </button>
                            <button className="right arrow">
                            <img src={Leftarrow} alt="arrow"/>
                            </button> */}
                        </div>
        {/* Info */}
                        <div className="details-address">
                            <div className=" title-contact">
                                <div className="card-title">
                                    <div className="titile-text">
                                        <p className="title">VILLA 370 MIRA OASIS 1</p>
                                    </div>
                                    <div className=" flex price-text">
                                        <h1 className="price">2,50,190 </h1>
                                        <p className="aed">AED YEARLY</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex detail-font location pr-1">
                                <img src={location} alt="loctin" className="location-icon"/>
                                <p className="location-text">03B, Sharjag, Dubai, UAE</p>
                            </div>
                            <div className=" flex status pr-1">
                                <div className="for-rent">For Rent</div>
                                <div className="spacing"></div>
                                <div className="furnished">Vacant Now</div>
                                <div className="spacing"></div>
                                <div className="camera">Atharid Premium</div>
                                
                            </div>


                            <div className="features pr-1">
                                <div className="flex features-ready-to-move">
                                    <img src={Check} alt="check" className="check-icont"/>
                                    <p className="whatsapp-text">Ready to move</p>     
                                </div>
                                <div className="flex features-customer-support">
                                    <img src={headphn} alt="headphn" className="headphn-icont"/>
                                    <p className="customer-suppor-text">Premium customer support</p>     
                                </div>
                            </div>
            {/* Icons */}
                            <div className="flex property-info pr-5">
                                <div className="flex facility">
                                    <img src={Bed} alt="bed" className="bed-icont"/>
                                    <p className="customer-suppor-text">Bedrooms</p>
                                </div>
                                <div className="flex facility">
                                    <img src={Bathrooms} alt="bath" className="bath-icont"/>
                                    <p className="customer-suppor-text">2 Bathrooms</p>
                                </div>
                                <div className="flex facility">
                                    <img src={Parking} alt="car" className="car-icont"/>
                                    <p className="customer-suppor-text">Parking available</p>
                                </div>
                            </div>

                            <div className="flex square-ft">
                                <img src={Mask} alt="mask" className="sqrft-icont"/>
                                <p className="customer-suppor-text">1800.00 square ft</p>
                            </div>
                            

          {/* Buttons */}
                            <div className="button-container">
                                {/* WhatsApp Button */}
                                <button className="btn btn-success whatsapp-btn d-flex align-items-center">
                                    <img src={Whatsapp} alt="Whatsapp" className="me-2" size={24} />
                                        <span className="fw-bold text-white">WHAT’S APP</span>
                                </button>

                                {/* Phone Icon Button */}
                                <div className="icon-btn">
                                    <img src={Phone} alt="phone" size={24} className="icon" />
                                </div>

                                {/* Email Icon Button */}
                                <div className="icon-btn">
                                    <img src={Mail} alt="mail" className="icon" />
                                </div>
                            </div>

                    
                        </div>
                 </div>
                ))}
            </div> {/* // </div> */}
        </>

    )
}

export default PropertyCardtwo;