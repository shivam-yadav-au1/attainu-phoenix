import React from 'react';
import { Provider } from 'react-redux';
import { Input } from '../Components/Input.js';
import { SquareButton } from '../Components/SquareButton.js'
import { CubeButton } from '../Components/CubeButton.js';
import { SquareRoot } from '../Components/SquareRootButton.js'
import {Display} from '../Components/Display.js';
import { squareCubeRootStore } from '../Store.js';

class App extends React.Component {
    render() {
        return (
            <Provider store={squareCubeRootStore}>
                <div className="row justify-content-around">
                    <Input />
                    <SquareButton />
                    <CubeButton />
                    <SquareRoot />
                    <Display/>
                </div>

            </Provider>
        )
    }
}

export { App };
