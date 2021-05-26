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

                <div id="gifts">
                    <h1>GIFT REGISTRY</h1>
                </div>
                
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)