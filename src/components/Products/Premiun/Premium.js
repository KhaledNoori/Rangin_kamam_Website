

import React from 'react';
import { Col, Container, Row,Card,CardBody,CardImg,CardText,CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Premium = () => {
  return (

<Container>
    <Row className=' text-center align-items-center mt-5'>

        <Col>
        <h3>ممتار</h3>
        </Col>
    </Row>
   
    <Row className=' text-center align-items-center mt-3 justify-content-center gy-3'>
    <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/products/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/news/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/news/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/news/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/news/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="4">
          <Card>
           <CardImg top width="100%" src="./assets/images/news/one.jpg" alt="Card image cap" />
            <CardBody>               <CardTitle>عنوان عکس 1</CardTitle>
             <CardText>متن عکس 1</CardText>
            </CardBody>
          </Card>
       </Col>

    </Row>
    <Link to="/">بازگشت به صفحه اصلی</Link>
</Container>






  );
};



export default Premium;
