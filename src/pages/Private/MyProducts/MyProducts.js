import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const MyProducts = () => {
    const [user, setUser] = useState({});
    // const navigate = useNavigate();

    // console.log("My Fruits");

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch('https://opvoap-server.onrender.com/myproducts', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                        'cookies': `jwt=${jwt}`,
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    // console.log("data: ", data);
                    // console.log(Cookies.get());
                })
            } else {
                setUser({});
            }
        })();
        
    }, []);

    const handleDelete = async (id) => {
        const proceed = window.confirm("আপনি কী এই পণ্যটি ডিলিট করতে চাচ্ছেন?");
        if (proceed) {
            // console.log('delete', id);
            const url = `https://opvoap-server.onrender.com/deleteproduct/${id}`;
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch(url, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                        'cookies': `jwt=${jwt}`,
                    },
                })
                .then(res => res.json()) 
                .then(data => {
                    console.log("Result: ", data);
                    if (data.result) {
                        window.location.reload();
                    }
                });
            }
        }
    }



    return (
        <div className='my-5 mx-4 px-4'>
            <Row xs={1} md={3} className="g-4">
                {
                    user?.products?.map(product => 
                        <Col key={product._id}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body className='my-4'>
                                <Card.Title>Name: {product.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className='mb-4' variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </Card.Footer>
                        </Col>
                    )
                } 
            </Row>
        </div>
    );
};

export default MyProducts;