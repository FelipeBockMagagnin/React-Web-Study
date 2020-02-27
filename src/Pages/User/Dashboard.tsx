import React, { Component } from 'react';
import Axios from 'axios';
import Loader from '../Loader';

class Dashboard extends Component<{}, {}> {
    
    constructor(props){
        super(props);   
        console.log('a');
    }

    render() {
        return <div> 
            Dashboard under construction
            <Loader></Loader>
        </div>
    }

}

export default Dashboard;
