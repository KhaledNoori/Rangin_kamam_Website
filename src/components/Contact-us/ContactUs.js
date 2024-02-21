import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col ,Form ,Button } from "react-bootstrap";
import './ContactUs.css'
const ContactUs = () => {
    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 34.34899,
        lng: 62.20112
    };

    return (

        <section className="contact" id="contact">

            <Container className="pb-5">

                <Row className=" text-center mt-5">
                    <Col>
                        <h2 className=" mt-3 text-light">
                            ارتباط با ما
                        </h2>
                    </Col>
                </Row>

                <Row className=" d-flex align-items-center justify-content-center mt-5" >

                    <Col lg={6} sm={4}>
            
                    <Form dir="rtl">
      <Form.Group controlId="formBasicName">
        <Form.Label className="lab">نام</Form.Label>
        <Form.Control type="text" placeholder="نام خود را وارد کنید" className="mb-2"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className="lab">ایمیل</Form.Label>
        <Form.Control type="email" placeholder="ایمیل را وارد کنید" className="mb-2"/>
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label className="lab mb-0.4" >پیام</Form.Label >
        <Form.Control as="textarea" rows={3} placeholder="پیام خود را  ذکر کنید"/>
      </Form.Group>

      <Button variant="primary" type="submit" className=" mt-4">
        ارسال پیام
      </Button>
    </Form>

                    </Col>

                    <Col lg={6} sm={4}>
                        <LoadScript googleMapsApiKey="AIzaSyAzmNed5c68CpV7E2ioGhDXJUhaAbEiX1g">
                            <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={10}
                                center={defaultCenter}
                            >
                                <Marker position={defaultCenter} />
                            </GoogleMap>
                        </LoadScript>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ContactUs


// import React from 'react';


// const Map = () => {
//   const mapStyles = {
//     height: "400px",
//     width: "100%"
//   };

//   const defaultCenter = {
//     lat: 41.3851,
//     lng: 2.1734
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={10}
//         center={defaultCenter}
//       >
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default Map;

