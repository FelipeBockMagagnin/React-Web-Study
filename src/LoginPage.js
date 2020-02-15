import React, { Component } from 'react';

class LoginPage extends Component {

    render() {
        return <div className="container shadow-card center col-md-4" style={{ marginTop: 20, padding: 30 }}>
            <div className="container col-md-12">

                <br></br>

                Email: <input type="email" className='form-control'></input>

                <br></br>
                
                Password: <input type='password' className='form-control'></input>
            </div>

            <button className='btn btn-success' style={{ marginTop: 40}}>Login</button>

        </div>
    }
}

export default LoginPage;
