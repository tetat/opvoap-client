import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductsDetail.css';

const ProductsDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const url = `https://opvoap-server.onrender.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data.product);
                setPrices(data.product.prices);
                // console.log(data.product.prices);
            });
    });

    // console.log("Prices: ", prices.Dinajpur);

    return (
        <div className='w-50 mt-4 pt-4 mx-auto mb-5 custom-wide'>
            <Card className='bg-light'>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title style={{ backgroundColor: '#E7DFCC' }} className='fs-2 py-4 rounded mb-4'>পণ্যের নাম: {product.name} <br /> <span className='fs-6'>তথ্য সরবরাহকারী: {product.supplier?.firstName + " " + product.supplier?.lastName}</span></Card.Title>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>রংপুর বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text> রংপুর : {prices.Rangpur} <span style={{ 'float': 'right' }} >টাকা / মণ</span></Card.Text>
                    <Card.Text> দিনাজপুর : {prices.Dinajpur} <span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>রাজশাহী বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>রাজশাহী: {prices.Rajshahi}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>বগুড়া: {prices.Bogura}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নাটোর: {prices.Nator}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>সিরজগঞ্জ: {prices.Sirajganj}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>ময়মনসিংহ বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>ময়মনসিংহ: {prices.Mymensingh}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>জামালপুর: {prices.Jamalpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>শেরপুর: {prices.Sherpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>ঢাকা বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>ঢাকা: {prices.Dhaka}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>ফরিদপুর: {prices.Faridpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>টাংগাইল: {prices.Tangail}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>সিলেট বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>সিলেট: {prices.Sylhet}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>মৌলভী বাজার: {prices.Moulvibazar}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>সুনামগঞ্জ: {prices.Sunamganj}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>চট্টগ্রাম বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>চট্টগ্রাম: {prices.Chattogram}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>ফেনী: {prices.Feni}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নোয়াখালী: {prices.Noakhali}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>খুলনা বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>খুলনা: {prices.Khulna}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>যশোর: {prices.Jessore}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নড়াইল: {prices.Narail}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>বরিশাল বিভাগের জেলা গুলোতে {product.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>বরিশাল: {prices.Barishal}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>বরগুনা: {prices.Barguna}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                </Card.Body>
            </Card >
        </div >
    );
};

export default ProductsDetail;