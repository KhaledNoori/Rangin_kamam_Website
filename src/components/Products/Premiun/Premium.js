
import React from 'react';
import { Col, Container, Row, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import './Premium.css';
const Premium = () => {
   return (

      <Container>


         <Row className=' text-center align-items-center mt-5 '>

            <Col >
               <h3 className='fonttt'> رنگ ممتاز</h3>
            </Col>
         </Row>

         <Row className='d-flex text-center align-items-center mt-3 justify-content-center gy-3'>
            <Col sm="3">
               <Card>
                  <CardImg top width="100%" src="./assets/images/Products/a.jpg" alt="Card image cap" />
                  <CardBody>
                     <CardTitle className='fonttt'>رنگین ورزین</CardTitle>
                     <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
                  </CardBody>
               </Card>
            </Col>
            <Col sm="3">
               <Card>
                  <CardImg top width="100%" src="./assets/images/Products/d.jpg" alt="Card image cap" />

                  <CardBody>
                     <CardTitle className='fonttt'>رنگین ورزین ممتاز</CardTitle>
                     <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
                  </CardBody>
               </Card>
            </Col>
            <Col sm="3">
               <Card>
                  <CardImg top width="100%" src="./assets/images/Products/g.jpg" alt="Card image cap" />
                  <CardBody>
                     <CardTitle className='fonttt'>رنگین ورزین ممتاز</CardTitle>
                     <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
                  </CardBody>
               </Card>
            </Col>
            <Col sm="3">
               <Card>
                  <CardImg top width="100%" src="./assets/images/Products/g.jpg" alt="Card image cap" />
                  <CardBody>
                     <CardTitle className='fonttt'>رنگین ورزین ممتاز</CardTitle>
                     <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
                  </CardBody>
               </Card>
            </Col>

         </Row>



      </Container>

   );
};



export default Premium;
