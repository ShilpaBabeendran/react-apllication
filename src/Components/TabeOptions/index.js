import React, { useState, useEffect, useRef } from "react";
import "../TabeOptions/tab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../assets/iconImages/search.png"
import vector from "../../assets/iconImages/Vector.png"
import City from "../../assets/iconImages/city.png";
import Area from "../../assets/iconImages/area.png";
import Commercial from "../../assets/iconImages/commercial.png";
import Charecter from "../../assets/iconImages/down-arrow 2.png"; 
import Menu from "../../assets/iconImages/menu.png";
import Sfilter from "../../assets/iconImages/srch-fltr.png";

const TabOptions = () => {

    // rent-buy

    const [active, setActive] = useState("Rent");


    // search

    const [isOpen, setIsOpen] = useState(false);


    const searchRef = useRef(null);


    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
              setIsActive(false);
            }
        }
    
    document.addEventListener("clickdowm", handleClickOutside);
    return () => document.removeEventListener("clickdowm", handleClickOutside);
      }, []);

//   pricing

const [isActive, setIsActive] = useState(false);
  const [price, setPrice] = useState(750000);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);


  return (

            // rent-buy...........

    <>





    <div className=" mt-5 mrgn d-none d-md-block ">
        <div className="row g-2 rwa-djst"> {/* Remove gaps */}
    
                {/* Buy/Rent Toggle - 10% */}
            <div className="col-1 align-items-center w-a-c ">
                <div className="d-flex w-100 align-items-center p-1  rounded-3 " style={{backgroundColor:"#F1F1F3",borderRadius:"15px" }}>
                    <div className={`toggle-btn w-50 p-3  rounded-3 align-items-center ${active === "Buy" ? "" : ""}`} onClick={() => setActive("Buy")}style={{
                        backgroundColor: active === "Buy" ? "#2E96C6" : "#F1F1F3", // Custom Orange
                        color: active === "Buy" ? "white" : "black",
                        cursor: "pointer",
                        }}>
                        Buy
                    </div>
                    <div className={`toggle-btn w-50 p-3 rounded-3 align-items-center ${active === "Rent" ? "" : ""}`} onClick={() => setActive("Rent")}
                        style={{
                            backgroundColor: active === "Rent" ? "#2E96C6" : "#F1F1F3", // Custom Orange
                            color: active === "Rent" ? "white" : "black",

                            cursor: "pointer",
                        }}>
                        Rent
                    </div>
                </div>
            </div>


                {/* Search Box - 70% */}
            <div className="col-7  w-70  align-items-center justify-content-center " >
                <div className="d-flex w-100 align-items-center p-3 rounded-3 "style={{border:"1px solid #CCCCCC"}} onClick={() => setIsOpen(!isOpen)}>
                    <img src={search} alt="search" className="" />
                    <input type="text" className="border-0 w-100" placeholder="Search property" readOnly />
                    <img src={vector} alt="vector" className="ms-2" />
                </div>
                {isOpen && (
                    <div className="dropdown-content g-1  show w-100 p-2" style={{backgroundColor:"#FFF7F5", border:"FFF7F5", alignItems: "center", padding:"20px"}}>
                        <div className="dropdown-item"><img src={City} alt="city" className="icon" /> City, Towns, Texas</div>
                        <div className="dropdown-item"> <img src={Area} alt="area" className="icon" /> Areas</div>
                        <div className="dropdown-item"><img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental</div>
                    </div>      
                )}      
            </div>

            {/* Price Filter - 10% */}
            <div className="col-1 price-wd-ad "style={{width:"16%"}}>
                <div className="d-flex justify-content-between  align-items-center p-3  rounded-3 "style={{border:"1px solid #CCCCCC"}} onClick={() => setIsActive(!isActive)}>
                    <span>Price</span>
                    <img src={Charecter} alt="downarrow" />
                </div>
      
                {isActive && (
                    <div className="dropdown-options w-10   rounded-3 "style={{backgroundColor:"#FFF7F5", border: "1px solid FFF7F5", alignItems: "center", padding:"20px"}}>
                        <div className="text-center fw-bold">{price.toLocaleString()}</div>
                        <input
                        type="range"
                        min="0"
                        max="750000"
                        
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-range mt-2"
                        />
                        <div className="d-flex justify-content-between">
                        <span>Min</span>
                        <span>Max</span>
                        </div>
                        <input
                        type="text"
                        className="form-control mt-3 text-center"
                        value={`Enter Amount in AED`}
                        readOnly
                        />
                    </div>
                )}    
            </div>
            {/* Find Button - 10% */}
            <div className="col-2 align-items-center  ">
                <div className="d-flex w-100 p-3 bttn rounded-3 " style={{backgroundColor:"#FF916E",borderRadius:"15px", }}>
                    <button className="bttn " style={{border:"none", backgroundColor:"#FF916E"}}>
                        Find
                    </button>
                    
                </div>
            </div>
        </div>
        
    </div>






    {/* mobile view */}


    <div className=" mt-5 mrgn d-block d-md-none ">
        <div className="row rwa-djst g-3"> {/* Remove gaps */}
    
                {/* Buy/Rent Toggle - 10% */}
            {/* <div className="col-1 align-items-center w-a-c "> */}
                {/* <div className="d-flex w-100 align-items-center p-3  rounded-3 " style={{backgroundColor:"#F1F1F3",borderRadius:"15px" }}> */}
                    {/* <div className="bttn p-4  rounded-3" style={{backgroundColor:"#F1F1F3",borderRadius:"15px" }}> */}
                        {/* <img src={Menu} alt="vector" className="ms-2" /> */}
                    {/* </div> */}
                    
                {/* </div> */}
            {/* </div> */}


                {/* Search Box - 70% */}
            <div className="col-7 d-flex  w-70  align-items-center justify-content-center " style={{gap:"15px"}} >
                <img src={Menu} alt="vector" className="ms-2" />
                <div className="d-flex w-100 align-items-center p-3 rounded-3 "style={{border:"1px solid #CCCCCC"}} onClick={() => setIsOpen(!isOpen)}>
                    <img src={search} alt="search" className="" />
                    <input type="text" className="border-0 w-100" placeholder="Search property" readOnly />
                </div>
                    {isOpen && (
                        <div className="dropdown-content  show w-100 p-2" style={{backgroundColor:"#FFF7F5", border:"FFF7F5", alignItems: "center", padding:"20px"}}>
                            <div className="dropdown-item"><img src={City} alt="city" className="icon" /> City, Towns, Texas</div>
                            <div className="dropdown-item"> <img src={Area} alt="area" className="icon" /> Areas</div>
                            <div className="dropdown-item"><img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental</div>
                        </div>      
                    )} 
                                    <img src={Sfilter} alt="vector" className="ms-2" style={{backgroundColor:"#018BCF"}} />
     
            </div>

            {/* Find Button - 10% */}
            {/* <div className="col-1 bttn  rounded-3" style={{backgroundColor:"#018BCF"}}> */}
                {/* <img src={Sfilter} alt="vector" className="ms-2" style={{backgroundColor:"#018BCF"}} /> */}
            {/* </div> */}
   
        </div>
    </div>












    </>
  );
};

export default TabOptions;
