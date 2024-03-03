import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import './product.css';
const Product = ({ Product }) => {

    return (
        <Container className=" ">
            {/* <Row >
            <Col > */}
            <Card className="my-3" >
                <Link to={`/product/${Product._id}`}>
                    <Card.Img className="image" src={Product.image} variant="top" />
                </Link>

                <Card.Body>
                    <Card.Title as='div' className="title text-center fw-bolder text-dark fs-5">{Product.Name}</Card.Title>
                    <Link to={`/product/${Product._id}`} className="text  ">

                        <Card.Text className=" text-center  "> {Product.Text} </Card.Text>

                    </Link>
                </Card.Body>

            </Card>

            {/* </Col>
        </Row> */}

        </Container>
    )
}

export default Product