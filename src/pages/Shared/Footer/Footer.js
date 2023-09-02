import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-info pt-5' style={{ height: '120px' }}>
            <p>copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;