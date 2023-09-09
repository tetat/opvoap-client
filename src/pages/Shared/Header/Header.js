import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // const [user, loading, error] = useAuthState(auth);
    const [user, setUser] = useState({});
    // const [logout, setLogout] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            let jwt = Cookies.get('jwt');
            // console.log("Cookie: ", jwt);
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
                    console.log("error: ", data);
                    // console.log(Cookies.get());
                })
            } else {
                setUser("");
            }
        })();
        
    }, [navigate]);
    
    // console.log({login});

    // if (loading) {
    //     return <Loading></Loading>
    // }

    const handleLogOut = async (e) => {
        e.preventDefault();
        
        Cookies.remove("jwt");
        setUser("");
        navigate("/", { replace: true });
    }

    return (
        <Navbar style={{ backgroundColor: '#ddd' }} className='sticky-top' expand="lg">
            <Container>
                <Navbar.Brand className='text-success fs-3 fw-semibold' href="/">ন্যায্যমূল্য কৃষকের অধিকার </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='menu-item me-4 my-2 px-4' href="/home">হোম</Nav.Link>
                        <Nav.Link className='menu-item me-4 my-2' href="/products">সকল পণ্য</Nav.Link>
                    </Nav>
                    {/* <Nav className="me-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                গ্রাহক
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/users">সকল গ্রাহক</Dropdown.Item>
                                <Dropdown.Item href="/myself">আমার প্রোফাইল</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav> */}
                    <Nav className="mx-auto">
                        {
                            user.role === "admin" && <><Nav.Link className='menu-item me-4 my-2' href="/updateproducts">মূল্য আপডেট</Nav.Link>
                            <Nav.Link className='menu-item me-4 my-2' href="/addproducts">পণ্য যোগ</Nav.Link>
                            <Nav.Link className='menu-item me-4 my-2' href="/myproducts">আমার পণ্য</Nav.Link></>
                        }
                        {
                            user.email ?
                                <>
                                    <input onClick={handleLogOut} className='btn btn-warning me-4 my-2' type="button" value="লগ আউট" />
                                </>
                                :
                                <>
                                    <Nav.Link className='menu-item me-4 mb-2' href="/register">রেজিষ্টার</Nav.Link>
                                    <Nav.Link className='me-4 menu-item mb-2' href="/login">লগইন</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;