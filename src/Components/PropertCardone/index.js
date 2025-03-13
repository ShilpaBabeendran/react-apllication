// import React from "react";
import React, { useState } from "react";

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

    const [isNormal, setIsNormal] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);


    const [isPressed, setIsPressed] = useState(false);
        const [filters, setFilters] = useState({
            premiumType: false,
            apartmentsOnly: false,
            readyMove: false,
            individualHome: false,
            TownHouse: false,
            rentHouse: false,
            furnishedProperty: false,
            semiFurnished: false,
            unFurnished: false,
            parkingFacility: false,
            securityFacility: false,
            gasPipeline: false,
            liftFacility: false,
            powerBackup: false,
            oneBhk: false,
            twoBhk: false,
            threeBhk: false,
            fourBhk: false,
            fiveBhk: false,
            studioFacility: false,
            completionStatus: "ready",
            propertyType: [],
            furnishedStatus: "furnished",
            amenities: [],
            bhkFacility: []
        });


  return (


    <>

    <div className="toarrangethebody d-flex justify-content-between property-body mt-3 " style={{marginLeft:"5%", marginRight:"5%"}}>
     {/* <div className=" d-flex justify-content-between property-body mt-3 d-none d-md-block " style={{marginLeft:"5%", marginRight:"5%"}}> */}

            <div className= " property-card-parent d-none d-md-block rounded-4 "style={{backgroundColor:"#F1F1F399", width:"72%"}}>

                {/* propwrty=card-1 */}

                <div className=" d-flex   property-card ">
                    
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
                                            <div className={`icon-box-card ${isHover ? "pressed" : ""}`}
                                                onMouseDown={() => setIsHover(true)}
                                                onMouseUp={() => setIsHover(false)}
                                                onMouseLeave={() => setIsHover(false)}>
                                                <img src={Phone} alt="phone" className="icon" />
                                            </div>
                                            <div className={`icon-box-card ${isClick ? "pressed" : ""}`}
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
                                        <span className=" place">03B, Sharjah, Dubai, UAE</span>
                                    </div>
                                </div>


                                <div className=" d-flex status">
                                    <div className="for">For Rent</div>
                                    <div className="spacing"></div>
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











                {/* property card 2 */}

                <div className=" property-card-2 martop2p "style={{backgroundColor:"#F1F1F399"}}>

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
            </div>

       



                    {/* said bar of body property */}
                    



            <aside className="rigt-said-bar card-position-arrange d-none d-md-block rounded-4 " style={{backgroundColor:"#F1F1F399",width:"27%"}}>
                <div className="right-said-content">
                    {/* <div className="filter"> */}
                    <div className=" d-flex justify-content-between g-3 font-head type-head">    
                        <p className="filter-head">Filter</p>
                        <img src={Filter} alt="filter" className="bafilterth-icont p-2" size={20}/>
                    </div>
                    <div className=" custom-checkbox-group">
                        <div class="d-flex justify-content-between  form-check">
                            <label class="form-check-lable ">Mark already seen </label>
                            <div class="form-check form-switch">
                                <input class="form-check-input"  type="checkbox" role="switch"/>
                            </div>
                        </div>
                            


                        <div class="d-flex justify-content-between  form-check">
                            <label class="form-check-lable">Properties with photos</label>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch"/>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}



                        {/* completion status */}
                        {/* <div className=" font-head type-head"> */}
                    <div className=" d-flex justify-content-between font-head type-head">
                        <p className="completion">Completion Status</p>
                        <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                    </div>
                    <div className=" custom-checkbox-group">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="propertyStatus" id="ready" checked/>
                            <label class="form-check-label" for="ready">Ready</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="propertyStatus" id="offPlan"/>
                            <label class="form-check-label" for="offPlan">Off-Plan</label>
                        </div>
                    </div>
                    {/* </div> */}




                    



                    {/* property type */}
                    <div className=" d-flex justify-content-between font-head type-head">
                        <p className="completion">Property Type</p>
                        <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                    </div>
                    <div class="custom-checkbox-group">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="premium" checked/>
                            <label class="form-check-label" for="premium">Premium</label>
                        </div>

                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="apartments"/>
                            <label class="form-check-label" for="apartments">Apartments</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="readyToMove"/>
                            <label class="form-check-label" for="readyToMove">Ready to move</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="individualHomes"/>
                            <label class="form-check-label" for="individualHomes">Individual Homes</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="townhouse"/>
                            <label class="form-check-label" for="townhouse">Townhouse</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="penthouse"/>
                            <label class="form-check-label" for="penthouse">Penthouse</label>
                        </div>
                    </div>


                    {/* furnished */}

                    <div className=" d-flex justify-content-between font-head type-head">
                        <p className="completion">Furnished Status</p>
                        <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                    </div>
                    <div class="custom-checkbox-group">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="premium" checked/>
                            <label class="form-check-label" for="premium">Furnished</label>
                        </div>

                                
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="apartments"/>
                            <label class="form-check-label" for="apartments">SemiFurnishe</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="readyToMove"/>
                            <label class="form-check-label" for="readyToMove"> Unfurnished</label>
                        </div>

                    </div>


                    {/* amenities */}

                    {/* <div className="property-type"> */}
                    <div className=" d-flex justify-content-between font-head type-head">
                        <p className="completion">Amenities</p>
                        <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                    </div>
                    <div class="custom-checkbox-group">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="premium" checked/>
                            <label class="form-check-label" for="premium">Parking Fcility</label>
                        </div>

                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="apartments"/>
                            <label class="form-check-label" for="apartments">Gas Pipeline</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="readyToMove"/>
                            <label class="form-check-label" for="readyToMove">Security </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="individualHomes"/>
                            <label class="form-check-label" for="individualHomes">Lift Facility</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="townhouse"/>
                            <label class="form-check-label" for="townhouse">Power backup</label>
                        </div>

                    </div>


                        {/* BHK facility */}


                        <div className=" d-flex justify-content-between font-head type-head">
                            <p className="completion">BHK Facility</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                        </div>
                        <div class="custom-checkbox-group">
                            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="premium" checked/>
                                <label class="form-check-label" for="premium">1BHK</label>
                            </div>

                            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="apartments"/>
                                <label class="form-check-label" for="apartments">2BHK</label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="readyToMove"/>
                                <label class="form-check-label" for="readyToMove">3BHK </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="individualHomes"/>
                                <label class="form-check-label" for="individualHomes">4BHK</label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="townhouse"/>
                                <label class="form-check-label" for="townhouse">5BHK</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="townhouse"/>
                                <label class="form-check-label" for="townhouse">Studio</label>
                            </div>

                        </div>


                        {/* bathrooms */}

                        <div className=" d-flex justify-content-between font-head type-head">
                                <p className="completion">Bathrooms</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont p-3" size={20}/>
                            </div>
                            <div class="custom-checkbox-group">
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="premium" checked/>
                                    <label class="form-check-label" for="premium">1</label>
                                </div>

                                
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="apartments"/>
                                    <label class="form-check-label" for="apartments">2</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="readyToMove"/>
                                    <label class="form-check-label" for="readyToMove">3 </label>
                                </div>
                            </div>

                    {/* </div> */}


                </div>
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
                                    <div className="">
                                        <img src={RightArrow} alt="arrow"  className=""/>
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

            <div className="  rounded-3 "style={{backgroundColor:"#F1F1F399"}}>

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
