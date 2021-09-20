import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";

import { DateTime } from "luxon";

import Interval from "luxon/src/interval.js";

import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  const [lastSavedTime, setLastSavedTime] = useState({});
  const [duration, setDuration] = useState({});

  // next save the duration on the database to update it or update the
  //days till depletion everytime you update the time
  const calculateTimeDifference = () => {
    let now = DateTime.local();

    let i = Interval.fromDateTimes(lastSavedTime, now);

    let duration = i.toDuration("seconds").toObject();

    let seconds = JSON.stringify(duration.seconds);

    setDuration(seconds);

    setLastSavedTime(DateTime.local());
  };

  console.log("duration in seconds", JSON.stringify(duration));

  console.log("last saved time", lastSavedTime);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  const { amountInStockTotal, consumptionPerDay } = product;

  product.sinceLastOrderDaysTillDepletion =
    amountInStockTotal / consumptionPerDay;

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
              sinceLastOrderDaysTillDepletion:
              {product.sinceLastOrderDaysTillDepletion}
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
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  onClick={calculateTimeDifference}
                >
                  Update time
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
