// import React from "react";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../../Components/PropertCardone/cardone.css";
import 'bootstrap/dist/css/bootstrap.css';


import Image from "../../assets/iconImages/card-img.png";

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
import Filter from "../../assets/iconImages/filter.png"
import Downarrow from "../../assets/iconImages/down-arrow 2.png";
import LuxuryApartments from "../LuxuaryApartment";
import Map from "../../assets/iconImages/map.png"
// import { Pagination } from "react-bootstrap";





const PropertyCardone = () => {


// saide bar

const [selectedOption, setSelectedOption] = useState("Ready");


const [openSections, setOpenSections] = useState({
    completion: true,
    propertyType: true,
    furnished: true,
    amenities: true,
    bhk: true,
    bathrooms: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };








// property card section

// social media buttons

    const [isNormal, setIsNormal] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);




//  button supperate event


    const [activeButtons, setActiveButtons] = useState(Array(4).fill(false));
  const [hoverIcons, setHoverIcons] = useState(Array(4).fill(false));
  const [clickIcons, setClickIcons] = useState(Array(4).fill(false));

  // Function to toggle WhatsApp button state for a specific index
  const toggleWhatsApp = (index, value) => {
    setActiveButtons((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  // Function to toggle Phone icon hover state for a specific index
  const toggleHover = (index, value) => {
    setHoverIcons((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  // Function to toggle Mail icon click state for a specific index
  const toggleClick = (index, value) => {
    setClickIcons((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  return (


    <>

    <div className="toarrangethebody d-flex justify-content-between property-body mt-3  " style={{marginLeft:"5%", marginRight:"5%"}}>
     {/* <div className=" d-flex justify-content-between property-body mt-3 d-none d-md-block " style={{marginLeft:"5%", marginRight:"5%"}}> */}

            <div className= " property-card-parent d-none d-md-block "style={{ width:"72%"}}>

                {/* propwrty=card-1 */}

                <div className=" d-flex rounded-4 property-cardone-body"style={{backgroundColor:"#F1F1F399"}}>
                    
                    {/* Property Image Section */}


                    <div className="col-md-5 position-relative start-1 image">
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
                                <img src={Verified} alt="Property" className="verified-icon"/>Verified by Athirad
                            </div>
                            <div className=" headphone ">
                                <img src={headphn} alt="Property" className="headohn-icon"/>
                            </div>
                        </div>
                    </div>

                                {/* Property Details Section */}
                    <div className="card-details p-4">
                        <div className=" flex top-details">
                            <div className= " details-address">
                                <div className=" title-contact ">
                                    <div className="card-title">
                                        <div className="titile-text">
                                            <p className="title"style={{lineHeight:"0"}}>VILLA 370 MIRA OASIS 1</p>
                                        </div>

                                        {/* buttonnnn */}
                                        <div className="container text-start">
                                            <h2 
                                                style={{ fontWeight: "bold", color: "#FF916E", fontSize: "30px" }}>
                                                2,50,190{" "}
                                                <span style={{fontWeight:"normal", fontSize: "18px", color: "#FF916E" }}>
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
                                            <img src={Whatsapp} alt="Whatsapp" className="me-2 cursor-pointer" /> WHAT’S APP
                                        </button>

                                        {/* Contact Icons */}
                                        <div className="contact-icons">
                                            <div className={`icon-box-card ${isHover ? "pressed" : ""}`}
                                                onMouseDown={() => setIsHover(true)}
                                                onMouseUp={() => setIsHover(false)}
                                                onMouseLeave={() => setIsHover(false)}>
                                                <img src={Phone} alt="phone" className="icon cursor-pointer" />
                                            </div>
                                            <div className={`icon-box-card ${isClick ? "pressed" : ""}`}
                                                onMouseDown={() => setIsClick(true)}
                                                onMouseUp={() => setIsClick(false)}
                                                onMouseLeave={() => setIsClick(false)}>
                                                <img src={Mail} alt="mail" className="icon cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                                
                    

                                <div className="container location">
                                    <div className="d-flex align-items-center">
                                        <img src={location} alt="loctin"  className="text-primary me-2" size={20} />
                                        <span className=" place">03B, Sharjah, Dubai, UAE</span>
                                    </div>
                                </div>


                                <div className=" d-flex status" style={{gap: "1%"}}>
                                    <div className="for">For Rent</div>
                                    <div className="spacing"><div></div></div>
                                    <div className="for">Vacant Now</div>
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
                                    <span className=" fw-bold" style={{color:"#12B2AF"}}>1800.00 square ft</span>
                                </div>
                            </div>

                                {/* Features List */}
                            
                               
                            <div className="d-flex justify-content-between mt-3 properties-facility-available">
                                <div className="d-flex align-items-center  p-1  me-2 facility">
                                    <img src={Bed} alt="bed" className="bi bi-house-door fs-14 me-2"/> 1 Bedroom
                                </div>
                                <div className="d-flex align-items-center me-2 p-1 facility">
                                    <img src={Bathrooms} alt="car"className="bi bi-shower fs-14 me-2"/> 1 Bathroom
                                </div>
                                <div className="d-flex align-items-center p-1 me-2 parking">
                                    <img src={Parking} alt="car"   className="bi bi-car-front fs-14 me-2"/> Parking Available
                                </div>
                                <div className="cursor-pointer">
                                    <img src={RightArrow} alt="arrow"  className="cursor-pointer"/>
                                </div>
                            </div>
                        </div>

                        {/* </div> */}                  
                    
                    </div>
                </div>


                {/* property card 2 */}

                <div className=" property-card-2 martop2p rounded-4  ">

                    {[...Array(4)].map((_, index) => (

                        <div key={index} className=" d-flex rounded-4 mb-2 property-cardtwo-body  " style={{backgroundColor:"#F1F1F399"}}>
                                                
                            {/* Property Image Section */}


                            <div className="col-md-5 position-relative start-0 image">
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
                                        <img src={Verified} alt="Property" className="verified-icon"/>Verified by Athirad
                                    </div>
                                    <div className=" headphone ">
                                        <img src={headphn} alt="Property" className="headohn-icon"/>
                                    </div>
                                </div>
                            </div>

                                        {/* Property Details Section */}
                            <div className="card-details">
                                <div className=" flex top-details">
                                    <div className= " details-address">
                                        <div className=" title-contact ">
                                            <div className="card-title">
                                                <div className="titile-text" style={{lineHeight:"0"}}>
                                                    <p className="title">VILLA 370 MIRA OASIS 1</p>
                                                </div>

                                                {/* buttonnnn */}
                                                <div className="container text-start">
                                                    <h2 
                                                        style={{ fontWeight: "bold", color: "#FF916E", fontSize: "30px" }}>
                                                        2,50,190{" "}
                                                        <span style={{fontWeight:"normal", fontSize: "18px", color: "#FF6347" }}>
                                                        AED YEARLY
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>


                                            <div className="button-container d-flex">
                                                    {/* WhatsApp Button */}
                                                    <div className="button-container d-flex">
                                                        {/* WhatsApp Button */}
                                                        <button
                                                        className={`whatsapp-btn ${activeButtons[index] ? "pressed" : ""}`}
                                                        onMouseDown={() => toggleWhatsApp(index, true)}
                                                        onMouseUp={() => toggleWhatsApp(index, false)}
                                                        onMouseLeave={() => toggleWhatsApp(index, false)}
                                                        >
                                                        <img src={Whatsapp} alt="Whatsapp" className="me-2 cursor-pointer" /> WHAT’S APP
                                                        </button>

                                                        {/* Contact Icons */}
                                                        <div className="contact-icons">
                                                        <div
                                                            className={`icon-box-card ${hoverIcons[index] ? "pressed" : ""}`}
                                                            onMouseDown={() => toggleHover(index, true)}
                                                            onMouseUp={() => toggleHover(index, false)}
                                                            onMouseLeave={() => toggleHover(index, false)}
                                                        >
                                                            <img src={Phone} alt="phone" className="icon cursor-pointer" />
                                                        </div>
                                                        <div
                                                            className={`icon-box-card ${clickIcons[index] ? "pressed" : ""}`}
                                                            onMouseDown={() => toggleClick(index, true)}
                                                            onMouseUp={() => toggleClick(index, false)}
                                                            onMouseLeave={() => toggleClick(index, false)}
                                                        >
                                                            <img src={Mail} alt="mail" className="icon cursor-pointer" />
                                                        </div>
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


                                        <div className=" d-flex status"style={{gap: "1%"}}>
                                            <div className="for">For Rent</div>
                                            <div className="spacing"></div>
                                            <div className="for">Furnished</div>
                                            <div className="spacing"></div>
                                            <div className="for">Atharid Premium</div>
                                            <div className="spacing"></div>
                                            <div className="for">Gas Pipeline</div>
                                            
                                            
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
                                        <div className="d-flex align-items-center p-1 me-2 facility">
                                            <img src={Bed} alt="bed" className="bi bi-house-door fs-4 me-2"/> 1 Bedroom
                                        </div>
                                        <div className="d-flex align-items-center p-1 me-2 facility">
                                            <img src={Bathrooms} alt="car"className="bi bi-shower fs-4 me-2"/> 1 Bathroom
                                        </div>
                                        <div className="d-flex align-items-center p-1 me-2 parking">
                                            <img src={Parking} alt="car"   className="bi bi-car-front fs-4 me-2"/> Parking Available
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={RightArrow} alt="arrow"  className="cursor=pointer"/>
                                        </div>
                                    </div>
                                </div>

                                {/* </div> */}


                            </div>
                        </div>
                    ))}

                </div>
            </div>

       



                    {/* said bar of body property */}
                    

            <aside className="card-position-arrange d-none d-md-block rounded-4 p-3" style={{ backgroundColor: "#F1F1F399", width: "27%" }}>
                <div className="d-flex justify-content-between font-head type-head">
                    <p className="fw-bold fs-16 p-3">Filter</p>
                    <img src={Filter} alt="filter" className="bafilterth-icont p-4"/>
                </div>

                <div className="custom-checkbox-group p-3 ">
                    {/* Mark Already Seen */}
                    <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="seen" className="fs-14">Mark already seen</label>
                        <Form.Check id="seen" type="switch" className="m-0" />
                    </div>

                    {/* Properties with Photos */}
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <label htmlFor="photos" className="fs-14">Properties with photos</label>
                        <Form.Check id="photos" type="switch" className="m-0" />
                    </div>
                </div>

                {/* <div className="completion-status p-3 "> */}
                    <div className="d-flex justify-content-between align-items-center font-head type-head">
                        <p className="fw-bold mb-0 p-3">Completion Status</p>
                        <img src={Downarrow} alt="arrow cursor-pointer" />
                    </div>
                
                    <div className="custom-radio-group">
                        <Form.Check
                        type="radio"
                        name="completionStatus"
                        id="ready"
                        label="Ready"
                        value="Ready"
                        checked={selectedOption === "Ready"}
                        onChange={() => setSelectedOption("Ready")}
                        className="custom-radio mt-3 "
                        />
                        <Form.Check
                        type="radio"
                        name="completionStatus "
                        id="offPlan"
                        label="Off-Plan"
                        value="Off-Plan"
                        checked={selectedOption === "Off-Plan"}
                        onChange={() => setSelectedOption("Off-Plan")}
                        className="custom-radio"
                        />
                    </div>
                {/* </div> */}

                {/* Collapsible Sections */}
                {[
                    { label: "Property Type", key: "propertyType", options: ["Premium", "Apartments", "Ready to move", "Individual Homes", "Townhouse", "Penthouse"] },
                    { label: "Furnished Status", key: "furnished", options: ["Furnished", "SemiFurnished", "Unfurnished"] },
                    { label: "Amenities", key: "amenities", options: ["Parking Facility", "Gas Pipeline", "Security", "Lift Facility", "Power backup"] },
                    { label: "BHK Facility", key: "bhk", options: ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Studio"] },
                    { label: "Bathrooms", key: "bathrooms", options: ["1", "2", "3"] },
                ].map(({ label, key, options, type = "checkbox", name }) => (
                    <div key={key} className="custom-radio-group">
                    <div className="d-flex justify-content-between align-items-center font-head mt-3 type-head">
                        <p className="fw-bold mb-0 p-3">{label}</p>
                        <img src={Downarrow} alt="arrow"
                        className="cursor-pointer "
                        onClick={() => toggleSection(key)}
                        />
                    </div>
                    {openSections[key] && (
                        <div className="custom-check-group">
                        {options.map((option, idx) => (
                            <Form.Check
                            key={idx}
                            type={type}
                            name={name}
                            id={`${key}-${option}`}
                            label={option}
                            className=" mt-2 "
                            />
                        ))}
                        </div>
                    )}
                    </div>
                ))}
                </aside>



        {/* </div> */}
    </div>



        {/* mobile view of card */}
                                    
        {/* mobile view of card */}
                                    
        <div className=" property-card-2 martop2p d-block d-md-none "style={{backgroundColor:"#F1F1F399"}}>

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
                                    <div className="cursor=pointer">
                                        <img src={RightArrow} alt="arrow"  className="cursor=pointer"/>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}


                        </div>
                        <div className="d-flex align-items-center ">
                            <img src={Mask} alt="check" className="text-info" />
                            <span className=" fw-bold" style={{color:"#12B2AF"}}>1500.00 square ft</span>
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
                ))}

            </div>




                        
                       
                       
        





   



            <LuxuryApartments/>




            <div className=" d-flex justify-content-between property-body crdsecond  " style={{marginLeft:"5%", marginRight:"5%"}}>

            <div className=" property-card-2 martop2p rounded-4  ">

                    {[...Array(4)].map((_, index) => (

                        <div key={index} className=" d-flex rounded-4 mb-2 property-cardtwo-body  " style={{backgroundColor:"#F1F1F399"}}>
                                                
                            {/* Property Image Section */}


                            <div className="col-md-5 position-relative start-0   image">
                                <img
                                    src={Image}
                                    alt="Property"
                                    className="img-fluid w-80 "
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <div  className="img-top-bar d-flex  ">
                                    <div className="days  ">
                                        <img src={Time} alt="Property" className="time"/> Listed 5 Days ago
                                    </div>
                                    <div className="verified ">
                                        <img src={Verified} alt="Property w-2" className="verified-icon"/>Verified by Athirad
                                    </div>
                                    <div className=" headphone ">
                                        <img src={headphn} alt="Property" className="headohn-icon"/>
                                    </div>
                                </div>
                            </div>

                                        {/* Property Details Section */}
                            <div className="card-details">
                                <div className=" flex top-details">
                                    <div className= " details-address">
                                        <div className=" title-contact ">
                                            <div className="card-title">
                                                <div className="titile-text" style={{lineHeight:"0"}}>
                                                    <p className="title">VILLA 370 MIRA OASIS 1</p>
                                                </div>

                                                {/* buttonnnn */}
                                                <div className="container text-start">
                                                    <h2 
                                                        style={{ fontWeight: "bold", color: "#FF916E", fontSize: "30px" }}>
                                                        2,50,190{" "}
                                                        <span style={{fontWeight:"normal", fontSize: "18px", color: "#FF6347" }}>
                                                        AED YEARLY
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>


                                            <div className="button-container d-flex">
                                                    {/* WhatsApp Button */}
                                                    <div className="button-container d-flex">
                                                        {/* WhatsApp Button */}
                                                        <button
                                                        className={`whatsapp-btn ${activeButtons[index] ? "pressed" : ""}`}
                                                        onMouseDown={() => toggleWhatsApp(index, true)}
                                                        onMouseUp={() => toggleWhatsApp(index, false)}
                                                        onMouseLeave={() => toggleWhatsApp(index, false)}
                                                        >
                                                        <img src={Whatsapp} alt="Whatsapp" className="me-2 cursor-pointer" /> WHAT’S APP
                                                        </button>

                                                        {/* Contact Icons */}
                                                        <div className="contact-icons">
                                                        <div
                                                            className={`icon-box-card ${hoverIcons[index] ? "pressed" : ""}`}
                                                            onMouseDown={() => toggleHover(index, true)}
                                                            onMouseUp={() => toggleHover(index, false)}
                                                            onMouseLeave={() => toggleHover(index, false)}
                                                        >
                                                            <img src={Phone} alt="phone" className="icon cursor-pointer" />
                                                        </div>
                                                        <div
                                                            className={`icon-box-card ${clickIcons[index] ? "pressed" : ""}`}
                                                            onMouseDown={() => toggleClick(index, true)}
                                                            onMouseUp={() => toggleClick(index, false)}
                                                            onMouseLeave={() => toggleClick(index, false)}
                                                        >
                                                            <img src={Mail} alt="mail" className="icon cursor-pointer" />
                                                        </div>
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


                                        <div className=" d-flex status"style={{gap: "1%"}}>
                                            <div className="for">For Rent</div>
                                            <div className="spacing"></div>
                                            <div className="for">Furnished</div>
                                            <div className="spacing"></div>
                                            <div className="for">Atharid Premium</div>
                                            <div className="spacing"></div>
                                            <div className="for">Gas Pipeline</div>
                                            
                                            
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
                                        <div className="d-flex align-items-center p-1 me-2 facility">
                                            <img src={Bed} alt="bed" className="bi bi-house-door fs-4 me-2"/> 1 Bedroom
                                        </div>
                                        <div className="d-flex align-items-center p-1 me-2 facility">
                                            <img src={Bathrooms} alt="car"className="bi bi-shower fs-4 me-2"/> 1 Bathroom
                                        </div>
                                        <div className="d-flex align-items-center p-1 me-2 parking">
                                            <img src={Parking} alt="car"   className="bi bi-car-front fs-4 me-2"/> Parking Available
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={RightArrow} alt="arrow"  className="cursor=pointer"/>
                                        </div>
                                    </div>
                                </div>

                                {/* </div> */}


                            </div>
                        </div>
                    ))}

                </div>
{/* </div> */}


                    <aside className="rigt-said   d-flex-column justify-content-center d-none d-md-block">
                            <div className="said-content">
                                         
                                <div className="said-content">
                                    <p className="support-map">Map support</p>
                                    <p className="para-map">Use our map support to find the property</p>
                                </div>
                                <div className="content-img d-f-c justify-content- center">
                                    <img src={Map} className="map-img"/>
                                </div>
                                <div className="content-btn">
                                    Explore
                                </div>
                                 
                            </div>
                        </aside>




 </div>






   
      





              




        

    </>






    
  );
};

export default PropertyCardone;
