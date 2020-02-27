import React, { Component } from 'react';
import LoginService from '../Services/LoginService';
import { Redirect } from 'react-router-dom';

class Welcome extends Component<{}, {}> {
    render() {
        const login = new LoginService();   
        if(login.isAuthenticated()){
            return <Redirect to='/games'  />
        }
        
        return <div>
            welcome

            <br></br>

            Please login to access features
        </div>
    }
}

export default Welcome;
