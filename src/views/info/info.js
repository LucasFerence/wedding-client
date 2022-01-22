import React from 'react';
import './info.css'

class Info extends React.Component {

    render() {

        return (
            <div id="info">

                <h2 className="hotels-header">Info</h2>

                <h3 className="info-subhead">Parking</h3>
                <div className="info-detail">
                    <p>
                        There is complimentary parking at Londontown. You are allowed
                        to leave your car there overnight with no fee. We recommend calling an Uber
                        or driving to the hotel from the venue at the end of the night.
                    </p>
                </div>

                <hr />

                <h3 className="info-subhead">Dress Code</h3>
                <div className="info-detail">
                    <p>
                        The dress code is semi-formal. Dress shirt and dress pants is fine.
                        No need for a suit unless you want!
                    </p>
                </div>

                <hr />

                <h3 className="info-subhead">Lodging Info</h3>
                <div className="info-detail">
                    <p>
                        The last day to book a hotel room through the provided links is May 13th, 2022.
                    </p>
                </div>

                <hr />
            </div>
        );
    }
}

export default Info;