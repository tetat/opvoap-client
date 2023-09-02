import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsForUpdate = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/fruits";

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://opvoap-server.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            // console.log(data.products); 
        });
    },[]);

    return (
        <div className='my-5 mx-4 px-4'>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => 
                        <Col key={product._id}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body className='mb-4 mt-2'>
                                <Card.Title>Name: {product.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/updateprices/${product._id}`}>Price Update</Link>
                            </Card.Footer>
                        </Col>
                    )
                } 
            </Row>
        </div>
    );
};

export default ProductsForUpdate;