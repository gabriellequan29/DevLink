import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">DevLink</h1>
                    <p className="lead">
                        Create a developer profile, share job opportunities with
                        other developers
                    </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary mx-2">Sign Up</Link>
                        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing