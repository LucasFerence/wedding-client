import React from 'react';
import './cover.css';

export default class Cover extends React.Component {

    render() {
        return (
            <div className="cover-container">
                <div className="cover-text">
                    <h1 id="wedding-date">
                        06 &#9671; 12 &#9671; 22
                    </h1>
                </div>

                <img
                    className="cover-img"
                    src={process.env.PUBLIC_URL + '/img/header.jpg'}
                    alt="header">
                </img>
            </div>
        );
    }
}