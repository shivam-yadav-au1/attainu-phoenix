import React from 'react';
import {connect} from 'react-redux';

import {squareCubeRootMapper} from '../Store.js';

class SquareRootButtonComponent extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("square root button clicked ...")
        this.props.dispatch({
            type:"SQUARE_ROOT"
        });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button className="btn btn-primary" onClick={this.handleClick}>SquareRoot</button>
                </div>
            </div>

        </div>
        )
    }
}

let SquareRoot = connect(squareCubeRootMapper)(SquareRootButtonComponent);

export {SquareRoot};