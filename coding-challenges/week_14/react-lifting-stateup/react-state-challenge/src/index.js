import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            heading:''
        }
        this.updateHeading = this.updateHeading.bind(this);
    }

    updateHeading(heading){
        console.log("updateHeading executed ....");
        this.setState({heading:heading})
    }

    render() {
        console.log(this.state.heading)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="com-md-4 offset-md-5">
                        <h1>React State Challenge</h1>
                        <InputComponent updateHeading={this.updateHeading}/>
                        <DisplayComponent displayHeding={this.state.heading}/>
                    </div>
                </div>
            </div>

        )
    }
}

class DisplayComponent extends React.Component{
    render(){
        return(
            <h1>{this.props.displayHeding}</h1>
        )
    }
}

class InputComponent extends React.Component {

    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.props.updateHeading(event.target.value);
    }
    render() {
        return (
           <input className="form-control" onChange={this.onInputChange}></input>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));