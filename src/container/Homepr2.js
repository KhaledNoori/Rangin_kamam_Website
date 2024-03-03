import React from "react";
import Product from '../components/Product2/Product2'
import products2 from "../products2";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Homepr2 = () => {

    return (

        <div>
            <h3 className="text-center mt-4">رنگ پلاستیک</h3>
            <Link to="/" className="btn btn-light mx-3 mb-3">بازگشت به صفحه قبلی</Link>
            <Row className="g-3">

                {products2.map((item) => {

                    return (
                        <Col sm={12} lg={3}>

                            <Product product={item} />

                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Homepr2