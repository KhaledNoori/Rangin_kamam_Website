

import { FaYoutube, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
  

<footer className='footer'>
      <div className='item1 '>
        <a href="#home" >صفحه اصلی</a>
        <a href="#about us">درباره</a>
        <a href="#products">محصولات</a>
      </div>
      <div className=' text-center pe-5'>
        <a className='item2' href="https://www.youtube.com"><FaYoutube /></a>
        <a className='item2' href="https://www.facebook.com"><FaFacebook /></a>
        <a className='item2' href="https://www.github.com"><FaGithub /></a>
        <a className='item2' href="https://www.instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  
  );
}

export default Footer;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';



// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         <Link to="/">صفحه اصلی</Link>
//         <Link to="/about">درباره ما</Link>
//         <Link to="/products">محصولات</Link>
//       </div>
//       <div>
//       <a href="https://www.facebook.com"><FontAwesomeIcon icon={ "faFacebook"} /> </a>
//         {/* <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /> </a> 
       
//         <a href="https://www.github.com"><FontAwesomeIcon icon={FaGithub} /></a>
//         <a href="https://www.instagram.com"><FontAwesomeIcon icon={FaInstagram} /></a> */}
//       </div>
//       <div>
//         <p>© تمام حقوق محفوظ می‌باشد</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
