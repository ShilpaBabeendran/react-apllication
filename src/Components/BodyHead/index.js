import React, { useState } from "react";
import "../BodyHead/bhead.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "react-bootstrap";
import Charecter from "../../assets/iconImages/down-arrow 2.png"


const BodyHead = ()=>{

    const [mapView, setMapView] = useState(false);


  return(

    <>
  
        
    {/* </div> */}

    <div className="max-width properties-for-rent ">
        <div className="properties">
            <div className="property-rent">Properties for Rent in United Arab Emirates</div>
            <div className="listing">10 Listings</div>
        </div>
            
        <div className=" absolute-center d-flex align-items-center map-view ">
            <div className="absolute-center mapp d-flex d-flex justify-content-between gap-2 border border-gray-300 text-gray-700 cursor-pointer  w-55 h-12">
                <p className="mapviewtext align-item-center">Mapp View </p>
                <Form.Check
                type="switch"
                id="mapViewSwitch"
                checked={mapView}
                onChange={() => setMapView(!mapView)}
                />
                
            </div>
            <div className="absolute-center mapp d-flex justify-content-between align-items-center gap-2 border border-gray-300 px-4   cursor-pointer w-48 h-12">
                <p>Newest First</p>
                <img className="" src={Charecter} alt="down-arrow" style={{cursor:"pointer"}}/>
            </div>
        </div>
    </div>
    
    
    </>
    


    

  )

}
export default BodyHead;