import React from 'react';
import { Card } from 'react-bootstrap';


const Admin = ( {admin} ) => {
    // console.log(fruit);
    return (
        <Card>
            {/* <Card.Img variant="top" src={admin.img} /> */}
            <Card.Body>
                <Card.Title>{admin.firstName + " " + admin.lastName}</Card.Title>
                <Card.Text>
                    {admin.email}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Plese contact to email.</small>
            </Card.Footer>
        </Card>
    );
};

export default Admin;