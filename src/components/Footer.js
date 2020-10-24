import React from 'react';
import tiktok from '../assets/images/tiktok.png';
import './Footer.scss';


const Footer = () => {
    return (
           <footer className="footer-row">
               <div className="logo">
                  <img src={tiktok} alt="tiktok"/>
                  <span>TikTok</span>
               </div>
             <div class="footer-column">
                    <h4>Company</h4><span>
                    <a class="item-sub-column" href="/about?lang=en"><h5>About TikTok</h5></a>
                    </span><span>
                    <a class="item-sub-column" href="https://newsroom.tiktok.com"><h5>Newsroom</h5></a>
                    </span><span>
                    <a class="item-sub-column" href="/about/contact?lang=en"><h5>Contact</h5></a>
                    </span><span>
                   <a class="item-sub-column" href="https://careers.tiktok.com" target="_blank"><h5>Careers</h5></a>
                   </span><span>
                  <a class="item-sub-column" href="https://www.bytedance.com" target="_blank"><h5>ByteDance</h5></a></span>
             </div>

             <div class="footer-column">
                  <h4>Programs</h4><span>
                  <a class="item-sub-column" href="https://www.tiktok.com/forgood" target="_blank"><h5>TikTok for Good</h5></a>
                  </span><span>
                 <a class="item-sub-column" href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank"><h5>TikTok for Developers</h5></a>
                 </span><span>
                 <a class="item-sub-column" href="https://ads.tiktok.com/?refer=tiktok_web" target="_blank"><h5>Advertise on TikTok</h5></a></span>
             </div>

             <div class="footer-column">
                <h4>Support</h4><span>
                    <a class="item-sub-column" href="https://support.tiktok.com/en"><h5>Help Center</h5></a></span><span>
                    <a class="item-sub-column" href="/safety?lang=en"><h5>Safety Center</h5></a></span><span>
                    <a class="item-sub-column" href="/community-guidelines?lang=en"><h5>Community Guidelines</h5></a></span><span>
                    <a class="item-sub-column" href="https://www.tiktok.com/transparency?lang=en"><h5>Transparency</h5></a></span>
             </div>

             <div class="footer-column">
                 <h4>Legal</h4><span>
                 <a class="item-sub-column" href="/legal/cookie-policy?lang=en"><h5>Cookies Policy</h5>
                 </a></span><span><a class="item-sub-column" href="/legal/copyright-policy?lang=en"><h5>Intellectual Property Policy</h5></a></span><span>
                 <a class="item-sub-column" href="/legal/law-enforcement?lang=en"><h5>Law Enforcement</h5></a></span><span>
                 <a class="item-sub-column" href="/legal/privacy-policy?lang=en"><h5>Privacy Policy</h5></a></span><span>
                <a class="item-sub-column" href="/legal/terms-of-use?lang=en"><h5>Terms of Service</h5></a></span>
             </div>
           </footer> 
    )
}
export default Footer;