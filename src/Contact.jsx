import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className ="row col-9">
            <h1>Contact Us:
                <span>
                    <ul className = 'col-12 justify-content-start'>
                        <li><a href = "https://www.linkedin.com/in/charles-taylor-253493176/">Check out my LinkedIn</a></li>
                        <li>email us at: ctaylor995a@gmail.com</li>
                        <li>Direct email box to be added</li>
                    </ul>
                </span>
            </h1>
        </div> );
    }
}
 
export default Contact;