import React from 'react';
import {connect} from 'react-redux';

import {squareCubeRootMapper} from '../Store.js';

class SquareButtonComponent extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("Square Button Clicked ")
        this.props.dispatch({
            type:"SQUARE"
        });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button className="btn btn-primary" onClick={this.handleClick}>Square</button>
                </div>
            </div>

        </div>
        )
    }
}

let SquareButton = connect(squareCubeRootMapper)(SquareButtonComponent);

export {SquareButton};