import React from 'react';
import { Link } from 'react-router-dom';
import LoginService from '../../Services/LoginService';

const navbar = () => {
    let login = new LoginService();
    return <nav className="navbar navbar-dark navbar-expand-lg sticky-top bg-dark flex-md-nowrap">
        <Link className="navbar-brand" to="/">GamePlayTime</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/games'>Games</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
            <span className="navbar-text">
                {(!login.isAuthenticated() ? <div>Não esta logado</div> : <div>Esta Logado</div>)}
            </span>
        </div>
    </nav>
};

export default navbar;
