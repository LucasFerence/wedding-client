import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Nav from 'components/nav/nav.js';
import Cover from 'views/cover/cover.js';
import Hotels from 'views/hotels/hotels.js';
import Registry from 'views/registry/registry.js';
import Party from 'views/party/party.js';
import Gallery from 'views/gallery/gallery.js'
import Info from 'views/info/info.js'

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Cover />
                <Hotels />

                <hr className="sectionDivider" />

                <Registry />

                <hr className="sectionDivider" />

                <Info />

                <hr className="sectionDivider" />

                <Party />

                <hr className="sectionDivider" />

                <Gallery />
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)