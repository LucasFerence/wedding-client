import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js';
import Card from './card.js';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />

                <div className="headerContainer">

                    <div className="centeredTitle">
                        <h1 id="weddingDate">
                            06 &#9671; 12 &#9671; 22
                        </h1>
                    </div>

                    <img
                        className="headerImg"
                        src={process.env.PUBLIC_URL + '/img/header.jpg'}
                        alt="header">
                    </img>
                </div>
                

                <div id="people" className="contentSection">
                    <h2 className="sectionHeader">PEOPLE</h2>

                    <div className="people-group">
                        <Card title="Lucas Ference" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Adam Orkin" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Jacob Twigg" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Ryan Gilmartin" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Jacob Ference" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                    </div>

                    <div className="people-group">
                        <Card title="Kristi Ference" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Shelby Smith" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Morgan Walker" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Matthew Senft" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card title="Kaitlyn Senft" img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                    </div>
                    
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