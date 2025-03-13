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
            <div className="col-7  w-70  align-items-center justify-content-center position-relative " >
                <div className="d-flex w-100 align-items-center p-3 rounded-3 "style={{border:"1px solid #CCCCCC"}} onClick={() => setIsOpen(!isOpen)}>
                    <img src={search} alt="search" className="" />
                    <input type="text" className="border-0 w-100 input-no-focus" placeholder="Search property" readOnly />
                    <img src={vector} alt="vector" className="ms-2" />
                </div>
                {isOpen && (
                    <div className="dropdown-content g-1  show w-100 p-2 position-absolute" style={{backgroundColor:"#FFF7F5", border:"FFF7F5", alignItems: "center", padding:"20px"}}>
                        <div className="dropdown-item"><img src={City} alt="city" className="icon" /> City, Towns, Texas</div>
                        <div className="dropdown-item"> <img src={Area} alt="area" className="icon" /> Areas</div>
                        <div className="dropdown-item"><img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental</div>
                    </div>      
                )}      
            </div>

            {/* Price Filter - 10% */}
            <div className="col-1 price-wd-ad position-relative "style={{width:"16%"}}>
                <div className="d-flex justify-content-between  align-items-center p-3  rounded-3 "style={{border:"1px solid #CCCCCC"}} onClick={() => setIsActive(!isActive)}>
                    <span>Price</span>
                    <img src={Charecter} alt="downarrow" />
                </div>
      
                {isActive && (
                    <div className="dropdown-options w-10   rounded-3 position-absolute "style={{backgroundColor:"#FFF7F5", border: "1px solid FFF7F5", alignItems: "center", padding:"20px"}}>
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
            <div className="col-2 align-items-center ">
                <button
                    className="btn text-white w-100 p-3 rounded-3"
                    style={{ backgroundColor: "#FF916E", border: "none" }}>
                    Find
                </button>
        </div>
        </div>
        
    </div>






    {/* mobile view */}


    <div className="mt-5 d-block d-md-none ">
      <div className="row g-3 justify-content-center; ">
        {/* Search Box - 70% */}
        <div className="col-10 d-flex align-items-center justify-content-between position-relative" style={{ gap: "15px" }}>
        <img src={Menu} alt="vector" className="ms-2" />

          <div
            className="d-flex w-100 align-items-center p-3 rounded-3"
            style={{ border: "1px solid #CCCCCC", cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={search} alt="search" className="" />
            <input
              type="text"
              className="border-0 w-100 input-no-focus"
              placeholder="Search property"
              readOnly
            />
          </div>

          {isOpen && (
            <div
                className="dropdown-content w-100 p-2 rounded-3 position-absolute"
                style={{
                    backgroundColor: "#FFF7F5",
                    border: "1px solid #CCC",
                    padding: "15px",
                    top: "100%",
                    left: "0",
                    zIndex: 20,
                }}>
                <div className="dropdown-item">
                    <img src={City} alt="city" className="icon" /> City, Towns, Texas
                </div>
                <div className="dropdown-item">
                    <img src={Area} alt="area" className="icon" /> Areas
                </div>
                <div className="dropdown-item">
                    <img src={Commercial} alt="commercial" className="icon" /> Commercial, Rental
                </div>
            </div>
          )}

            <button className="btnnn" style={{backgroundColor:"#018BCF", cursor:"pointer", border:"none", borderRadius:"2%"}}><img src={Sfilter} alt="vector" className="ms-2 p-2"  /></button>
        </div>
      </div>
    </div>










    </>
  );
};

export default TabOptions;
