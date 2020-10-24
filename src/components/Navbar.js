import React,{Component} from 'react';
import $ from 'jquery';
import './Navbar.scss';

export default class Navbar extends Component{
    showMenu = () => {
        $(this).toggleClass("on");
        $(".menu-section").toggleClass("on");
        $("nav ul").toggleClass("hidden");
    }

    render(){
        return (
            <div className="menu-section">
                <div className="menu-toggle" onClick={this.showMenu}>
                    <div className="one" ></div>
                    <div className="two" ></div>
                    <div className="three"></div>
                </div>
                <nav>
                        <ul role="navigation" className="hidden">
                            <li><a href="#">For You</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">About TikTok</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Byte Dance</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">TikTok for Good</a></li>
                            <li><a href="#">TikTok for Developers</a></li>
                            <li><a href="#">TikTok for Good</a></li>
                            <li><a href="#">Advertise on TikTok</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Byte Dance</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">TikTok for Good</a></li>
                        </ul>
                    </nav>
             </div>
        )
    }
}