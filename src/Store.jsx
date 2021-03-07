import React, { Component } from 'react';
import SubChild from './SubChild';
import {connect} from 'react-redux';
//todo update this and index.js, so it doesn't creash when login used while in store store.
// looks like maybe subchild is overwriting the info on the redux state(unlikely because its local), or the whole 
//redux state is crashing when the modal comes up to promt login, or check if you are already loggedin.
//probably best to move objects here
class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [] 
        }
    }

    getData(){
        fetch("https://jsonplaceholder.typicode.com/photos"
          ).then((success) => success.json()).then(data => {
              
            this.setState({objects: data});
            console.log(data);
          })
          
    }
    //todo Jquery filler database , add components dynamically, have sidebar with cart, and checkout button
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(){
        this.getData();
    }


    render() { 
        return ( <div className ="row col-9"><div className ="row col-12">{this.state.objects.map((p, i) =>(
            <SubChild item = {p} index = {i}/>
        ))}</div></div> );
    }
}
 
const mapStateToProps = (state) => ({
    login: state.loggedin,
    cart: state.cart,
    username: state.username,
    password: state.password,
  })
export default connect(mapStateToProps)(Store);