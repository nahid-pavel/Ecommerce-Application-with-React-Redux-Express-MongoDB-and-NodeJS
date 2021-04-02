import React from 'react';
import one from '../assets/images/one.svg';
import './_loading.css';


const Loading = () => {
    return (
        <div className="global-loading-css">
            <img width="80" height="80" src={one} alt="loading" />
        </div>

    )

}

export default Loading;