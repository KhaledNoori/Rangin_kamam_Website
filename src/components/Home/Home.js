import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const colors = ['#ff8c00', '#ff0080']; // رنگ‌های Gradient

  useEffect(() => {
    const textToType = "شرکت تولیدی رنگ رنگین کمان";
    
    const timer = setInterval(() => {
      if (index < textToType.length) {
        setText((prevText) => prevText + textToType[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setText('');
          setIndex(0);
        }, 3000); // تایمر برای حذف متن پس از 3 ثانیه
      }
    }, 200); // تایمر برای تایپ کردن متن با فاصله 200 میلی‌ثانیه

    return () => clearInterval(timer); // پاک کردن تایمر در هنگام حذف کامپوننت
  }, [index]);

  return (
    <div className='homeContainer d-flex align-itemes-center justify-content-center id="home'>
      <Container>
        <Row className='gy-5'>
         
          <Col lg={6} className='d-flex align-itemes-center justify-content-center column1'>
            <img src="./assets/images/photo-1513364776144-60967b0f800f.webp" alt="Rainbow Company" />
          </Col>

          <Col lg={6} className='text-center column2'>
           <p className='para'> {text}</p>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
