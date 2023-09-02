import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const ProductDetail = ( {product} ) => {
    // console.log(fruit);
    const url = `/products/${product._id}`;
    return (
        <Col key={product._id}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body className='mb-4 mt-2'>
                <Card.Title>Name: {product.name}</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
            </Card.Body>
            <Card.Footer>
                <Button className='my-2' variant="warning" href={url}>See Prices</Button>
            </Card.Footer>
        </Col>
    );
};

export default ProductDetail;