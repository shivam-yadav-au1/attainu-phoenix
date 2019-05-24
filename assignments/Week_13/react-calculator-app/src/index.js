import React from 'react';
import ReactDOM from 'react-dom'

class InputNumber extends React.Component {
    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="number" onChange={this.props.onChange}></input>
            </div>

        )
    }
}

class Operation extends React.Component {
    render() {
        return (
            <button className="btn btn-light" onClick={this.props.onClick} style={{marginBottom:'10px'}}>{this.props.operationName}</button>
        )
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        }
        this.number1Changed = this.number1Changed.bind(this);
        this.number2Changed = this.number2Changed.bind(this);
        this.addOperation = this.addOperation.bind(this);
        this.subtraction = this.subtraction.bind(this);
        this.multiplication = this.multiplication.bind(this)
        this.division = this.division.bind(this);

    }

    number1Changed(event) {
        this.setState({ number1: parseInt(event.target.value) })
    }
    number2Changed(event) {
        this.setState({ number2: parseInt(event.target.value) });
    }

    addOperation() {
        let number1 = this.state.number1;
        let number2 = this.state.number2;

        this.setState({ result: number1 + number2 });
    }
    subtraction() {
        let number1 = this.state.number1;
        let number2 = this.state.number2;

        this.setState({ result: number1 - number2 });
    }

    multiplication() {
        let number1 = this.state.number1;
        let number2 = this.state.number2;

        this.setState({ result: number1 * number2 });
    }
    division() {
        let number1 = this.state.number1;
        let number2 = this.state.number2;

        this.setState({ result: Number.parseFloat(number1/ number2).toFixed(2)});
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '10%' }}>
                <div className="row">
                    <div className="col-md-4 offset-md-4" style={{backgroundColor:'teal'}}>
                        <h1>Calculator</h1>
                        <InputNumber onChange={this.number1Changed} />
                        <InputNumber onChange={this.number2Changed} />
                        {/* <Output result="Output"/> */}
                        <h1>{this.state.result}</h1>
                        <div className="row justify-content-around" >
                            <Operation operationName="+" onClick={this.addOperation} />
                            <Operation operationName="-" onClick={this.subtraction} />
                            <Operation operationName="x" onClick={this.multiplication} />
                            <Operation operationName="/" onClick={this.division} />
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));