import React from 'react';
import { connect } from 'react-redux';
import { squareCubeRootMapper } from '../Store.js'

class InputComponent extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.numberChanged = this.numberChanged.bind(this);
    }

    numberChanged(event) {
        console.log(event.target.value);
        let number = parseInt(event.target.value);
        if (isNaN(number)) {
            number = 0;
        }

        this.props.dispatch({
            type: "NUMBER_CHANGED",
            typedNumber: number
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <input onChange={this.numberChanged} type="number" />
                    </div>

                </div>

            </div>

        )
    }
}
let Input = connect(squareCubeRootMapper)(InputComponent);
export { Input };


