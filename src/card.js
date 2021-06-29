import React from 'react';
import './card.css';

// Card for a gift item/person
class Card extends React.Component {

    render() {
        return(
            <div className="card-main">
                <h4>{this.props.role}</h4>
                <img
                    src={this.props.img}
                    alt="lucas"
                >
                </img>
                <h3>{this.props.title}</h3>
                <h5>{this.props.note}</h5>
            </div>
        );
    }
}

export default Card;