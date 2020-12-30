import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import SubNav from './SubNav'
import {Glyphicon, Button, Dropdown} from 'react-bootstrap';
import ModalItem from './ModalItem'
import {connect} from 'react-redux';



class Navigation extends Component {
    constructor(props) {
        super(props);
        }
        toggleModal = () => {
           if(!this.props.login){ 
           this.props.showmodal ? this.props.dispatch({type: "MODALCLICKOFF"}) : this.props.dispatch({type: "MODALCLICKON"});
           }else{this.logout()}
        };
        inOrOut = () => {
        if(!this.props.login){
            return "Log in";
        }else{
            return "Log out";
        }
        }
        logout(){
            this.props.dispatch({type: "LOGOUT"});
        }
    render() { 
        return ( 
            <>
            
            <nav className = "row col-12 navbar navbar-primary fixed-top bg-light">

                <div className = "row col-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Directory
                        </Dropdown.Toggle> 
                        <Dropdown.Menu>
                            <Dropdown.Item> <Link to = '/' className = "col-3"><span className="glyphicon glyphicon-home"></span>  Home</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to = 'Store' className = "col-3"><span className="glyphicon glyphicon-piggy-bank"></span>   Store</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to = 'Contact' className = "col-3"><span className="glyphicon glyphicon-phone"></span>   Contact Me</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to = 'Login' className = 'col-3' ><span className="glyphicon glyphicon-user" ></span>   Log In or Sign up</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className = "row col-8">
                <span className="glyphicon glyphicon-asterisk"></span> This is where a logo or trademark would go

                </div>
                <div className = "row col-2">
                
                <Button variant = 'primary' onClick={() => {this.toggleModal()}}>{this.inOrOut()}</Button>
                
                
                </div>
                <ModalItem ></ModalItem>

            
            </nav>
</>


         );
    }
}
const mapStateToProps = (state) => ({
    login: state.loggedin,
    cart: state.cart,
    username: state.username,
    showmodal: state.showmodal
  
  })
export default connect(mapStateToProps) (Navigation);