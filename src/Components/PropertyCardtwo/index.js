import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "../../Components/PropertyCardtwo/card.css";
// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BiBed, BiBath, BiCar } from "react-icons/bi";
// import { FiExternalLink } from "react-icons/fi";

import Image from "../../assets/iconImages/card-img.png";
// import Rightarrow from "../../assets/iconImages/right.jpg";
// import Leftarrow from "../../assets/iconImages/left.jpg";
import Time from "../../assets/iconImages/time.png";
import headphn from "../../assets/iconImages/headphn.png";
import Verified from "../../assets/iconImages/check.png";
import location from "../../assets/iconImages/location.png";
import Whatsapp from "../../assets/iconImages/wtsap.png";
import Mail from "../../assets/iconImages/mail.png";
import Phone from "../../assets/iconImages/phone.png";
import Check from "../../assets/iconImages/check.png";
import Mask from "../../assets/iconImages/mask.png";
import Bed from "../../assets/iconImages/bed.png";
import Bathrooms from "../../assets/iconImages/bathroom.png";
import Parking from "../../assets/iconImages/parking.png";
import RightArrow from "../../assets/iconImages/right-arrow.png";
// import Filter from "../../assets/iconImages/filter.png"
// import Downarrow from "../../assets/iconImages/down-arrow 2.png";
// import Filter from "../../assets/iconImages/filter.png"
// import Downarrow from "../../assets/iconImages/down-arrow 2.jpg";
// import LuxuryApartments from "../LuxuaryApartment";
import Map from "../../assets/iconImages/map.png";
// import Pagination from "../Pagination";


const PropertyCardtwo = () => {
    return (

        // <div>

            <div className=" flex max-width property-body mt-15px ">
            
                <div className="property-card-parent d-none d-md-block">

                
                    {/* property card 2 */}
    
                    <div className=" property-card-2 martop2p">

                        {[...Array(4)].map((_, index) => (

                            <div key={index} className=" flex property-card">
                            

                                {/* Property Image Section */}


                                <div className="image">
                                <img src={Image} alt="Property" className="bg-image" style={{width:"100%"}}/>

                                        {/* Overlay Badges */}
                                        <div className=" flex image-top-bar" >
                                            <div className=" flex text-center days w-5/12 p-3.5 rounded-l-lg bg-[#00000070] flex items-c">
                                                <div className="imgText "style={{alignItems:"center"}}><img src={Time} alt="Property" className="verified-img "  />  </div>
                                                <div><p>Listed 5 Days ago</p></div>
                                            </div>
                                            <div className="flex verified">
                                            <div><img src={Verified} alt="Property" className="verified-img"/></div>
                                                <div><p>Verified by Athirad</p></div>
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
                                                        <p className="title">VILLA 370 MIRA OASIS 1</p>
                                                    </div>
                                                    <div className=" flex price-text">
                                                        <h1 className="price">2,50,190 </h1>
                                                        <p className="aed">AED YEARLY</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex gap-1 justify-content-center align-items-center p-4">
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


                                            <div className="flex detail-font location">
                                                    <img src={location} alt="loctin" className="location-icon"/>
                                                    <p className="location-text">03B, Sharjag, Dubai, UAE</p>
                                                </div>
                                                <div className=" flex status">
                                                    <div className="for-rent">For Rent</div>
                                                    <div className="spacing"></div>
                                                    <div className="furnished">Furnished</div>
                                                    <div className="spacing"></div>
                                                    <div className="camera">Security Camera</div>
                                                    <div className="spacing"></div>
                                                    <div className="camera">Gas Pipeline</div>
                                                    
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
                                                    <img src={headphn} alt="headphn" className="headphn"/>
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
                                            {/* <div className="flex arrow"> */}
                                                <img src={RightArrow} alt="arrow" className="arrow-icont"/>
                                            {/* </div> */}
                                        </div>

                                    </div>
                                
                                
                                </div>
                        </div>
                    ))}

                </div>
                        </div>
            
            
            
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
                    // </div>
                ))}
            </div>




                        

                        



                        
            
        </div>
        

    )
}

export default PropertyCardtwo;