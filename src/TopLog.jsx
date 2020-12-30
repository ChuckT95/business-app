import React, { Component} from 'react';
import {connect} from 'react-redux';
 
class TopLog extends Component {

    constructor(props) {
        super(props);
        

    }
    // username = React.useRef();
    // password = React.useRef();  
    
    actionHandle(e){
        e.preventDefault();
        let uname = this.refs.username.value;
        let pas = this.refs.password.value;

        //todo : account check with database here


        this.props.dispatch({type: "LOGIN", payload: uname});
        


    } 
    render() { 
        return ( <div  className = 'row col-12'>
            
            <form onSubmit={e => {
                this.actionHandle(e) }}>
            <table><tbody>
                    <tr>
                        <td>
                            <input placeholder='Username' type="text" ref='username'/>
                        </td>
                   </tr>                         
                   <tr>
                    <td>
                        <input placeholder='Password'  type="password"  ref='password'/>
                    </td> 
                   
                    </tr>
                    <tr><td>
                        <button className ="btn btn-primary" type ="submit">Log In</button>
                    </td></tr>
                    </tbody>
                
                   
                
                
                    </table>
            </form>
        </div>
         );
    }
}
const mapStateToProps = (state) => ({
    login: state.loggedin,
    cart: state.cart,
    username: state.username,
    password: state.password
  })
export default connect(mapStateToProps)(TopLog);