import React from "react";
import ReactDOM from 'react-dom';
import {MainRouter} from './routes';
import 'antd/dist/antd.css';

export default function App() {

    return (
        <MainRouter/>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));