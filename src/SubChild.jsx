import React, { Component } from 'react'

class SubChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            p: this.props.item,
            i: this.props.index,
            description: "none"




         }
    }
    handleClick = () => {
         if(this.state.description==="none"){

        this.setState({description: "block"})
    }else{this.setState({description: "none"})
    }
    }

    render() { 
        return ( 
            <div className = "row col-4" onClick = {this.handleClick} value= {this.state.i} key = {this.state.i}>
                <div className="albumID col-2">{this.state.p.albumId}</div>
                <div className="photoID col-2">{this.state.p.id}</div>
                <div className="photoTitle col-8">{this.state.p.title}</div>
                <div className="photo col-12"><img src = {`${this.state.p.url}`} alt = "cannot show photo" width ="100%" height = "auto"></img></div>
                <div className="photoDetails col-12" ref = {this.state.i} style = {{display: this.state.description}}>The Thumbnail is Located at: {this.state.p.thumbnailUrl}</div>
            </div>
         );
    }
}
 
export default SubChild;