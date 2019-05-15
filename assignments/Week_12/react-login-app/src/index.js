import React from 'react';
import ReactDOM from 'react-dom';

class InputText extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.props.inputFieldName}</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
        )
    }
}

class PasswordText extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button type="submit" className="btn btn-primary">{this.props.buttonName}</button>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{marginTop:'5%'}}>
                <div className="row align-items-center">
                    <div className="col-md-4 offset-md-4">
                        <InputText inputFieldName="Email Address" />
                        <PasswordText />
                        <Button buttonName="Login"/>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));