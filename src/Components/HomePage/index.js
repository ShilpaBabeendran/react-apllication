



// import React from 'react'

import React, { useState } from "react";
// import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button, Dropdown, DropdownButton, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { FaSearch, FaCompass } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
// import "./commonClass.css"; 
// import HomePage from "../HomePage";
// import Header from "../Header";
import "../../Components/HomePage/home.css";
import PropertyCard from "../PropertyCard";

import search from "../../assets/iconImages/search.jpg";
import vector from "../../assets/iconImages/Vector.jpg";
import Charecter from "../../assets/iconImages/down-arrow 2.jpg";
import Switch from "../../assets/iconImages/Switch.jpg";
import Header from "../Header";

import Commercial from "../../assets/iconImages/commercial.png";
import City from "../../assets/iconImages/city.png";
import Area from "../../assets/iconImages/area.png";


// import { Form, InputGroup, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";
// import { FaSearch, FaCompass } from "react-icons/fa";


// import Image from "../../assets/iconImages/card-img.png";
// import Wtsap from "../../assets/iconImages/wtsap.jpg";
// import phone from "../../assets/iconImages/phone.jpg";
// import Mail from "../../assets/iconImages/mail.jpg";
// import "../../assets/iconImages/arrow-right.png"




// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BiBed, BiBath, BiCar } from "react-icons/bi";
// import { FiExternalLink } from "react-icons/fi";
// import LuxuryApartments from "../LuxuaryApartment";




// // import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; 
// import { Navigation, Pagination } from "swiper/modules"; 

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";






const HomePage = ()=>{

// new

// const [activeTab, setActiveTab] = useState("Rent");
// const [isExpanded, setIsExpanded] = useState(false);

const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };




// pricing drop down

const [priceDropdown, setPriceDropdown] = useState(false);
const togglePriceDropdown = () =>{
    setPriceDropdown (!priceDropdown);
};

// // border
    const [ifActive, setClickActive]= useState(false);
    const togglePriceBorder =() =>{
        setClickActive(!ifActive);
    };


const [price, setPrice] = useState(0);

const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };





//   map view







  return(


    
    <>

         
                 <Header/>

        {/* navigation bar */}
        
                    <div className=" nav-container d-none d-md-block">
                        <div className=" max-width nav">
                            <div className=' nav-child-abc'>
                                <div className='abc-child'>
                                    <p className="">ABC</p>
                                    <p className="">PROPERTIES</p>
                                </div>
                                <p className='real-estate'>Your Perfect Real Estate Partner</p>
                            </div>
                            <div className=' nav-child-menu'>
                                {/* <div className='  buy-rent'> */}
                                    <p className="">Buy</p>
                                    <p className='rent' style={{color:"#F4835F"}}>Rent</p>
                                {/* </div> */}
                                <div className=' empty-div'style={{ backgroundColor: "#CBCBCB", padding : "1px", borderRadius:"2px", height:"30px", width: "2px" }}></div>
                                    <p className=""> Navigators Edge </p>
                                    <p className=""> Our Agent</p>
                                    <p className="">Blogs & Insights</p>
                                    <p className="">New Launges</p>
                                    <p className="">About Us</p>
                                    <p className="">Help & Support</p>
                                
                            </div>
                            <div className='nav-child-btn'>Sell Property</div>
                        </div>
                    </div>
                         {/* </div> */}


        {/* tab-options */}

                    <div className='max-width tab-options '>
                       
                        {/* buy or rent option button */}

                        <div class="rent-and-buy d-none d-md-block ">
                            <div class="toggle-container d-flex">                              
                                <button class="toggle-btn">Rent</button>
                                <button class="toggle-btn active">Buy</button>
                            </div>
                        </div>


                     {/*search input ....................  */}
                     <div className="search-container">
                            <div
                                className={`search-box ${isExpanded ? "expanded" : ""}`}
                                onClick={toggleDropdown}
                            >
                                <img src={search} alt="search" className="search-icon" />
                                <input
                                type="text"
                                placeholder="Search property"
                                className="search-input"
                                readOnly
                                />
                                
                            </div>
                            <img src={vector} alt="vector" className="search-icon" />



                            



                            {isExpanded && (
                                <div className="dropdown-content">
                                    <div className="dropdown-item">
                                        <p><img src={City} alt="city" className="icon" /> City, Towns, Texas</p>
                                    </div>
                                    <div className="dropdown-item">                                
                                         <p><img src={Area} alt="area" className="icon" /> Areas</p>                                    
                                    </div>
                                    <div className="dropdown-item">                                 
                                        <p><img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental</p>
                                    </div>
                                </div>
                            )}
                        </div>




        

                     {/* pricing............ */}
                        <div className="price-filter-container d-none d-md-block">
                                {/* <div className= "pricing-input"> */}
                                        <div className={` 'pricing-property '  ${ifActive ? "active-border" : ""}`}
                                            onClick={togglePriceBorder}>
                                            <div className='price-text'>Price</div>
                                            <div className='down-arrow' >
                                                <img className="down-arrow" src={Charecter} alt="downarrow" onClick={togglePriceDropdown}/>
                                            </div>
                                        </div>
                                {/* </div> */}


                            {/* drop-down-box */}
                            {ifActive && (
                                <div className="pricing-drop-down">
                                    <h3>{price}</h3> {/* Display the current price */}
                
                                    {/* Min and Max Range Sliders */}
                                    <div className="range-slider">
                                        <input
                                            type="range"
                                            min="0"
                                            max="750000"
                                            value={price}
                                            onChange={handlePriceChange}
                                        />
                                        {/* Display Values */}
                                        <div className="price-values">
                                            <p>Min</p>
                                            <p>Max</p>
                                        </div>
                                        
                                    </div>
                                    <input className="price-input" type="number" placeholder="Enter Amount in AED" />
                                </div>
                            )}

                    
                            
                        </div>
                        <button className='font-family find d-none d-md-block '>Find</button>
                    </div>

                    {/* Price Dropdown */}
 
                                    {/* properties for rent in UAE */}

                        <div className=".max-width mrleft-2 properties-for-rent">
                            <div className="properties">
                                <div className="property-rent">Properties for Rent in United Arab Emirates</div>
                                <div className="listing">10 Listings</div>
                            </div>
                             
                             <div className=" absolute-center map-view ">
                                <div className="absolute-center mapp flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer shadow-sm bg-white w-48 h-12">
                                    <p>Mapp View </p>
                                    <img className="absolute-center" src={Switch} alt="change"/>
                                </div>
                                <div className="absolute-center newest">
                                    <p>Newest First</p>
                                    <img className="absolute-center" src={Charecter} alt="down-arrow"/>
                                </div>
                            </div>

                            
                               
                                
                            
                        </div>



                <PropertyCard/>

                    

                    



                    


        


                

                





        



    






        

            
        
        
    </>
    

   

 


  )

}
export default HomePage;


