import React from 'react';
import ReactDom from 'react-dom';

class Welcome extends React.Component{
    render(){
        return <button>I am a Button</button>;
    }
}

var root = document.getElementById("root");
ReactDom.render(<Welcome/>,root);