import React from 'react';
import { Col, Container, Row ,Card,CardBody,CardImg,CardText,CardTitle} from 'react-bootstrap';
import './Standard.css';
const Standard= () => {
  return (

<Container>


    <Row className=' text-center align-items-center mt-5 '>

        <Col >
        <h2 className='fonttt'> رنگ درجه یک</h2>
        </Col>
    </Row>
   
     <Row className='d-flex text-center align-items-center mt-3 justify-content-center gy-3'>
    <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/green.jpg" alt="Card image cap" />
            <CardBody>         
           <CardTitle className='fonttt'>رنگین رغنی</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col> 
       <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/blue.jpg" alt="Card image cap" />
         
           <CardBody>         
           <CardTitle className='fonttt'>رنگین رغنی</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>
     <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/yellow.jpg" alt="Card image cap" />
           <CardBody>         
           <CardTitle className='fonttt'>رنگین رغنی</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/red.jpg" alt="Card image cap" />
           <CardBody>         
           <CardTitle className='fonttt'>رنگین رغنی</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>

    </Row>



</Container>

  );
};



export default Standard;