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
                        <Card
                            title="Kristi Senft" role="Bride"
                            img={process.env.PUBLIC_URL + '/img/kristi.jpeg'}/>
                        <Card
                            title="Shelby Smith" role="Maid of Honor"
                            img={process.env.PUBLIC_URL + '/img/shelbyImage.jpg'}/>
                        <Card
                            title="Morgan Walker" role="Bridesmaid"
                            img={process.env.PUBLIC_URL + '/img/morganImage.jpg'}/>
                        <Card
                            title="Kaitlyn Senft" role="Bridesmaid"
                            img={process.env.PUBLIC_URL + '/img/matthewImage.jpg'}/>
                        <Card
                            title="Matthew Schlessinger" role="Bridesman"
                            img={process.env.PUBLIC_URL + '/img/matthewImage.jpg'}/>
                    </div>

                    <div className="people-group">
                        <Card 
                            title="Lucas Ference" role="Groom"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Adam Orkin" role="Best Man"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Jacob Twigg" role="Groomsman"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Ryan Gilmartin" role="Groomsman"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Jacob Ference" role="Groosman"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
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