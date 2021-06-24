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
                

                <div id="bridal-party" className="contentSection">
                    <h2 className="sectionHeader">BRIDAL PARTY</h2>

                    <div className="people-group">
                        <Card
                            title="Kristi Senft" role="Bride" note="His queen"
                            img={process.env.PUBLIC_URL + '/img/kristiNewImage.jpg'}/>
                        <Card
                            title="Shelby Smith" role="Maid of Honor" note="Friend of bride"
                            img={process.env.PUBLIC_URL + '/img/shelbyImage.jpg'}/>
                        <Card
                            title="Morgan Walker" role="Bridesmaid" note="Friend of bride"
                            img={process.env.PUBLIC_URL + '/img/morganImage.jpg'}/>
                        <Card
                            title="Kaitlyn Senft" role="Bridesmaid" note="Sister of bride"
                            img={process.env.PUBLIC_URL + '/img/kaitlynImage.jpg'}/>
                        <Card
                            title="Matthew Schlessinger" role="Bridesman" note="Cousin of bride"
                            img={process.env.PUBLIC_URL + '/img/matthewImage.jpg'}/>
                    </div>

                    <div className="people-group">
                        <Card 
                            title="Lucas Ference" role="Groom" note="Her king"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Adam Orkin" role="Best Man"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Jacob Twigg" role="Groomsman" note="12 handicap"
                            img={process.env.PUBLIC_URL + '/img/jacobTwiggImage.jpg'}/>
                        <Card
                            title="Ryan Gilmartin" role="Groomsman"
                            img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                        <Card
                            title="Jacob Ference" role="Groomsman"
                            img={process.env.PUBLIC_URL + '/img/jacobFerenceImage.jpg'}/>
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