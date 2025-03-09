



// import React from 'react'

import React, { useState } from "react";
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



// border
    const [isActive, setIsActive] = useState(false);

    const toggleBorder = () => {
        setIsActive(!isActive);
    };


    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };




// pricing drop down

const [priceDropdown, setPriceDropdown] = useState(false);
const togglePriceDropdown = () =>{
    setPriceDropdown (!priceDropdown);
};

// border
    const [ifActive, setClickActive]= useState(false);
    const togglePriceBorder =() =>{
        setClickActive(!ifActive);
    };


const [price, setPrice] = useState(100);

const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };





//   map view







  return(


    
    <>

         
                 <Header/>

                    {/* <div className="container"> */}
        
                    <div className=" nav-container" style={{boxShadow:" 0 4px 2px -2px rgba(98, 97, 97, 0.2);"}}>
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




                        <div className='absolute-center justify-content tab-options'>
                            <div className=' absolute-center buy-or-rent d-none d-md-block'>
                                <div className=' font-family buy-option'>Buy</div>
                                <div className=' font-family absolute-center rent-option'>Rent</div>
                            </div>

                            
                                <div className={` search-property  ${isActive ? "active-border" : ""}`}
                                    onClick={toggleBorder}>
                                    <div className='justify-content search-icon'>
                                        <img className="absolute-center" src={search}  alt="sreach-icon"/>
                                        <input placeholder='Search property ' type='text'/>
                                    </div>
                                    {/* right icon click to show dropdown */}
                                    <div className='input-right-icon' onClick={toggleDropdown}>
                                    <img className="absolute-center d-none d-md-block" src={vector}  alt="input-icon"/>
                                    </div>
                                    {/* <div className="search-property-dropdown-box"> */}
                                    {/* dropdown-box */}
                                    {showDropdown && (
                                        <div className="dropdown-box d-none d-md-block">
                                            <div className="dropdown-item">City, Town, Texas</div>
                                            <div className="dropdown-item">Area</div>
                                            <div className="dropdown-item">Commercial, Rental</div>
                                        </div>
                                    )}
                            
                                </div>

                            <div className= {`absolute-center pricing d-none d-md-block'  ${ifActive ? "active-border" : ""}`}
                                onClick={togglePriceBorder}>
                                <div className='price-text'>Price</div>
                                <div className='down-arrow' onClick={togglePriceDropdown}>
                                    <img className="absolute-center" src={Charecter} alt="downarrow"/>
                                </div>


                                {/* drop-down-box */}
                                {priceDropdown && (
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
                                                <div>Min</div>
                                                <div>Max</div>
                                            </div>
                                            
                                        </div>
                                        <input className="enter-amount" type="number" placeholder="Enter Amount in AED" />
                                    </div>
                                )}
                                
                            </div>
                            <button className='font-family find d-none d-md-block '>Find</button>
                        </div>


                                    {/* properties for rent in UAE */}

                        <div className=" properties-for-rent">
                            <div className="properties">
                                <div className="property-rent">Properties for Rent in United Arab Emirates</div>
                                <div className="listing">10 Listings</div>
                            </div>

                            <div className=" absolute-center mapp-newest">
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


