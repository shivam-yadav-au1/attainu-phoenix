import React from 'react'
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Tata Motors</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </nav>
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
                <div className="row justify-content-around">
                    <div className="col-md-3">
                        <Car imgUrl="Harrier.jpg" carName="Harrier"/>
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="Nexon.jpg" carName="Nexon" />
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="Tiago.jpg" carName="Tiago"/>
                    </div>
                    <div className="col-md-3">
                        <Car imgUrl="tigor.jpg" carName="Tigor" />
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
                <Heading />
                <ProductContainer />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"));