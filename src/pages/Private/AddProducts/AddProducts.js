import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddProducts.css';

const AddProducts = () => {
    const [added, setAdded] = useState(false);
    const [error, setError] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (added) {
        navigate(from, { replace: true });
    }


    const handleAddProduct = async (event) => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure, you want to add this Fruit?');
        if (proceed) {

            const productName = event.target.name.value;
            const url = event.target.url.value;

            const newProduct = {
                name: productName,
                img: url,
                prices: {
                    Rangpur: event.target.rangpur.value || "comming soon...",
                    Dinajpur: event.target.dinajpur.value || "comming soon...",
                    Rajshahi: event.target.rajshahi.value || "comming soon...",
                    Bogura: event.target.bogura.value || "comming soon...",
                    Nator: event.target.nator.value || "comming soon...",
                    Sirajganj: event.target.sirajganj.value || "comming soon...",
                    Mymensingh: event.target.mymensingh.value || "comming soon...",
                    Jamalpur: event.target.jamalpur.value || "comming soon...",
                    Sherpur: event.target.sherpur.value || "comming soon...",
                    Dhaka: event.target.dhaka.value || "comming soon...",
                    Faridpur: event.target.faridpur.value || "comming soon...",
                    Tangail: event.target.tangail.value || "comming soon...",
                    Sylhet: event.target.sylhet.value || "comming soon...",
                    Moulvibazar: event.target.moulvibazar.value || "comming soon...",
                    Sunamganj: event.target.sunamganj.value || "comming soon...",
                    Chattogram: event.target.chattogram.value || "comming soon...",
                    Feni: event.target.feni.value || "comming soon...",
                    Noakhali: event.target.noakhali.value || "comming soon...",
                    Khulna: event.target.khulna.value || "comming soon...",
                    Jessore: event.target.jessore.value || "comming soon...",
                    Narail: event.target.noraile.value || "comming soon...",
                    Barishal: event.target.barishal.value || "comming soon...",
                    Barguna: event.target.barguna.value || "comming soon...",
                }
            }

            // console.log(newProduct);


            const Url = `https://opvoap-server.onrender.com/addproduct`;
            let jwt = Cookies.get('jwt');

            if (jwt !== undefined) {
                await fetch(Url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                        'cookies': `jwt=${jwt}`,
                    },
                    body: JSON.stringify(newProduct)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.updated) {
                        setAdded(true);
                        setError({});
                    }else {
                        setAdded(false);
                        setError({message: "Server side error!"});
                    }
                    console.log(data);
                });
            }else {
                setAdded(false);
                setError({message: "Please login!"});
            }
        }
    }


    return (
        <div className='mb-5'>
            <h2 style={{ backgroundColor: '#E8F0FE' }} className='w-50 mx-auto py-3 my-4 custom-wide'>নতুন পণ্য যোগ করুন</h2>
            <form onSubmit={handleAddProduct} className='w-50 mx-auto custom-wide'>
                <input
                    className='w-100 p-1 mb-2 '
                    type="text" name="name"
                    placeholder="পণ্যের নাম লিখুন" required />
                {/* <input
                    className='w-100 p-1 mb-2'
                    type="text" name="supplierName"
                    placeholder="তথ্য সরবরাহকারীর নাম লিখুন" required /> */}

                <input
                    className='w-100 p-1 mb-2'
                    type="url" name="url"
                    placeholder="পণ্যের ছবির লিংক এখানে দিন" required />

                <h3 className='mt-5'>বিভিন্ন স্থানে বর্তমান মূল্যের তালিকা</h3>



                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>রংপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="rangpur"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>দিনাজপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="dinajpur"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>রাজশাহীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="rajshahi"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বগুরার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="bogura"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নাটোরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="nator"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সিরাজগঞ্জের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sirajganj"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ময়মনসিংহের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="mymensingh"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>জামালপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="jamalpur"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>শেরপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sherpur"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ঢাকার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="dhaka"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ফরিদপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="faridpur"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>টাংগাইলের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="tangail"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সিলেটের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sylhet"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>মৌলভীবাজারের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="moulvibazar"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সুনামগঞ্জের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sunamganj"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>চট্রগ্রামের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="chattogram"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ফেনীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="feni"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নোয়াখালীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="noakhali"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>খুলনার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="khulna"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>যশোরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="jessore"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নরাইলের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="noraile"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বরিশালের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="barishal"
                        min={10} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বরগুনার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="barguna"
                        min={10} />
                </div>
                <input
                    className='text-white w-100 mt-4 py-3 bg-success border-0 rounded'
                    type="submit"
                    value="নতুন পণ্য যোগ করুন" />

            </form>

            {
                error.message && <p className="fs-2 mt-2 pt-2 text-danger">{error.message}</p>
            }
        </div>
    );
};

export default AddProducts;