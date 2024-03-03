

import { FaYoutube, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (


    <footer className='footer'>

      <Row className='' >
        <Col className='d-flex align-items-center justify-content-center  ' dir='rtl'>
          <a href="#home" className='m-2 linkf'>صفحه اصلی</a>
          <a href="#about us" className='m-2 linkf'>درباره</a>
          <a href="#products" className='m-2 linkf'>محصولات</a>
        </Col>

      </Row>

      <Row className=' '>
        <Col className='d-flex align-items-center justify-content-center '>
          <a className='item2' href="https://www.youtube.com"><FaYoutube /></a>
          <a className='item2' href="https://www.facebook.com"><FaFacebook /></a>
          <a className='item2' href="https://www.github.com"><FaGithub /></a>
          <a className='item2' href="https://www.instagram.com"><FaInstagram /></a>

        </Col>
        <p className='text-center'>© تمام حقوق محفوظ می‌باشد</p>
      </Row>
    </footer>

  );
}

export default Footer;





