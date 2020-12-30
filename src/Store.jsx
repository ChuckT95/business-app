import React, { Component } from 'react';
import SubChild from './SubChild';
import {connect} from 'react-redux';

class Store extends Component {
    constructor(props) {
        super(props);
    }

    getData(){
        fetch("https://jsonplaceholder.typicode.com/photos"
          ).then((success) => success.json()).then(data => {
            this.props.dispatch({type: "OBJECTS", payload: data});
            console.log(data);
          })
          
    }
    //todo Jquery filler database , add components dynamically, have sidebar with cart, and checkout button
    componentDidMount(){
        this.getData();
    }


    render() { 
        return ( <div className ="row col-9"><div className ="row col-12">{this.props.objects.map((p, i) =>(
            <SubChild item = {p} index = {i}/>
        ))}</div></div> );
    }
}
 
const mapStateToProps = (state) => ({
    login: state.loggedin,
    cart: state.cart,
    username: state.username,
    password: state.password,
    objects: state.objects
  })
export default connect(mapStateToProps)(Store);