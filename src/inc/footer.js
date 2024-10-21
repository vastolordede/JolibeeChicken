import React from "react";
import { Link } from 'react-router-dom';
import img from '../img/logo.png';
import img1 from '../img/Remove-bg.ai_1729443120678.png';
import img2 from '../img/Remove-bg.ai_1729443083581.png';
import img3 from '../img/Remove-bg.ai_1729443069706.png';
function Footer() {
    return(
        <div className="footer-box">
        <footer>
          <ul className="footer-ul">
            {/*1*/}
            <li>
                <ul className="footercontent1">
                    <li className="footerli">
                    <a href="#" className="footer-link">Menu</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">FAQs</a> 
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Support</a>     
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Company</a>    
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Our Story</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Gift Cards</a>    
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Foundation</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Careers</a>    
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Open a Jolibee</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Investor Relations</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Nutrition & Allergen Information</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Terms of Service</a>  
                    </li><li>|</li> 
                   <li className="footerli">
                   <a href="#" className="footer-link">Trademarks</a>   
                    </li><li>|</li> 
                   <li className="footerli">
                   <a href="#" className="footer-link">Privacy Policy</a>    
                    </li><li>|</li> 
                   <li className="footerli">
                   <a href="#" className="footer-link">Do Not Sell or Share My Information</a>
                    </li><li>|</li> 
                   <li className="footerli">
                   <a href="#" className="footer-link">Accessibility Statement</a>   
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Offer Terms</a>
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Rewards Terms</a>    
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Mobile Order and Payment Terms</a>
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Delivery Terms</a>     
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Unsolicited Idea Policy</a>
                    </li><li>|</li> 
                    <li className="footerli">
                    <a href="#" className="footer-link">Sitemap</a>   
                    </li><li>|</li> 
                    
                </ul>
            
            </li>
            <hr className="footer-hr"></hr>
             {/*2*/}
            <li>
            <a>2,000 calories a day is used for general nutrition advice, but calorie needs vary
                All aictures are shown for illustrative auraoses only. Actual aroduct may vary. 
                TM & © 2024 aoaeyes Louisiana Kitchen, Inc.
                arices may vary</a>
            </li>
            <hr className="footer-hr"></hr>
             {/*3*/}
            <li>
            <a href="#"><img src={img} className="footer-logo"></img></a>
             <ul className="ul-imglink">
                <a href="#"><img src={img1} className="footer-imglink1"></img></a>
                <a href="#"><img src={img2} className="footer-imglink2"></img></a>
                <a href="#"><img src={img3} className="footer-imglink3"></img></a>
             </ul>   
            </li>
          </ul>
          
      </footer>
      </div>
    );
}
export default Footer;