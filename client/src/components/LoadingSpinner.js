import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

function LoadingSpinner() {
    return (
        <div>
            <div className="align-items-center spinner">
                <Spinner animation="border" variant="dark" />
            </div>
            <h2>Loading....</h2>
        </div>
    )

}

export default LoadingSpinner;