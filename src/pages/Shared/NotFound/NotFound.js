import React from 'react';
import notFound from '../../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="404" />
        </div>
    );
};

export default NotFound;