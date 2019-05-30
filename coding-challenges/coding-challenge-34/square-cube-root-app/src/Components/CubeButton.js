import React from 'react';
import {connect} from 'react-redux';

import {squareCubeRootMapper} from '../Store.js';

class CubeButtonComponent extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("cube button clicked ")
        this.props.dispatch({
            type:"CUBE"
        });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button className="btn btn-primary" onClick={this.handleClick}>Cube</button>
                </div>
            </div>

        </div>
        )
    }
}

let CubeButton = connect(squareCubeRootMapper)(CubeButtonComponent);

export {CubeButton};