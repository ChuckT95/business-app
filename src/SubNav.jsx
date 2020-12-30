import React, { Component } from 'react';
import TopLog from './TopLog'
import TopLogged from './TopLogged'
import {connect} from 'react-redux';

class SubNav extends Component {

    constructor(props) {
        super(props);


    }

    



    func(){
        if(this.props.loggedin){
            return <TopLogged/>
        }else{
            return <TopLog/> 
        }
    }

    render() { 
        return ( 
        <div className = "row col-12">
            {this.func()}
        </div>
         );
    }
}
const mapStateToProps = (state) => ({
    loggedin: state.loggedin,
    cart: state.cart,
    username: state.username,
    password: state.password
  })

export default connect(mapStateToProps)(SubNav);