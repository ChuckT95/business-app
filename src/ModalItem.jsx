import React, { Component , useState} from 'react';
import{Modal, Button} from 'react-bootstrap';
import SubNav from './SubNav';
import {connect} from 'react-redux';
import TopLog from './TopLog';


class ModalItem extends Component {

  
    constructor(props) {
        super(props);
        
    }

    clickOff(){

      this.props.dispatch({type: "MODALCLICKOFF"});

    }
componentDidUpdate(){
  
}    
    render() { 
        return ( 
          <Modal
          
          {...this.props}
          handleClose={() => this.clickOff()}
          style={{opacity:1}}
          fade={false}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Log In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <TopLog/>
            </div>

            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.clickOff()}>Close</Button>
          </Modal.Footer>
        </Modal>
         );
    }
}



const mapStateToProps = (state) => ({
  login: state.loggedin,
  cart: state.cart,
  username: state.username,
  show: state.showmodal

})
 
export default connect(mapStateToProps)(ModalItem);