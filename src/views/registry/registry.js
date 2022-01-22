import React from 'react';
import './registry.css';

class Registry extends React.Component {

    render() {

        return (
            <div id="registry">

                <h2 className="registry-header">Registry Links</h2>

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
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer">
                        Amazon
                    </a>

                    <a
                        className="registry-link"
                        href="https://google.com"
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