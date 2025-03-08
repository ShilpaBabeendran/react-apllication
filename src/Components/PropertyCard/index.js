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
        <div className=" flex max-width property-body">

            <div className="property-card-parent ">

                {/* propwrty=card-1 */}

                <div className=" flex property-card">
                    
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
                                        <p className="customer suppor-text">Premium customer support</p>     
                                    </div>
                                </div>

                                {/* Property Size */}

                                <div className="flex square-ft">
                                    <img src={Mask} alt="mask" className="sqrft-icont"/>
                                    <p className="customer suppor-text">1800.00 square ft</p>
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
                    



            <aside className="rigt-said-bar card-position-arrange ">
                <div className="right-said-content">
                    <div className="filter">
                        <div className="flex font-head filter-head">    
                            <p className="filter-head">Filter</p>
                            <img src={Filter} alt="filter" className="bafilterth-icont"/>
                        </div>
                        <div className=" font-family filter-body">
                            <div className=" flex mark">
                                <p className="mark">Mark already seen</p>
                                <input type="checkbox" checked={filters.premiumType} onChange={() => setFilters({...filters, mpremiumTypearkSeen: !filters.premiumType})} />
                            </div>
                            <div className=" flex mark">
                                <p className="photos">Properties with photos</p>
                                <input type="checkbox" checked={filters.apartmentsOnly} onChange={() => setFilters({...filters, apartmentsOnly: !filters.apartmentsOnly})} />
                            </div>
                        </div>
                    </div>

                        {/* completion status */}
                    <div className="completion-status">
                        <div className=" flex font-head completion-head">
                            <p className="completion">Completion Status</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                        </div>
                        <div className=" font-family completion-body">
                            <div className="flex body-ready">
                                <input type="radio" name="completion" checked={filters.completionStatus === "ready"} onChange={() => setFilters({...filters, completionStatus: "ready"})} />    
                                <p className="ready">Ready</p>
                            </div>
                            <div className="flex body-ready">
                                <input type="radio" name="completion" checked={filters.completionStatus === "offplan"} onChange={() => setFilters({...filters, completionStatus: "offplan"})} />
                                <p className="off-pln">Off-Plan</p>
                            </div>
                        </div>
                    </div>


                    {/* property type */}
                    <div className="property-type">
                        <div className="flex font-head type-head">    
                            <p className="head-p">Property-Type</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                        </div>
                        <div className=" font-family type-body">
                            <div className=" property-check-box">
                                <input type="checkbox" checked={filters.premiumType} onChange={() => setFilters({...filters, premiumType: !filters.premiumType})} />
                                <p className="check-text">Premium</p>
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.apartmentsOnly} onChange={() => setFilters({...filters, apartmentsOnly: !filters.apartmentsOnly})} />
                                <p className="check-text">Apartments</p>                       
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.readyMove} onChange={() => setFilters({...filters, readyMove: !filters.readyMove})} />
                                <p className="check-text">Ready to Move</p>                      
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.individualHome} onChange={() => setFilters({...filters, individualHome: !filters.individualHome})} />
                                <p className="check-text">Individual Home</p>                     
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.TownHouse} onChange={() => setFilters({...filters, TownHouse: !filters.TownHouse})} />
                                <p className="check-text">Town House</p>                           
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.rentHouse} onChange={() => setFilters({...filters, rentHouse: !filters.rentHouse})} />
                                <p className="check-text">Rent House</p>                          
                            </div>
                        </div>
                    </div>


                    {/* furnished */}

                    <div className="property-type">
                        <div className="flex font-head type-head">    
                            <p className="head-p">Furnished Status</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                        </div>
                        <div className=" font-family type-body">
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.furnishedProperty} onChange={() => setFilters({...filters, furnishedProperty: !filters.furnishedProperty})} />
                                <p className="check-text">Furnished</p>                         
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.smiFurnished} onChange={() => setFilters({...filters, apartmentsOnly: !filters.apartmentsOnly})} />
                                <p className="check-text">Semi-Furnished</p>                         
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.unFurnished} onChange={() => setFilters({...filters, unFurnished: !filters.unFurnished})} />
                                <p className="check-text">UnFurnished</p>                 
                            </div>
                        </div>
                    </div>


                    {/* amenities */}

                    <div className="property-type">
                        <div className="flex font-head type-head">    
                            <p className="head-p">Amenities</p>
                            <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                        </div>
                        <div className=" font-family type-body">
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.parkingFacility} onChange={() => setFilters({...filters, parkingFacility: !filters.parkingFacility})} />
                                <p className="check-text">Parking Facitity</p>         
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.securityStatus} onChange={() => setFilters({...filters, securityStatus: !filters.securityStatus})} />
                                <p className="check-text">Security</p>            
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.gasPipeline} onChange={() => setFilters({...filters, gasPipeline: !filters.gasPipeline})} />
                                <p className="check-text">Gad Pipeline</p>           
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.liftFacility} onChange={() => setFilters({...filters, liftFacility: !filters.liftFacility})} />
                                <p className="check-text">Lift Facity</p>           
                            </div>
                            <div className="property-check-box">
                                <input type="checkbox" checked={filters.powerBackup} onChange={() => setFilters({...filters, powerBackup: !filters.powerBackup})} />
                                <p className="check-text">Power Backup</p>                     
                            </div>
                        </div>


                        {/* BHK facility */}


                        <div className="property-type">
                            <div className=" flex font-head type-head">    
                                <p className="head-p">BHK Facility</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                            </div>
                            <div className="font-family type-body">
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.oneBhk} onChange={() => setFilters({...filters, oneBhk: !filters.oneBhk})} />
                                    <p className="check-text">1BHK </p>        
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.twoBhk} onChange={() => setFilters({...filters, twoBhk: !filters.twoBhk})} />
                                    <p className="check-text">2BHK</p>                 
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.threeBhk} onChange={() => setFilters({...filters, threeBhk: !filters.threeBhk})} />
                                    <p className="check-text">3BHK</p>         
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.fourBhk} onChange={() => setFilters({...filters, fourBhk: !filters.fourBhk})} />
                                    <p className="check-text">4BHK</p>             
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.fiveBhk} onChange={() => setFilters({...filters, fiveBhk: !filters.fiveBhk})} />
                                    <p className="check-text">5BHK</p>                                    
                              </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.studioFacility} onChange={() => setFilters({...filters, studioFacility: !filters.studioFacility})} />
                                    <p className="check-text">Studio</p>       
                                </div>
                            </div>
                        </div>


                        {/* bathrooms */}

                        <div className="property-type">
                            <div className="flex font-head type-head">    
                                <p className="head-p">Bathrooms</p>
                                <img src={Downarrow} alt="arrow" className="arrow-icont"/>
                            </div>
                            <div className="font-family type-body">
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.premiumType} onChange={() => setFilters({...filters, premiumType: !filters.premiumType})} />
                                    <p className="check-text">1</p>                              
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.apartmentsOnly} onChange={() => setFilters({...filters, apartmentsOnly: !filters.apartmentsOnly})} />
                                    <p className="check-text">2</p>
                                </div>
                                <div className="property-check-box">
                                    <input type="checkbox" checked={filters.readyMove} onChange={() => setFilters({...filters, readyMove: !filters.readyMove})} />
                                    <p className="check-text">3</p>                       
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </aside>











            




        </div>



                        <LuxuryApartments/>


                       <PropertyCardtwo/>

                       <Pagination/>
                       <FooterPage/>
                       
                       
        










        

    </>






    
  );
};

export default PropertyCard;
