import React from 'react';
import { Col, Container, Row ,Card,CardBody,CardImg,CardText,CardTitle} from 'react-bootstrap';
import './Basic.css';
const Basic= () => {
  return (

<Container>


    <Row className=' text-center align-items-center mt-5 '>

        <Col >
        <h2 className='fonttt'> رنگ درجه دو</h2>
        </Col>
    </Row>
   
     <Row className='d-flex text-center align-items-center mt-3 justify-content-center gy-3'>
    <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/bs1.jpg" alt="Card image cap" />
            <CardBody>         
           <CardTitle className='fonttt'>رنگین پلاستیک</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col> 
       <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/bs2.jpg" alt="Card image cap" />
         
           <CardBody>         
           <CardTitle className='fonttt'>رنگین پلاستیک</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>
     <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/bs3.jpg" alt="Card image cap" />
           <CardBody>         
           <CardTitle className='fonttt'>رنگین پلاستیک</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>
       <Col sm="3">
          <Card>
           <CardImg top width="100%" src="./assets/images/Products/bs4.jpg" alt="Card image cap" />
           <CardBody>         
           <CardTitle className='fonttt'>رنگین پلاستیک</CardTitle>
             <CardText className='fonttt'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </CardText>
            </CardBody>
          </Card>
       </Col>

    </Row>

</Container>

  );
};



export default Basic;