import React from "react";
import { Container , Row , Col } from "react-bootstrap";
import './Vision.css';
const Vision = () => {


    return(
        <section className="Vision d-flex align-itemes-center justify-content-center" id="vision">
    <Container className=" my-3">
     <Row className=" text-center justify-contant-center fw-bold" > 
     <h2 className="mt-4">دیدگاه</h2>
      </Row>

      <Row className="mt-3 gy-4 ">
      <Col lg={6}>
        <div className="card1 ">
        <img src="./assets/images/vision/2.jpg" alt="Rainbow Company" className='img1'/>
            </div>
        </Col>
        <Col lg={6}>
            <div className="card2 text-center justify-content-center">
               <p>
                ما میکوشیم تا همانطور که مشتریان و تامین کنندگان از ما انتظار دارند. به عنوان بهترین تولید کننده محصولات رنگ به کشور و در سطح منطقه مصدر خدمت باشیم.
               </p>
            </div>
        </Col>
        
      </Row>
    </Container>
       </section>
    )
}
export default Vision