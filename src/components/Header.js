import React,{Component} from 'react';
import Navbar from './Navbar';
import tiktok from '../assets/images/tiktok.png';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './Header.scss';

export default class Header extends Component{
    render(){
        return (
            <div className="header">
              <Navbar />
              <img src={tiktok} alt="tiktok"/>
              <span>TikTok</span>
              <button className="watch">
                  <PlayArrowIcon color="secondary"/>
                  <a href="/trending">Watch Now</a>
              </button>
            </div>
        )
    }
}