import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            </li>

                        </ul>
                    </div>

                   
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                </div>
            </Router>
        )
    }
}

class Home extends React.Component {
    render() {
        return (

            <div className="col-md-4 offset-md-4">
                <h1>AttainU Phoneix</h1>
                <hr></hr>
                We Are AttainU Phoneix <br></br>
                We Are 17 students trying to learn web development
                using javascript
            </div>

        )
    }
}

class AboutUs extends React.Component {
    render() {
        return (
            <div className="col-md-4 offset-md-4">
                <h1>About Us</h1>
                <hr></hr>
                <p>
                    We are form India, from south to north.
                </p>
            </div>
        )
    }
}

class ContactUs extends React.Component {
    render() {
        return (
            <div className="col-md-4 offset-md-4">
                <h1>Contact Us</h1>
                <hr></hr>
                <p>Contact us at student@Attainu.com</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));