import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [user, setUser] = useState(true);
    // const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            // console.log("ok");
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
                    console.log("auth require: ", data);
                    if (!data.email) {
                        // console.log("condition");
                        navigate("/login", { replace: true });
                        setUser(false);
                    }else {
                        setUser(true);
                    }
                })
            }
        })();
    });

    console.log(user);

    if (!user) {
        // <Navigate to="/login" state={{ from: location }} replace />;
        navigate("/login", { replace: true });
    }

    return children;
};

export default RequireAuth;