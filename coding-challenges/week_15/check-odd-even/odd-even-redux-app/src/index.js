import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { numberLiteralTypeAnnotation } from '@babel/types';
import { ENETUNREACH } from 'constants';

let oddEvenReducer = function (oldState, action) {

    let newState = {
        type: 'CHECK_NUMBER',
        number: 0,
        isOdd: false,
        isEven: false
    }
    // console.log("action number "+action.number)
    if (!oldState) {
        return newState;
    }

    if (action.type === 'CHECK_NUMBER') {
        if (action.number % 2 == 0) {
            newState.number = action.number;
            newState.isEven = true;
        } else {
            newState.isOdd = true;
        }
    }
    return newState;
}

let oddEvenStore = createStore(oddEvenReducer);

oddEvenStore.subscribe(function () {
    console.log(oddEvenStore.getState());
})

function oddEvenStoreMapper(state) {
    return state;
}

class OddEvenComponent extends React.Component {

    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.inputChange = this.inputChange.bind(this);

        this.state = {
            number: 0
        }
    }

    buttonClick() {
        console.log("button clicked ")
        this.props.dispatch({
            type: 'CHECK_NUMBER',
            number: this.state.number
        })
    }

    inputChange(event) {
        this.setState({ number: event.target.value });
    }

    render() {
        return (
            <div className="container-flow">
                <div className="row">

                    <div className="col-md-4 offset-md-4">
                        <input className="form-control" onChange={this.inputChange} type="number"></input>
                        <hr></hr>
                        <button className="btn btn-primary" onClick={this.buttonClick}>Check Odd Even</button>
                    </div>

                </div>
            </div>
        )
    }
}

let OddEven = connect(oddEvenStoreMapper)(OddEvenComponent);

class DisplayResult extends React.Component {

    constructor(props) {
        super(props)

    }

 

    render() {
        let result;
        if (this.props.isEven) {
            console.log("number is even")
            result = <h1>Number is Even</h1>
        }
        if (this.props.isOdd) {
            console.log("number is odd")
            result = <h1>Number is Odd</h1>
        }
        
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    {result}
                </div>

            </div>

        )
    }
}

let Display = connect(oddEvenStoreMapper)(DisplayResult);

class App extends React.Component {
    render() {
        return (
            <Provider store={oddEvenStore}>
                <OddEven />
                <Display />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));