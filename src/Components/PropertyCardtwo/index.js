import React, { useState } from "react";

import "../../Components/PropertyCardtwo/card.css";
// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BiBed, BiBath, BiCar } from "react-icons/bi";
// import { FiExternalLink } from "react-icons/fi";

import Image from "../../assets/iconImages/card-img.png";
// import Rightarrow from "../../assets/iconImages/right.jpg";
// import Leftarrow from "../../assets/iconImages/left.jpg";
import Time from "../../assets/iconImages/time.jpg";
import headphn from "../../assets/iconImages/headphn.jpg";
import Verified from "../../assets/iconImages/check.jpg";
import location from "../../assets/iconImages/location.jpg";
import Whatsapp from "../../assets/iconImages/wtsap.jpg";
import Mail from "../../assets/iconImages/mail.jpg";
import Phone from "../../assets/iconImages/phone.jpg";
import Check from "../../assets/iconImages/check.jpg";
import Mask from "../../assets/iconImages/mask.jpg";
import Bed from "../../assets/iconImages/bed.jpg";
import Bathrooms from "../../assets/iconImages/bathroom.jpg";
import Parking from "../../assets/iconImages/parking.jpg";
import RightArrow from "../../assets/iconImages/rigt-arrow.jpg";
// import Filter from "../../assets/iconImages/filter.png"
// import Downarrow from "../../assets/iconImages/down-arrow 2.jpg";
// import LuxuryApartments from "../LuxuaryApartment";
import Map from "../../assets/iconImages/map.png";
// import Pagination from "../Pagination";


const PropertyCardtwo = () => {
    return (

        // <div>

            <div className=" flex max-width property-body">
            
                <div className="property-card-parent">

                
                    {/* property card 2 */}
    
                    <div className=" property-card-2">
    
                        {[...Array(4)].map((_, index) => (
    
                            <div key={index} className=" flex property-card">
                                
    
                                {/* Property Image Section */}
    
    
                                    <div className="image">
                                        <img src={Image} alt="Property" className="bg-image"/>
    
                                        {/* Overlay Badges */}
                                        <div className=" flex image-top-bar" >
                                            <div className=" flex days">
                                                <img src={Time} alt="Property" className="time"/>  
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
    
                                                {/* Property Details Section */}
                                    <div className="card-details">
                                        <div className=" flex top-details">
                                            <div className="details-address">                                     
                                                <div className=" title-contact">
                                                    <div className="card-title">
                                                        <div className="titile-text">
                                                            <h3 className="title">VILLA 370 MIRA OASIS 1</h3>
                                                        </div>
                                                        <div className=" flex price-text">
                                                            <p className="price">2,50,190 </p>
                                                            <p className="aed">AED YEARLY</p>
                                                        </div>
                                                    </div>
    
                                                    <div className="contact-etails">
                                                        <button className="flex wtsapp">
                                                            <img src={Whatsapp} alt="Whatsapp" className="Whatsapp-icont"/>
                                                            <p className="whatsapp-text">WHATAPP</p>
                                                        </button>
                                                        <button className="phone-mail">
                                                            <img src={Phone} alt="phone" className="phone-icont"/>
                                                        </button>
                                                        <button className="phone-mail">
                                                            <img src={Mail} alt="mail" className="mail-icon"/>
                                                        </button>    
                                                    </div>
                                                </div>
    
                                                <div className="flex location">
                                                    <img src={location} alt="loctin" className="location-icon"/>
                                                    <p className="location-text">03B, Sharjag, Dubai, UAE</p>
                                                </div>
                                                <div className="  status">
                                                    <div className="detail-font for-rent">For Rent</div>
                                                    <div className="spacing"></div>
                                                    <div className="detail-font furnished">Furnished</div>
                                                    <div className="spacing"></div>
                                                    <div className="detail-font camera">Security Camera</div>
                                                    <div className="spacing"></div>
                                                    <div className="detail-font gas">Gas Pipeline</div>
                                        
                                                </div>
                                                                                    
                                            
                                            </div>                                 
    
                                        </div>
    
            
            
            
                                            
                                                {/* Features-details */}
            
                                                <div className="features-details">
                                                    <div className="flex main-featues">
                                                        <div className="features">
                                                            <div className="flex features-ready-to-move">
                                                                <img src={Check} alt="check" className="check-icont"/>
                                                                <p className="whatsapp-text">Ready to move</p>     
                                                            </div>
                                                            <div className="flex features-customer-support">
                                                                <img src={headphn} alt="headphn" className="headphn-icont"/>
                                                                <p className="customer suppor-text">Premium customer support</p>     
                                                            </div>
                                                        </div>
            
                                                        {/* Property Size */}
            
                                                        <div className="flex square-ft">
                                                            <img src={Mask} alt="mask" className="sqrft-icont"/>
                                                            <p className="customer suppor-text">1500.00 square ft</p>
                                                        </div>
                                                    </div>
            
                                                    {/* Property Info */}
                                                    <div className="flex property-info">
                                                        <div className="flex facility">
                                                            <img src={Bed} alt="bed" className="bed-icont"/>
                                                            <p className="customer suppor-text">Bedrooms</p>
                                                        </div>
                                                        <div className="flex facility">
                                                            <img src={Bathrooms} alt="bath" className="bath-icont"/>
                                                            <p className="customer suppor-text">2 Bathrooms</p>
                                                        </div>
                                                        <div className="flex facility">
                                                            <img src={Parking} alt="car" className="car-icont"/>
                                                            <p className="customer suppor-text">Parking available</p>
                                                        </div>
                                                        <div className="flex arrow">
                                                            <img src={RightArrow} alt="arrow" className="arrow-icont"/>
                                                        </div>
                                                    </div>
            
                                                </div>
                                            
                                            
                                            </div>
                                    </div>
                                ))}
            
                            </div>
                        </div>
            
            
            
                                {/* said bar of body property */}
                                
            
            
            
                        <aside className="rigt-said right-said-pos">
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
        

    )
}

export default PropertyCardtwo;