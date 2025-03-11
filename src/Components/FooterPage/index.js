// import React from 'react';
import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../footer.css";
import "../../Components/FooterPage/footer.css";
import ArrowRight from "../../assets/iconImages/arrow-right.png";
import Link from "../../assets/iconImages/link.png";
import Insta from "../../assets/iconImages/insta.png";
import Twiter from "../../assets/iconImages/twiter.png";
import Contact from "../../assets/iconImages/contact.png";
import Rectangle from "../../assets/iconImages/rectangle.png";
import Address from "../../assets/iconImages/address.png";
import Call from "../../assets/iconImages/calling.png";
import Downarrow from "../../assets/iconImages/down-arrow 2.jpg"



const Footer = ()=>{



    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(750000);
    const dropdownRef = useRef(null);
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    React.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);




  return(

    <>
    
        <div class="footer-container">
            {/* <!-- Left Section - Popular Searches --> */}
            <div class="popular-searches">
                <h3>Still not found?</h3>
                <p>Tell us what you are looking for</p>
                {/* <hr> */}
                <div class=" search-content">
                    <div class="locations">
                        <div class="location">
                            <div class="icon-box">
                                <img src={ArrowRight} alt=''/>
                            </div>
                            <div class="details">
                                <div className='detail-icon'>
                                    <h4>Dubai - Marina</h4>
                                </div>
                                <div className='flex detail-icon'>
                                    <p>all Listings </p>
                                    <img src={Link} alt=''/>
                                </div>                            
                            </div>
                        </div>
                        <div class="location">
                            <div class="icon-box">
                                <img src={ArrowRight} alt=''/>
                            </div>
                            <div class="details">
                                <div className='detail-icon'>
                                    <h4>Downtown area</h4>
                                </div>
                                <div className=' flex detail-icon'>
                                    <p>View all Listings</p>
                                    <img src={Link} alt=''/>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div class=" list-container">
                        <ul class="list">
                            <li>Flats for Rent in Whitefield</li>
                            <li>Flats for Rent in Sarjapur Road</li>
                            <li>Flats for Rent in Koramangala</li>
                            <li>Flats for Rent in Dubai</li>
                        </ul>
                        <ul class="list">
                            <li>Flats for Rent in Marathahalli</li>
                            <li>Flats for Rent in Hebbal</li>
                            <li>Flats for Rent in Kanakapura</li>
                            <li>Flats for Rent in Bellandur</li>
                        </ul>
                </div>
            </div>
        </div>

            {/* <!-- Right Section - Buyer's Guide --> */}
            <div class="buyers-guide">
                <div class="guide-icon"><img src={Rectangle} alt=''/></div>
                <h3>Buyer’s guide</h3>
                <p>The complete guide to locating and purchasing a home in Dubai</p>
                <button>Download PDF file</button>
            </div>
        </div>



        <footer class="footer">
                <div class="footer-top">
                    {/* <!-- Social Media Links --> */}
                    <div class="footer-section">
                        <h4>Connect With Us</h4>
                        <div class="social-icons">
                            <img src={Insta} alt=''/>
                            <img src={Twiter} alt=''/>
                            <img src={Contact} alt=''/>
                        </div>
                    </div>

                    {/* <!-- Contact Information --> */}
                    <div class="footer-section">
                        <h4>Get In Touch</h4>
                        <div class="flex fas fa-home">
                            <img src={Address} alt=''/>
                            <p> DAMAC Smart Heights - Office No. 1501 - Barsha Heights - Dubai, UAE</p>
                        </div>
                        <div class="flex fas fa-home">
                            <img src={Call} alt=''/>
                            <p> +971 52 975 8969</p>
                        </div>
                    </div>

                    {/* <!-- Services --> */}
                    <div class="footer-section">
                        <h4>Services</h4>
                        <div>
                            <p>Rent Services</p>
                            <p>Buy/Sell Property</p>
                            <p>Home Services</p>
                            <p>Property Lawyers</p>
                            <p>Design & Decor</p>
                            <p>Property Services</p>
                            <p>Agents</p>
                        </div>
                    </div>

                    {/* <!-- Chat with Us --> */}
                    <div class="footer-section chat">
                        <h4 class="fab fa-whatsapp"> Chat with us</h4>
                        <p>We provide the most accurate information about the homes that you are looking for</p>
                        <button class="chat-button">Chat now</button>
                    </div>
                </div>

                

                <div class="footer-bottom">
                    <div class="footer-links">
                        <div class=" flex footer-links-section">  
                            <p href="">About us</p>
                            <p href="">Terms & Conditions</p>
                            <p href="">Private Policy</p>
                        </div>
                    </div>

                    {/* <!-- Country Selector --> */}
                    <div class="flex country-selector">
                        <button class="dropdown" >CHOOSE </button>
                        <div className='btn-img-footer'>
                            <img src={Downarrow} alt=''/>
                        </div>
                    </div>

                    {/* <!-- Country Links --> */}
                    <div class="country-links">
                        <span>DUBAI</span>
                        <span>BAHRAIN</span>
                        <span>USA</span>
                        <span>UAE</span>
                        <span>UK</span>
                        <span>SAUDI</span>
                        <span>QATAR</span>
                        <span>INDIA</span>
                        <span>OMAN</span>
                    </div>
                </div>

            </footer>










            
    </>


    

  )

}
export default Footer;