import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <ListGroup variant='flush'>
          <ListGroup.Item>{product.category}</ListGroup.Item>
          <ListGroup.Item>other items</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <Card.Text as='h3'>L.E. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
