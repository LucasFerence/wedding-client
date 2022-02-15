import React from 'react';
import './hotels.css';

class Hotels extends React.Component {

    render() {

        return (
            <div>

                <div className="hotel-description">
                    <p>
                        These links are part of a complimentary hotel booking by Marriot.
                        They provide discounted rates at a nearby hotel.
                        The hotel is roughly 10 minutes away from the venue.
                    </p>
                </div>

                <div className="hotel-links">

                    <a
                    className="hotel-link"
                    href="https://www.marriott.com/events/start.mi?id=1629994205754&key=GRP"
                    target="_blank"
                    rel="noreferrer">
                        One Night Stay
                    </a>

                    <a
                    className="hotel-link"
                    href="https://www.marriott.com/events/start.mi?id=1629994537287&key=GRP"
                    target="_blank"
                    rel="noreferrer">
                        Two Night Stay
                    </a>

                </div>

            </div>
        );
    }
}

export default Hotels;