import React from 'react';
import './info.css'

class Info extends React.Component {

    render() {

        return (
            <div>

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
                        The dress code is business-casual.
                    </p>
                </div>
            </div>
        );
    }
}

export default Info;