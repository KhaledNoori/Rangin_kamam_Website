import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ product }) {

    return (

        <Card className="">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body>
                <Card.Title as="div" className="title text-center fw-bolder text-dark fs-5">{product.Name}</Card.Title>

                <Link to={`/product/${product._id}`} className="text   ">

                    <Card.Text className=" text-center  "> {product.Text} </Card.Text>

                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product