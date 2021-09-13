import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";

import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>Category: {product.category}</ListGroup.Item>
            <ListGroup.Item>
              Days till depletion: {product.daysTillDepletion}
            </ListGroup.Item>
            <ListGroup.Item>Unit: {product.unit}</ListGroup.Item>
            <ListGroup.Item>
              Tests per unit: {product.testsPerUnit}
            </ListGroup.Item>
            <ListGroup.Item>
              Consumption per day: {product.consumptionPerDay}
            </ListGroup.Item>
            <ListGroup.Item>
              Total amount in stock: {product.amountInStockTotal}
            </ListGroup.Item>
            <ListGroup.Item>
              Recent order amount: {product.recentOrderAmount}
            </ListGroup.Item>
            <ListGroup.Item>
              Recent order date: {product.recentOrderDate}
            </ListGroup.Item>
            <ListGroup.Item>
              Reorder amount: {product.reorderAmount}
            </ListGroup.Item>
            <ListGroup.Item>
              Recent order date: {product.recentOrderDate}
            </ListGroup.Item>
            <ListGroup.Item>Reorder date: {product.reorderDate}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.amountInStockTotal > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.amountInStockTotal === 0}
                >
                  Add To Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
