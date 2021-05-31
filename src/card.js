import React from 'react';
import './card.css';

// Card for a gift item/person
class Card extends React.Component {

    render() {
        return(
            <div className="card-main">
                <h3>{this.props.title}</h3>
                <img
                    src={this.props.img}
                    alt="lucas"
                >
                </img>
            </div>
        );
    }
}

export default Card;