import React from 'react';

import {connect} from 'react-redux';

import {squareCubeRootMapper} from '../Store.js';

class DisplayComponent extends React.Component {

    
    render() {
       
        return(
            <h1>{this.props.answer}</h1>
        )
    }
}
let Display = connect(squareCubeRootMapper)(DisplayComponent);

export {Display};