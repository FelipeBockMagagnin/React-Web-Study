import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return <nav className="navbar navbar-dark navbar-expand-lg sticky-top bg-dark flex-md-nowrap">
            <Link className="navbar-brand" to="/">GamePlayTime</Link>
        </nav>
};

export default navbar;
