import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({});
    const [passMatch, setPassMatch] = useState(true);
    const [errMessage, setErrMessage] = useState({});
    const [Keys, setKeys] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    if (user.email) {
        navigate(from, { replace: true });
    }

    // if (loading) {
    //     return <Loading></Loading>
    // }



    const handleSubmit = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setPassMatch(false);
        }
        else {
            const requestedUser = {
                firstName,
                lastName,
                email,
                password,
            }

            await fetch(`https://opvoap-server.onrender.com/signup`, {
                method: 'POST',
                withCredntials: true,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(requestedUser)
            })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                // console.log(Cookies.get('jwt'));
                if (data.errors) {
                    setKeys(Object.keys(data.errors));
                    setErrMessage(data.errors);
                    // console.log(errMessage);
                } else {
                    Cookies.set("jwt", data.jwt);
                    navigate('/', { replace: true });
                    // window.location.reload(true);
                }
            });

            // setTerms(!terms);
            // event.target.reset();
        }

    }

    return (
        <div className='my-4'>
            <h2 className='my-4'>Please Register</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="firstName"
                    placeholder="Enter First Name" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="lastName"
                    placeholder="Enter Last Name" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="email" name="email"
                    placeholder="Enter Email" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="password" name="password"
                    placeholder="Enter Password" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="password" name="confirmPassword"
                    placeholder="Confirm Password" required />

                {/* <div className='w-100 p-1 mb-2 text-start'>
                    <input onClick={() => setTerms(!terms)} type="checkbox" id="check" />
                    <label className={terms ? 'text-success' : 'text-danger'} htmlFor="check">&nbsp;&nbsp;Accept Terms & Conditions</label>
                </div> */}

                {
                    (passMatch === false) && <p className='text-danger'>Password did not match!!!</p>
                }
                {
                    
                    Keys?.map(Key => <p className='text-danger'>{errMessage[Key]}</p>)
                }

                <input
                    className='text-white w-100 p-1 bg-primary border-0 rounded'
                    type="submit"
                    value="Register" />

            </form>
            <p className='my-3'>
                <span className='me-2'>Already have an account?</span>
                <Link className='text-decoration-none text-success' to="/login">Please Login</Link>
            </p>

        </div>
    );
};

export default Register;