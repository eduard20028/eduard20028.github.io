import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className="error">
                <span>
                    <h1>404</h1>
                </span>
                <span><h1>Something is going wrong!</h1></span>
            </div>
        </div>
    );
}

export default ErrorIndicator;