import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const [errMessage, setErrMessage] = useState({});
  const [Keys, setKeys] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user.email) {
    navigate(from, { replace: true });
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const requestedUser = {
      email,
      password,
    };

    await fetch(`https://opvoap-server.onrender.com/login`, {
      method: "POST",
      withCredntials: true,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log({email: data.email});
        // console.log(Cookies.get('jwt'));
        if (data.errors) {
          setKeys(Object.keys(data.errors));
          setErrMessage(data.errors);
          // console.log(errMessage);
        } else {
            Cookies.set("jwt", data.jwt);
            navigate("/", { replace: true });
        //   window.location.href = "/";
        }
      });

    // setTerms(!terms);
    // event.target.reset();
  };

  return (
    <div className="my-4 py-4">
      <h2 className="my-4">Please Login</h2>
      <form onSubmit={handleLogIn} className="w-50 mx-auto">
        <input
          className="w-100 p-1 mb-4"
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <input
          className="w-100 p-1 mb-4"
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />

        {Keys?.map((Key) => (
          <p className="text-danger">{errMessage[Key]}</p>
        ))}

        <input
          className="text-white w-100 p-1 bg-primary border-0 rounded"
          type="submit"
          value="Login"
        />
      </form>

      <p className="my-4 py-2">
        <span className="me-2">Don't have account?</span>
        <Link className="text-decoration-none text-success" to="/register">
          Please Register
        </Link>
      </p>
      {/* <p className='my-4'>
                <Link to="/forgetpassword" className='me-4 text-decoration-none text-danger'>Forget Password?</Link>
            </p> */}

      {/* <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Login;
