import React from 'react';
import './registry.css';

class Registry extends React.Component {

    render() {

        return (
            <div>

                <div className="registry-description">
                    <p>We appreciate you thinking of us!</p>
                    <p>
                        We have included two registries below: a standard
                        Amazon gift registry and a honeymoon registry for our planned excursions.
                    </p>
                </div>

                <div className="registry-links">

                    <a
                        className="registry-link"
                        href="https://www.amazon.com/wedding/share/ferenceforalways"
                        target="_blank"
                        rel="noreferrer">
                        Amazon
                    </a>

                    <a
                        className="registry-link"
                        href="https://cruiseplanners.honeymoonwishes.com/Honeymoon-Registry-428581-Costa-Rica-Kristi-Senft-Lucas-Ference.html"
                        target="_blank"
                        rel="noreferrer">
                        Honeymoon
                    </a>

                </div>

            </div>
        );
    }
}

export default Registry;