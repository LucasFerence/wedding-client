import React from 'react';
import './nav.css';

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMobileNav: false
        };

        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }

    toggleMobileNav = () => {
        console.log('Toggle nav')
        this.setState(prev => ({
            showMobileNav: !prev.showMobileNav
        }));
    };

    render() {
        return (
            <div>
                <nav className={"navbar " + (this.state.showMobileNav ? "open" : null)}>
                    <img
                        className="navbar-logo"
                        src={process.env.PUBLIC_URL + '/img/websiteLogo.png'}
                        alt="logo"
                    />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link" href="#bridal-party" onClick={this.toggleMobileNav}>
                                Bridal Party
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gift-registry" onClick={this.toggleMobileNav}>
                                Gift Registry
                            </a>
                        </li>
                    </ul>
                    <div className="menu-toggle" onClick={this.toggleMobileNav}>
                        <div className="hamburger" />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;