import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// internal imports
import ProductDetail from '../Home/HomeProduct/HomeProduct';

const Products = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/products";

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
                        <ProductDetail key={product._id} product={product}></ProductDetail>
                    )
                } 
            </Row>
        </div>
    );
};

export default Products;