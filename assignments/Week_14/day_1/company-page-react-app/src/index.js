import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Tata Motors</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>

                    </div>

                </nav>
                <Route path="/" exact="true" component={ProductContainer} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/contact-us" component={ContactUs} />
            </Router>
        )
    }
}

class Heading extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1>Tata Utility Motors</h1>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

class Car extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={this.props.imgUrl} className="img-fluid" alt="..." />
                <div className="card-body">
                    <h5 class="card-title">{this.props.carName}</h5>
                    <ul>
                        <li>Type:<strong>Petrol - Revotron 1.2L 3 cylinder with MULTI-DRIVE Mode</strong></li>
                        <li>Fuel, Emission norm:<strong> BS IV</strong></li>
                        <li>Capacity, cylinders:<strong> Petrol - 1199 cc, 3 cylinder</strong></li>


                    </ul>
                </div>
            </div>
        )
    }
}

class ProductContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: '5%' }}>
                <Heading />
                <div className="row justify-content-around">
                    <div className="col-md-3">
                        <Car imgUrl="Harrier.jpg" carName="Harrier" />
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="Nexon.jpg" carName="Nexon" />
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="Tiago.jpg" carName="Tiago" />
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="tigor.jpg" carName="Tigor" />
                    </div>
                </div>
            </div>
        )
    }
}

class AboutUs extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: '5%' }}>
                <div className="row justify-content-center">
                    <div className="col-md-5 offset-md-1">
                        <h1>About Us</h1>
                        <hr></hr>
                        <div>
                            <p>
                                Tata Motors Group (Tata Motors) is a $45 billion organisation.
                                It is a leading global automobile manufacturing company.
                                Its diverse portfolio includes an extensive range of cars,
                                sports utility vehicles, trucks, buses and defence vehicles.
                                Tata Motors is India’s largest and the only original equipment
                                manufacturer (OEM) offering extensive range of integrated, smart and
                                e-mobility solutions.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

class ContactUs extends React.Component {

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Contact Us</h1>
                        <hr></hr>
                        <p>
                            Head office
                            Tata Motors Ltd
                            4th Floor, Ahura Centre
                            82 Mahakali Caves Road
                            MIDC, Andheri East
                            Mumbai - 400093
                            Contact: 022 - 62407101
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Heading /> */}
                {/* <ProductContainer /> */}
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"));