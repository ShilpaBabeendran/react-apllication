import React from "react";
import "../../Components/LuxuaryApartment/apartment.css";

import Tik from "../../assets/iconImages/tik.png";
import Light from "../../assets/iconImages/light.png";
import Table from "../../assets/iconImages/table.png";
import Window from "../../assets/iconImages/window.png";
import Flower from "../../assets/iconImages/flower.png";

const LuxuryApartments = () => {
  return (

    
    <div>


       






        {/* <div className="container my-5"> */}
      <div className=" max-width luxury-card p-4 d-flex flex-column flex-lg-row align-items-center">
        {/* Left Side: Text Content */}
        <div className="text-section text-light text-lg-start text-center">
          <h3 className="fw-bold">Luxury Apartments</h3>
          <p>
            Situated in prestigious and desirable locations, offering breathtaking
            views, proximity to upscale neighborhoods, and convenient access to
            amenities such as shopping, dining, and cultural attractions.
          </p>
          <ul className="list-unstyled">
            <li>✔ Designer Finishes</li>
            <li>✔ Spacious Layouts</li>
          </ul>
          <button className="btn btn-light mt-3">Explore Apartments</button>
        </div>

        {/* Right Side: Illustration */}
        {/* <div className="image-section"> */}
        <div className="d-flex  image-section ">
                <div className=" img-one">
                  <div className="img-a">
                  <img src={Light} alt=""/>
                    
                  </div>
                  <div className="img-b">
                  <img src={Table} alt=""/>
                    
                  </div>
                </div>
                <div className="img-two">
                  {/* <div className="img-c"> */}
                  <img src={Window} alt=""/>
                    
                  {/* </div> */}
                </div>
                <div className="img-three">
                  {/* <div className="img-d"> */}
                  <img src={Flower} alt=""/>
                    
                  </div>
                {/* </div> */}
              </div>
        </div>
      {/* </div> */}
    {/* </div> */}




      
    </div>
  );
};

export default LuxuryApartments;
