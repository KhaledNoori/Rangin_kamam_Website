import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col, Button, Form} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import './ContactUs.css';
// import { formToJSON } from "axios";
const ContactUs = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 34.34899,
    lng: 62.20112
  };

  // about form

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8p9li7p",
        "template_9p4fx3j",
        e.target,
        "Phj6W0Xc1igo9lqXE"
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
        // Display success message using SweetAlert
        Swal.fire({
          title: "موفقیت آمیز !",
          text: "پیام شما موفقانه ارسال شد",
          icon: "success",
          confirmButtonText: "قبول",
        });
        // This command reset the form after submiting
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        //Error message.
        // Display error message using SweetAlert
        Swal.fire({
          title: "خطا !",
          text: "هنگام ارسال پیام به مشکل برخوردیم، لطفا دوباره امتحان کنید.",
          icon: "error",
          confirmButtonText: "قبول",
        });
      });
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
          <Col lg={6} className="">

            <Form
              dir="rtl"
              className="myForm"
              border="primary"
              onSubmit={sendEmail}
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="lab">نام</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام خود را وارد کنید."
                  name="email_from"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="lab">ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ایمیل تان را وارد کنید."
                  name="user_email"
                />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label className="lab">پیام شما</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" placeholder="پیام خود را اینجا وارد کنید." className="place" />
              </Form.Group>
              <Button variant="primary" type="submit">
                ارسال
              </Button>
            </Form>

          </Col>


          <Col lg={6} sm={4}>
            <LoadScript googleMapsApiKey="AIzaSyAzmNed5c68CpV7E2ioGhDXJUhaAbEiX1g">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={5}
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

