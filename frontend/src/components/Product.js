import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <ListGroup variant='flush'>
          <ListGroup.Item>{product.category}</ListGroup.Item>
          <ListGroup.Item>
            Days left: {product.daysTillDepletion}
          </ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <Card.Text as='h3'>L.E. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
