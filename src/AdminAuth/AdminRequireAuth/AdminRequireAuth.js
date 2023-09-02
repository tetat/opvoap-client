import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { CardGroup } from 'react-bootstrap';
import Admin from './Admin';
import './AdminRequireAuth.css';

const AdminRequireAuth = ({ children }) => {
    const [user, setUser] = useState({});
    const [admins, setAdmins] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch('https://opvoap-server.onrender.com/curuser', {
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
                    // console.log(data);
                    // console.log(Cookies.get());
                })
            } else {
                setUser({});
            }
        })();
        
    }, []);

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch('https://opvoap-server.onrender.com/admins', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                        'cookies': `jwt=${jwt}`,
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setAdmins(data);
                    // console.log(data);
                    // console.log(Cookies.get());
                })
            } else {
                setAdmins([]);
            }
        })();
        
    }, []);

    // console.log("admin require:", user);

    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (user.role !== 'admin') {
        return (
            <div className='my-3 w-75 mx-auto'>
                <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>
                <CardGroup>
                    {
                        admins.map(admin => 
                            <Admin key={admin._id} admin={admin}></Admin>
                        )
                    } 
                </CardGroup>
            </div>
        )
    }

    return children;
};

export default AdminRequireAuth;