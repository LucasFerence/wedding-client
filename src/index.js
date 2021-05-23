import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Nav extends React.Component {

    render() {
        return (
            <div class="nav">
                <a class="navHeader" href="/">Ference</a>
                <a class="navLink" href="https://google.com">RSVP</a>
                <a class="navLink" href="https://reddit.com">When and where</a>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <img
                    class="headerImg"
                    src={process.env.PUBLIC_URL + '/img/header.jpg'}
                    alt="header">
                </img>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)