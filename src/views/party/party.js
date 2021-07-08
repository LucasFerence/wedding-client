import React from 'react';
import './party.css';

import Card from 'components/card/card.js'

class Party extends React.Component {

    render() {
        return (
            <div id="bridal-party">
                <h2 className="party-header">Bridal Party</h2>

                <div className="scroll-helper">
                    Scroll &rarr;
                </div>
                <div className="people-group">
                    <Card
                        title="Kristi Senft" role="Bride" note="His queen"
                        img={process.env.PUBLIC_URL + '/img/kristiImage.jpg'}/>
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

                <div className="scroll-helper">
                    Scroll &rarr;
                </div>
                <div className="people-group">
                    <Card 
                        title="Lucas Ference" role="Groom" note="Her king"
                        img={process.env.PUBLIC_URL + '/img/lucas.jpg'}/>
                    <Card
                        title="Adam Orkin" role="Best Man" note="Max Bench: 215"
                        img={process.env.PUBLIC_URL + '/img/adamImage.jpg'}/>
                    <Card
                        title="Jacob Twigg" role="Groomsman" note="12 handicap"
                        img={process.env.PUBLIC_URL + '/img/jacobTwiggImage.jpg'}/>
                    <Card
                        title="Ryan Gilmartin" role="Groomsman" note="Likes long walks on the beach"
                        img={process.env.PUBLIC_URL + '/img/ryanImage.jpg'}/>
                    <Card
                        title="Jacob Ference" role="Groomsman" note="Chronically short"
                        img={process.env.PUBLIC_URL + '/img/jacobFerenceImage.jpg'}/>
                </div>
            </div>
        );
    }
}

export default Party;