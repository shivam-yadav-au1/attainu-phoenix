import React from 'react'
import ReactDOM from 'react-dom'

class Heading extends React.Component {
    render() {
        return (
            <h3>Check Number is Even of Odd</h3>
        )
    }
}

class InputeText extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Number</label>
                <input className="form-control" type="number" onChange={this.props.onChange}></input>
            </div>

        )

    }
}
class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.onClick}>Submit</button>
        )

    }
}
class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        this.getNumber = this.getNumber.bind(this);
        this.checkOddEven = this.checkOddEven.bind(this);

    }

    getNumber(event) {
        console.log("getNumber is executed ...")
        this.setState({ number: event.target.value });
    }

    checkOddEven() {
        if (this.state.number % 2 == 0) {
            alert("Number is Even")
        } else {
            alert("Number is not Even");
        }
    }


    render() {
        // console.log(this.state.number)
        return (
            <div className="container">

                <div className="row">
             
                    <div className="col-md-5 offset-md-4">
                    <Heading />
                        <InputeText onChange={this.getNumber} />
                        <Button onClick={this.checkOddEven} />
                    </div>

                </div>
            </div>
        )


    }
}

ReactDOM.render(<App />, document.getElementById('root'));