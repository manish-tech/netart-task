import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe}from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
 

function Footer() {
  return (
    <div className="footer">
    <div>
      <img className="phone" src = "./images/phone.png" alt = "phone"/>
      <div className = "dis-inline mg-l-0-86em paragraph_list-font">Toll free 1800 200 1234</div>
      </div>
      <div>
      <FontAwesomeIcon icon = {faFacebook} size="2x"  />
        <a
          className="footer_a text-decoration-none color-white paragraph_list-font"
          href="https://www.facebook.com/cripumps"
        >
          www.facebook.com/cripumps
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon = {faGlobe} size="2x"/>
        <a
          className="footer_a text-decoration-none color-white paragraph_list-font"
          href="https://www.crigroups.com"
        >
          www.crigroups.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
