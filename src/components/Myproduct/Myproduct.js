import React from "react";
import Premium from "../Products/Premiun/Premium";
import { Row, Col } from 'react-bootstrap';
import './Myproduct.css';
import Standard from "../Products/Standard/Standard";
import Basic from "../Products/Basic/Basic";


function Myproduct() {

    return (

        <section className="section1" id="products">
            <Row className=' text-center align-items-center pt-3 product'>

                <Col className='' >
                    <h3 className="fonttt">محصولات</h3>
                </Col>
            </Row>
            <Premium />
            <Standard />
            <Basic />


            <div>
                <br />
                <br />
                <br />
              
            </div>
        </section>
    )
}

export default Myproduct