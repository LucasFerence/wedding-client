import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />

                <img
                    className="headerImg"
                    src={process.env.PUBLIC_URL + '/img/header.jpg'}
                    alt="header">
                </img>
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)