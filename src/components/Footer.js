import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram'
import  TwitterIcon  from '@material-ui/icons/Twitter';
import  FacebookIcon  from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';
function Footer() {
  return (
       <div className='footer'>
      <div className='socialMedia'>
          <InstagramIcon/><FacebookIcon/><TwitterIcon/><LinkedInIcon/>
      </div>
      <p> &copy; 2021 lakki@gmail.com</p>
  </div>
  );
}

export default Footer;
