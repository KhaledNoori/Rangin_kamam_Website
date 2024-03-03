import React from 'react';
import { Col, Container, Row, Card, CardBody, CardImg, CardText, CardTitle,CardFooter } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Allproduct.css';

const Allproduct = () => {
  return (
    <Container className='mb-5' id='products'>
      <Row className=' text-center align-items-center mt-5 '>
        <Col >
          <h2 className='fonttt text-primary fw-bold'> محصولات</h2>
        </Col>
      </Row>

      <Row className='d-flex text-center align-items-center mt-3 justify-content-center gy-3'>
        <Col sm="3">
          <Card>
            <CardImg  width="100%" src="./assets/images/Products/about.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className='fonttt text-primary fw-bold'>رنگ ورزین 
              </CardTitle>
              <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
            <CardFooter>
             <Link to="/product/Rang-Varzin" className='link1'>برای مشاهده بیشتر کلیک کنید</Link>
            </CardFooter>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardImg  width="100%" src="./assets/images/news/news1.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className='fonttt text-primary fw-bold'>رنگ روغنی</CardTitle>
              <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
            <CardFooter>
             <Link to="/Product1/Rang-Roghani" className='link1'>برای مشاهده بیشترکلیک کنید</Link>
            </CardFooter>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardImg  width="100%" src="./assets/images/news/news4.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className='fonttt text-primary fw-bold'>رنگ پلاستیک</CardTitle>
              <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
             
            </CardBody>
            <CardFooter>
             <Link to="/product/Rang-Plastic" className='link1'>برای مشاهده بیشتر کلیک کنید</Link>
            </CardFooter>
          </Card>
        </Col>

      </Row>

    </Container>

  );
};



export default Allproduct;