import Cookies from 'js-cookie';
import React from 'react';
import { useParams } from 'react-router-dom';

export const UpdateProduct = () => {

    const {id} = useParams();
    // console.log(id);

    const handleUpdatePrices = async (event) => {
        event.preventDefault();
        // console.log(id);
        const proceed = window.confirm("আপনি কী এই পণ্যটির মূল্য গুলো আপডেট করতে চাচ্ছেন?");
        if (proceed) {
            const product = {
                prices: {}
            }

            console.log("Rangpur", event.target.rangpur.value);

            if (event.target.rangpur.value) {
                product.prices.Rangpur = event.target.rangpur.value;
            }
            if (event.target.dinajpur.value) {
                product.prices.Dinajpur = event.target.dinajpur.value;
            }
            if (event.target.rajshahi.value) {
                product.prices.Rajshahi = event.target.rajshahi.value;
            }
            if (event.target.bogura.value) {
                product.prices.Bogura = event.target.bogura.value;
            }
            if (event.target.nator.value) {
                product.prices.Nator = event.target.nator.value;
            }
            if (event.target.sirajganj.value) {
                product.prices.Sirajganj = event.target.sirajganj.value;
            }
            if (event.target.mymensingh.value) {
                product.prices.Mymensingh = event.target.mymensingh.value;
            }
            if (event.target.jamalpur.value) {
                product.prices.Jamalpur = event.target.jamalpur.value;
            }
            if (event.target.sherpur.value) {
                product.prices.Sherpur = event.target.sherpur.value;
            }
            if (event.target.dhaka.value) {
                product.prices.Dhaka = event.target.dhaka.value;
            }
            if (event.target.faridpur.value) {
                product.prices.Faridpur = event.target.faridpur.value;
            }
            if (event.target.tangail.value) {
                product.prices.Tangail = event.target.tangail.value;
            }
            if (event.target.sylhet.value) {
                product.prices.Sylhet = event.target.sylhet.value;
            }
            if (event.target.moulvibazar.value) {
                product.prices.Moulvibazar = event.target.moulvibazar.value;
            }
            if (event.target.sunamganj.value) {
                product.prices.Sunamganj = event.target.sunamganj.value;
            }
            if (event.target.chattogram.value) {
                product.prices.Chattogram = event.target.chattogram.value;
            }
            if (event.target.feni.value) {
                product.prices.Feni = event.target.feni.value;
            }
            if (event.target.noakhali.value) {
                product.prices.Noakhali = event.target.noakhali.value;
            }
            if (event.target.khulna.value) {
                product.prices.Khulna = event.target.khulna.value;
            }
            if (event.target.jessore.value) {
                product.prices.Jessore = event.target.jessore.value;
            }
            if (event.target.noraile.value) {
                product.prices.Narail = event.target.noraile.value;
            }
            if (event.target.barishal.value) {
                product.prices.Barishal = event.target.barishal.value;
            }
            if (event.target.barguna.value) {
                product.prices.Barguna = event.target.barguna.value;
            }

            // console.log('delete', id);
            const url = `https://opvoap-server.onrender.com/updateproduct/${id}`;
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch(url, {
                    method: 'PATCH',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                        'cookies': `jwt=${jwt}`,
                    },
                    body: JSON.stringify(product)
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
    <div className='mb-5'>
            <h2 style={{ backgroundColor: '#E8F0FE' }} className='w-50 mx-auto py-3 my-4 custom-wide'>বিভিন্ন স্থানে বর্তমান মূল্য প্রদান করুন</h2>
            <form onSubmit={handleUpdatePrices} className='w-50 mx-auto custom-wide'>

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
                    value="নতুন মূল্য গুলো আপডেট করুন" />

            </form>

            {
                // error.message && <p className="fs-2 mt-2 pt-2 text-danger">{error.message}</p>
            }
        </div>
  )
}

export default UpdateProduct;