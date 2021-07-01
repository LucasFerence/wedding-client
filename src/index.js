import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Nav from './components/nav/nav.js';
import Cover from './components/cover/cover.js';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Cover />
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)