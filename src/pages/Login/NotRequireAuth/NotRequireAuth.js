import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotRequireAuth = ({ children }) => {
    // const [user, setUser] = useState({});
    // const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            // console.log(jwt);
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
                    if (data.email) {
                        console.log(data.email);
                        // navigate("/", { replace: true });
                    }
                    console.log("error from header: ", data);
                })
            }
        })();
        
    }, [navigate]);

    return children;
};

export default NotRequireAuth;