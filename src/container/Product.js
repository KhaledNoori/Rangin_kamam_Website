import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import products from "../products";
import './product.css';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const prod = products.find((item) => item._id === id);

  return (
    <div className="product mb-5">
      <Link to="/product/Rang-Varzin" className="btn btn-light mx-5 mt-4">بازگشت به صفحه قبلی</Link>
      {/* استفاده از prod برای نمایش جزئیات محصول */}

      <Row className=" d-flex align-items-center justify-content-center m-4 ">
        <Col lg="4" className="mb-5  ">
          <Image src={prod.image} fluid className="rounded" />

        </Col>
        <Col lg="8" className="p-5   fs-4 text mb-5">

          <div>{prod.Name}</div>
          <div> {prod._id}</div>
          <div className="text">{prod.description}</div>
        </Col>

      </Row>
    </div>
  );
};


export default Product

