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


        {/* <div className=" max-width luxuary-apartment margin-arrange"> */}
            <div className=" max-width  apartment">
              <div className="apartment-Ddetails">
                <h3 className="text-h">Luxury Apartments</h3>
                  <p className="text">Situated in prestigious and desirable locations, offering breathtaking views, proximity to upscale neighborhoods, and convenient access to amenities such as shopping, dining, and cultural attractions</p>
                <div className=" design-tik">
                  <div className="flex design">
                    <img src={Tik} alt=""/>
                    <p className="text">Designer Finishes</p>
                  </div>
                  <div className="flex design">
                    <img src={Tik} alt=""/>
                    <p className="text">Spacious Layouts</p>
                  </div>
                </div>
                <button>Explore Apartments

                </button>
              </div>

              <div className=" design-img d-none d-md-block">
                <div className=" flex img-one">
                  <div className="img-a">
                  <img src={Light} alt=""/>
                    
                  </div>
                  <div className="img-b">
                  <img src={Table} alt=""/>
                    
                  </div>
                </div>
                <div className="img-two">
                  <div className="img-c">
                  <img src={Window} alt=""/>
                    
                  </div>
                </div>
                <div className="img-three">
                  <div className="img-d">
                  <img src={Flower} alt=""/>
                    
                  </div>
                </div>
              </div>
            </div>
                

        {/* </div> */}



      
    </div>
  );
};

export default LuxuryApartments;
