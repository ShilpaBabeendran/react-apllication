// import React from "react";
import React, { useState } from "react";

import "../../Components/PropertyCard/property.css";
// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BiBed, BiBath, BiCar } from "react-icons/bi";
// import { FiExternalLink } from "react-icons/fi";

import Image from "../../assets/iconImages/card-img.png";
// import Rightarrow from "../../assets/iconImages/right.jpg";
// import Leftarrow from "../../assets/iconImages/left.jpg";
import Time from "../../assets/iconImages/time.png";
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
import Filter from "../../assets/iconImages/filter.png"
import Downarrow from "../../assets/iconImages/down-arrow 2.jpg";
import LuxuryApartments from "../../Components/LuxuaryApartment";
// import Map from "../../assets/iconImages/map.png";
import PropertyCardtwo from "../../Components/PropertyCardtwo";
import Pagination from "../../Components/Pagination";

import FooterPage from "../../Components/FooterPage";




const PropertyCard = () => {


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
        <div className=" flex max-width property-body ">

            <div className="property-card-parent d-none d-md-block ">

                {/* propwrty=card-1 */}

                <div className=" flex property-card ">
                    
                    {/* Property Image Section */}


                    <div className="image md:w-1/3 w-full">
                        <img src={Image} alt="Property" className="bg-image w-full h-full object-cover"/>

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





                                <div className="flex detail-font location">
                                    <img src={location} alt="loctin" className="location-icon"/>
                                    <p className="location-text">03B, Sharjag, Dubai, UAE</p>
                                </div>
                                <div className=" flex status">
                                    <div className="for-rent">For Rent</div>
                                    <div className="spacing"></div>
                                    <div className="furnished">Vacant Now</div>
                                    <div className="spacing"></div>
                                    <div className="camera">Atharid Premium</div>
                                    
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
                                        <p className="customer-suppor-text">Premium customer support</p>     
                                    </div>
                                </div>

                                {/* Property Size */}

                                <div className="flex square-ft">
                                    <img src={Mask} alt="mask" className="sqrft-icont"/>
                                    <p className="customer-suppor-text">1800.00 square ft</p>
                                </div>
                            </div>

                            {/* Property Info */}
                            <div className="flex property-info">
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
                                <div className="flex arrow">
                                    <img src={RightArrow} alt="arrow" className="arrow-icont"/>
                                </div>
                            </div>

                        </div>
                    
                    
                    </div>
                </div>











                {/* property card 2 */}

                <div className=" property-card-2 martop2p">

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
                    



            <aside className="rigt-said-bar card-position-arrange d-none d-md-block ">
                <div className="right-said-content">
                    {/* <div className="filter"> */}
                        <div className="flex justify-content-between font-head type-head">    
                            <p className="filter-head">Filter</p>
                            <img src={Filter} alt="filter" className="bafilterth-icont"/>
                        </div>
                        <div className=" custom-checkbox-group">
                            <div class="form-check">
                                <label class="form-check-lable ">Mark already seen </label>
                                {/* <div class="form-check form-switch"> */}
                                    <input class="form-check-input" type="checkbox" id="togglePhotos"/>
                                {/* </div> */}
                            </div>
                            {/* <div className=" flex mtik-mark-on-filterark">
                                <p className="photos">Properties with photos</p>
                                <input type="checkbox" checked={filters.apartmentsOnly} onChange={() => setFilters ({...filters, apartmentsOnly: !filters.apartmentsOnly})} />
                            </div> */}


                            <div class="form-check">
                                <label class="form-check-lable">Properties with photos</label>
                                {/* <div class="form-check form-switch"> */}
                                    <input class="form-check-input" type="checkbox" id="togglePhotos"/>
                                {/* </div> */}
                            </div>
                        </div>
                    {/* </div> */}



                        {/* completion status */}
                    {/* <div className=" font-head type-head"> */}
                        <div className=" flex justify-content-between font-head type-head">
                            <p className="completion">Completion Status</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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
                    <div className=" flex justify-content-between font-head type-head">
                        <p className="completion">Property Type</p>
                        <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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

                    <div className=" flex justify-content-between font-head type-head">
                                <p className="completion">Furnished Status</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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
                    <div className=" flex justify-content-between font-head type-head">
                                <p className="completion">Amenities</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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


                        <div className=" flex justify-content-between font-head type-head">
                                <p className="completion">BHK Facility</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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

                        <div className=" flex justify-content-between font-head type-head">
                                <p className="completion">Bathrooms</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
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











            




        </div>



        {/* mobile view of card */}
                                    
        <div className="card-in-mobile-view" >
            {[...Array(5)].map((_, index) => (
                <div key={index} className=" property-card-mobile w-2/5 relative md:hidden bg-white shadow-lg rounded-lg overflow  d-block d-md-none">
                    <img src={Image} alt="Property" className="bg-image w-full h-full object-cover"/>
                    <div className=" flex image-top-bar absolute top-8 left-2" >
                        <div className=" days    text-white px-2 py">
                            <img src={Time} alt="Property" className="time"/>
                            <p>Listed 5 Days ago</p>
                        </div>
                        <div className="verified  top-2 center-2 text-white px-2 py-1 text-xs rounded">
                            <img src={Verified} alt="Property" className="verified"/>
                            <p>Verified by Athirad</p>
                        </div>
                        <div className="headphone  top-2 right-2 text-white px-2 py-1 text-xs rounded">
                            <img src={headphn} alt="Property" className="headohn"/>
                        </div>
            
                    </div>
        {/* Info */}
                    <div className=" card-title p-4">
                        <h2 className=" title text-xl font-semibold">VILLA 370 MIRA OASIS 1</h2>
                        <div className=" flex price-text">
                            <p className="price">2,50,190 </p>
                            <p className="aed">AED YEARLY</p>
                        </div>
                        <p className=" flex items-center text-600"><img src={location} alt="loctin" className="location-icon"/> 118, Dubailand, Dubai, UAE</p>

                        <div className=" flex status">
                            <div className="for-rent">For Rent</div>
                            <div className="spacing"></div>
                            <div className="furnished">Vacant Now</div>
                            <div className="spacing"></div>
                            <div className="camera">Atharid Premium</div>                        
                        </div>
            {/* Icons */}
                        <div className="flex property-info">
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
                            <div className="flex arrow">
                                <img src={RightArrow} alt="arrow" className="arrow-icont"/>
                            </div>
                        </div>

          {/* Buttons */}
                        <div className="contact-etails">
                            <button className="flex wtsapp">
                                <img src={Whatsapp} alt="Whatsapp" className="Whatsapp-icont"/>
                                <p className="whatsapp-text">WHATAPP</p>
                            </button>   
                        </div>
                    </div>
                </div>
            ))}
        </div>





                        <LuxuryApartments/>


                       <PropertyCardtwo/>

                       <Pagination/>
                       <FooterPage/>
                       
                       
        





   
      
         





              




        

    </>






    
  );
};

export default PropertyCard;
