import React, { Component } from 'react';
import Axios from 'axios';


type LoginPageState = {
    apiUrl: string,
    email: string,
    password: string
}

class LoginPage extends Component<{}, LoginPageState> {
    
    constructor(props){
        super(props);   

        this.state = {
            apiUrl: 'https://gameplaytime-api.herokuapp.com/api/user',
            email: '',
            password: ''
        }
    }

    handleChangeEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return <div className="container shadow-card center col-md-4" style={{ marginTop: 20, padding: 30 }}>
            <div className="container col-md-12">

                <br></br>

                Email: <input name='email' type="email" className='form-control' onChange={this.handleChangeEmail}></input>

                <br></br>
                
                Password: <input name='password' type='password' className='form-control' onChange={this.handleChangePassword}></input>
            </div>

            <button className='btn btn-secondary' style={{marginTop: 40}} onClick={this.registerLogin}>Register</button>
            <button className='btn btn-success' style={{ marginTop: 40, marginLeft: 20}} onClick={this.validateLogin}>Login</button>

        </div>
    }

    registerLogin = () => {
        if(!this.validateForm()){
            return;
        }

        Axios.post(this.state.apiUrl, { email: this.state.email})
        .then(data => {
            console.log('before register data', data);
            console.log('data length', data.data.length);

            if(data.data.length === 0){
                Axios.put(this.state.apiUrl, {email: this.state.email, password: this.state.password})
                .then(data => {
                    console.log('put login data', data);
                    alert('Register succefull');
                })
                .catch(error =>{
                    console.log('put login error', error);
                    alert('error');
                })

                return;               
            }

            alert('login already exists');
            return;            
        })
        .catch(error => {
            console.log(error);
            alert('error');
        })
    }

    validateLogin = () => {
        if(!this.validateForm()){
            return;
        }

        Axios.post(this.state.apiUrl, { email: this.state.email})
        .then(data =>{
            console.log(data);
            if(data.data.length === 0){
                alert("Email " + this.state.email + " don't found on our database");
                return;
            }

            if(data.data.password === this.state.password){
                alert("Succefull login as: " + data.data.email);
                return;
            }

            alert("Incorrect Password");
        })
        .catch(error =>{
            alert("Error");
            console.log(error);
        });
    }

    validateForm = ():boolean => {
        if(!this.validateEmail(this.state.email)){
            alert('Invalid email input');
            return false;
        }

        if(this.state.password.length === 0){
            alert('Please insert a password');
            return false;
        }
        return true;
    }

    validateEmail = (email: string): boolean => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            return true;
        }
        return false;
    }
}

export default LoginPage;
