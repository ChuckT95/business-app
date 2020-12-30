import React, { Component } from 'react';
import SubNav from './SubNav';
import {connect} from 'react-redux';
class Login
 extends Component {
    constructor(props) {
        super(props);
  
    }

    //todo: offer Sign up with database. use form.
    render() { 
        return ( <div  className ="row col-9"> <SubNav></SubNav></div>
            
         );
    }
}
 
export default Login;