import React, { Component } from 'react'
import {connect} from 'react-redux';

class TopLogged extends Component {
    constructor(props) {
        super(props);

    }
    logout(){
        this.props.dispatch({type: "LOGOUT"});
    }

    render() { 
        return ( <div>
            <h1>Hello, {this.props.username}:  you are logged in</h1>
            <button onClick={() => {this.logout()}}>Log out</button>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    login: state.loggedin,
    cart: state.cart,
    username: state.username,
    password: state.password
  })
export default connect(mapStateToProps)(TopLogged);