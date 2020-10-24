import React,{Component} from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import './Download.scss';

class Download extends Component {
   state = {
      phoneNumber: ''
   }

   onChange = e => {
       this.setState({[e.target.name]:e.target.value})
   }

    render(){
        const {phoneNumber} =  this.state;

        return (
            <div className="footer">
               <div className="firstContainer">
                    <h2>Text yourself a link to download TikTok</h2>
                    <div className="form-wrap">
                       <form >
                           <input value="AL+355" readonly/>
                           <img src="" />
                           <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange} placeholder="Phone Number" />
                           <button type="submit" class="jsx-811635370">Send</button>
                       </form>
                    </div>
                    <div className="tips">
                       <p>By clicking the "send" button, you confirm that you agree to our Terms of Use 
                           and acknowledge you have read and understood our Privacy Policy
                      </p>
                    </div>
               </div>
    
               <div className="download-content">
                  <h2>Download now</h2>

                  <div className="downloadTo">
                     <button type="button"><AppleIcon color="disabled" fontSize="small" /><p>App Store</p></button>
                     <button type="button"><ShopIcon color="disabled" fontSize="small"/><p>Google Play</p></button>
                     <button type="button">
                        <img src="https://img.icons8.com/doodle/48/000000/amazon.png"/><p>Amazon </p>
                     </button>
                  </div>
               </div>
            </div>
        )
    }
}

export default Download;