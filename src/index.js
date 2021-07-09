import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Nav from 'components/nav/nav.js';
import Cover from 'views/cover/cover.js';
import Party from 'views/party/party.js';
import Gallery from 'views/gallery/gallery.js'

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Cover />
                <Party />
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