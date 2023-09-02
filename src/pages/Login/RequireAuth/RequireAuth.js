import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [user, setUser] = useState({});
    const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            if (jwt !== undefined) {
                await fetch('https://opvoap-server.onrender.com/curuser', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'cookies': `jwt=${jwt}`,
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    // console.log("auth require: ", data);
                    if (!data.email) {
                        // console.log("condition");
                        return <Navigate to="/login" state={{ from: location }} replace />;
                    }
                })
            } else {
                setUser({});
            }
        })();
        
    }, []);

    // if (loading) {
    //     return <Loading></Loading>
    // }

    // console.log("auth require: ", user);

    // if (!user.email) {
    //     console.log("condition");
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }

    return children;
};

export default RequireAuth;