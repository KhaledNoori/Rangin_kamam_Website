import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/product/product";
import { Link } from "react-router-dom";
const Homepr = () => {

    return <div>

        <h3 className="text-center mt-4"> رنگ ورزین</h3>
        <Link to="/" className="btn btn-light mx-3 ">بازگشت به صفحه قبلی</Link>
        <Row className="g-3">

            {products.map((item) => {

                return (
                    <Col key={item._id} sm={12} lg={3}>
                        <Product Product={item} />
                    </Col>
                )
            })}
        </Row>

    </div>

}

export default Homepr