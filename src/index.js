import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />

                <div className="headerContainer">
                    
                    <div className="centered">
                        <h1 id="weddingDate">June 12, 2022</h1>
                    </div>

                    <img
                        className="headerImg"
                        src={process.env.PUBLIC_URL + '/img/header.jpg'}
                        alt="header">
                    </img>
                </div>
                

                <div id="people">
                    <h2 className="sectionHeader">PEOPLE</h2>
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