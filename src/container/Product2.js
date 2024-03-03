import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import products2 from "../products2";
import { useParams } from 'react-router-dom';
import './product.css';
function Product() {
    const { id } = useParams();
    const prod = products2.find((item) => item._id === id);
    return (
        <div className="produc mb-5">
            <Link  to="/product/Rang-Plastic" className="btn btn-light mx-5 mt-4">بازگشت به صفحه اصلی</Link>
            {/* استفاده از prod برای نمایش جزئیات محصول */}

            <Row className=" d-flex align-items-center justify-content-center m-4 rounded ">
                <Col lg="4">
                    <Image src={prod.image} fluid className="p-5   fs-4 text mb-5" />

                </Col>
                <Col lg="8" className="p-5 text-center fs-3  text">

                    <div>{prod.Name}</div>
                    <div> {prod._id}</div>
                    <div className=""> {prod.description}</div>
                </Col>

            </Row>
        </div>
    )
}

export default Product