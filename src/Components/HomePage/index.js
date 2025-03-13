



// // import React from 'react'

import React, { useState } from "react";
import Header from "../Header";
import HeaderMain from "../HeaderMain";
import TabOptions from "../TabeOptions";
import BodyHead from "../BodyHead";
import PropertyCardone from "../PropertCardone";
import LuxuryApartments from "../LuxuaryApartment";
import PropertyCardtwo from "../PropertyCardtwo";
import Pagination from "../Pagination";
import Footer from "../FooterPage";
// import { Pagination } from "react-bootstrap";
// import "../styles/commonClasses.css";

// import React, { useState, useRef, useEffect } from "react";

// // import { FaSearch, FaCompass } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.css';

// import "../../Components/HomePage/home.css";
//  import PropertyCard from "../PropertyCard";

// import search from "../../assets/iconImages/search.jpg";
// import vector from "../../assets/iconImages/Vector.jpg";
// import Charecter from "../../assets/iconImages/down-arrow 2.jpg";
// import Switch from "../../assets/iconImages/Switch.jpg";
// import Header from "../Header";

// import Commercial from "../../assets/iconImages/commercial.png";
// import City from "../../assets/iconImages/city.png";
// import Area from "../../assets/iconImages/area.png";




const HomePage = ()=>{



// // const [isExpanded, setIsExpanded] = useState(false);

// //   const toggleBorder = () => {
// //     setIsExpanded(!isExpanded);
// //   };




// // // border
//     // const [ifActive, setClickActive]= useState(false);
//     // const togglePriceBorder =() =>{
//     //     setClickActive(!ifActive);
//     // };








// //   map view

// // const [activeTab, setActiveTab] = useState("rent");



// const [searchDropdown, setSearchDropdown] = useState(false);
//   const [priceDropdown, setPriceDropdown] = useState(false);
//   const [price, setPrice] = useState(750000);

//   const searchRef = useRef(null);
//   const priceRef = useRef(null);
//   const priceInputRef = useRef(null)

// // Close dropdowns when clicking outside
// useEffect(() => {
//     function handleClickOutside(event) {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setSearchDropdown(false);
//       }
//       if (
//         priceRef.current &&
//         !priceRef.current.contains(event.target) &&
//         priceInputRef.current !== event.target
//       ) {
//         setPriceDropdown(false);
//       }
//     }

// document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

  


  return(


    
    <>

         
          <Header/>
          <HeaderMain/>
          <TabOptions/>
          <BodyHead/>
          <PropertyCardone/>
          <Pagination/>
          <Footer/>
          
          
          






         {/* navigation bar */}
        
{/* //                     <div className=" nav-container d-none d-md-block hidden lg:flex justify-between items-center px-14 py-8 shadow-xs bg-white"> */}
{/* //                         <div className=" max-width nav"> */}
{/* //                             <div className=' nav-child-abc'> */}
{/* //                                 <div className='abc-child'> */}
{/* //                                     <p className="">ABC</p> */}
{/* //                                     <p className="">PROPERTIES</p> */}
{/* //                                 </div> */}
{/* //                                 <p className='real-estate'>Your Perfect Real Estate Partner</p> */}
{/* //                             </div> */}
{/* //                             <div className=' nav-child-menu flex lg:flex-row flex-col justify-between items-center gap-7'> */}
                                 {/* <div className='  buy-rent'> */}
{/* //                                     <p className="">Buy</p> */}
{/* //                                     <p className='rent' style={{color:"#F4835F"}}>Rent</p> */}
                                 {/* </div> */}
{/* //                                 <div className=' empty-div'style={{ backgroundColor: "#CBCBCB", padding : "1px", borderRadius:"2px", height:"30px", width: "2px" }}></div> */}
{/* //                                     <p className=""> Navigators Edge </p> */}
{/* //                                     <p className=""> Our Agent</p>
//                                     <p className="">Blogs & Insights</p>
//                                     <p className="">New Launges</p>
//                                     <p className="">About Us</p>
//                                     <p className="">Help & Support</p>
                                
//                             </div> */}
{/* //                             <div className='nav-child-btn'>Sell Property</div>
//                         </div> */}
{/* //                     </div> */}
                         {/* </div> */}


         {/* tab-options */}

{/* //         <div className=" max-width mt-5 d-flex p-1 rounded "> */}
       {/* 10% - Buy/Rent Switcher */}
{/* //             <div className= " tab-button-toggle d-none d-md-block  p-1 rounded-xl hidden "  > */}
{/* //                 <div className="df-tgbt-flx d-flex" style={{backgroundColor:"#F1F1F3",borderRadius:"15px" }}> */}
{/* //                     <div */}
{/* //                          style={{backgroundColor:"#F1F1F3", alignItems:"center" , padding:"15px", borderRadius:"15px" }}> */}
{/* //                             Buy */}
{/* //                     </div> */}
{/* //                     <div */}
{/* //                         style={{backgroundColor:"#2E96C6", color:"#FFFFFF", padding:"15px", borderRadius:"15px", width:"50%"}}> */}
{/* //                             Rent */}
{/* //                     </div> */}
{/* //                 </div> */}
                
{/* //             </div> */}

       {/* 50% - Search Input */}
{/* //       <div ref={searchRef} className="position-relative mx-2 flex-grow-1" style={{ width: "50%" }}> */}
{/* //         <div className="search-container input-group" onClick={(e) => { */}
{/* //               e.stopPropagation(); // Stop event bubbling
//               setSearchDropdown(true);
//               setPriceDropdown(false);
//             }}>
//           <span className="input-group-text" style={{border:"none"}}><img src={search} alt="search" className="search-icon" /></span>
//           <input type="text" className="form-control" placeholder="Search property" readOnly style={{border:"none"}} />
//           <span className="input-group-text"style={{border:"none"}}><img src={vector} alt="vector" className="search-icon" /></span>
//         </div> */}
        
        
         {/* Search Dropdown */}
{/* //         {searchDropdown && ( */}
{/* //           <div className="dropdown-content  show w-100 p-2">
//             <div className="dropdown-item"><img src={City} alt="city" className="icon" /> City, Towns, Texas</div>
//             <div className="dropdown-item"> <img src={Area} alt="area" className="icon" /> Areas</div>
//             <div className="dropdown-item"><img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental</div>
//           </div>
          
         
          
//         )}
//       </div> */}

       {/* 20% - Price Filter */}
{/* //       <div ref={priceRef} className=" price-filter-container position-relative mx-2" style={{ width: "20%",height:"57px" }}>
        
//         <button className="d-flex justify-content-between btn  w-100" onClick={(e) => { */}
{/* //               e.stopPropagation(); // Stop event bubbling
//               setPriceDropdown(!priceDropdown);
//               setSearchDropdown(false);
//             }}>
//             <div className='price-text'>Price</div>
//             <div><img className="down-arrow" src={Charecter} alt="downarrow" /></div>
//         </button> */}



        

         {/* Price Filter Dropdown */}
{/* //         {priceDropdown && ( */}
{/* //           <div className="pricing-drop-down dropdown-menu  w-100 p-4"style={{backgroundColor:"#FFF7F5", border:"FFF7F5", alignItems: "center", padding:"20px"}}>
//             <h3>{price.toLocaleString()}0</h3>
//             <div className="text-center fw-bold" ><input */}
{/* //                 type="text"
//                 className="form-control"
//                 placeholder="Enter Amount in AED"
//                 value={price.toLocaleString()}
//                 ref={priceInputRef}
//                 onClick={(e) => e.stopPropagation()} // Prevents dropdown from closing
//                 onChange={(e) => setPrice(parseInt(e.target.value.replace(/,/g, ""), 10) || 0)}
//               /></div> */}
{/* //             <div className="d-flex justify-content-between small">
//               <span>Min</span> <span>Max</span>
//             </div> */}
             {/* <input type="range" className="form-range my-2" /> */}
{/* //             <input className="price-input" type="" placeholder="Enter Amount in AED" />
//           </div> */}
{/* //         )} */}
{/* //       </div> */}


      



       {/* 20% - Find Button */}
{/* //       <div className="mx-20" style={{  width: "20%", }}>
//         <button className=" font-family find w-100 d-none d-md-block "style={{ height:"57px" }}>Find</button>
//       </div>
//     </div> */}


                     {/* Price Dropdown */}
 
                                     {/* properties for rent in UAE */}

{/* //                         <div className="max-width properties-for-rent">
//                             <div className="properties">
//                                 <div className="property-rent">Properties for Rent in United Arab Emirates</div>
//                                 <div className="listing">10 Listings</div>
//                             </div>
                             
//                              <div className=" absolute-center map-view ">
//                                 <div className="absolute-center mapp flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer shadow-sm bg-white w-48 h-12">
//                                     <p>Mapp View </p>
//                                     <img className="absolute-center" src={Switch} alt="change"/>
//                                 </div>
//                                 <div className="absolute-center newest">
//                                     <p>Newest First</p>
//                                     <img className="absolute-center" src={Charecter} alt="down-arrow"/>
//                                 </div>
//                             </div> */}

                            
                               




                               
                                
                            
{/* //                         </div> */}





                        



{/* //                 <PropertyCard/> */}

                    

                    



                    


        


                

                


        

        
    






        

            
        
        
     </>
    

   

 


  )

}
export default HomePage;


