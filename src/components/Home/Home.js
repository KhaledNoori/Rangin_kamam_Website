import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const textToType = "شرکت تولیدی رنگ رنگین کمان" ;
    
    const timer = setInterval(() => {
      if (index < textToType.length) {
        setText((prevText) => prevText + textToType[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setText(' ');
          setIndex(0);
        }, 3000); // تایمر برای حذف متن پس از 3 ثانیه
      }
    }, 200); // تایمر برای تایپ کردن متن با فاصله 200 میلی‌ثانیه

    return () => clearInterval(timer); // پاک کردن تایمر در هنگام حذف کامپوننت
  }, [index]);

  return (
   
      <section  className='home d-flex align-itemes-center justify-content-center id="home" '>
      <Container>
        <Row className='gy-5 roo align-itemes-center ' dir='rtl'> 
          <Col lg={6}  
            className='d-flex justify-content-center '>
            <img src="./assets/images/photo-1513364776144-60967b0f800f.webp" alt="Rainbow Company" className='column1'/>
          </Col>

          <Col lg={6}  className='text-center column2'>
           <h1 className='para' >
         {text}</h1>
            <div className="gradient-text "> <h3>ما از جهان محافظت می کنیم و زیبا می کنیم</h3></div>
           </Col>
        </Row>
      </Container>
      </section>
    
  );
};

export default Home;
