import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js';

class App extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <img
                    className="headerImg"
                    src={process.env.PUBLIC_URL + '/img/header.jpg'}
                    alt="header">
                </img>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)