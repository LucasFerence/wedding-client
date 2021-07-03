import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Nav from 'components/nav/nav.js';
import Cover from 'views/cover/cover.js';
import Party from 'views/party/party.js';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Cover />
                <Party />
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)