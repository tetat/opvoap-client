import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeProduct from './HomeProduct/HomeProduct';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://opvoap-server.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            // console.log(data.fruits);
        });
    },[]);

    let productsLength = products.length;
    if (productsLength > 12) productsLength = 12;
    
    return (
        <div>
            <Banner></Banner>
            <marquee style={{ width: '73%' }} className="text-success"> <h2 className='my-5'>আপনি যে পণ্যটির দাম যাচাই করতে চাচ্ছেন সেই পণ্যটির বিস্তারিত দেখুন </h2></marquee>
            <div className='my-4 ms-5 me-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0, productsLength)?.map(product => 
                            <HomeProduct key={product._id} product={product}></HomeProduct>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;