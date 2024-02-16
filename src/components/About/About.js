import React from "react";
import './About.css';
import { Container, Row ,Col, Card} from "react-bootstrap";


function About (){

    return(
   
       <section className="About d-flex align-itemes-center justify-content-center " id="about us">
    <Container className=" my-3">
     <Row className=" text-center justify-contant-center fw-bold" > 
     <h2 className="mt-2">در باره ما</h2>
      </Row>

      <Row className="mt-3 gy-4">
      
        <Col lg={6}>
            <Card className="cardt text-center justify-content-center">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، لورم 
                    
                </p>
            </Card>
        </Col>
        <Col lg={6}>
        <Card className="cardt align-itmes-center ">
        <img src="./assets/images/about/img-22.jpg" alt="Rainbow Company" className='img'/>
            </Card>
        </Col>
        
      </Row>
    </Container>
       </section>

    )

}

export default About