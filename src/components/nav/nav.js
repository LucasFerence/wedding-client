import React from 'react';
import './nav.css';

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMobileNav: false,
            showModal: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }

    showModal = () => {
        this.setState(prev => ({
            showMobileNav: false,
            showModal: true
        }));
    };

    hideModal = () => {
        this.setState(prev => ({
            showMobileNav: prev.showMobileNav,
            showModal: false
        }));
    };

    toggleMobileNav = () => {
        this.setState(prev => ({
            showMobileNav: !prev.showMobileNav,
            showModal: prev.showModal
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
                            <a
                                type="button"
                                className="nav-link"
                                href="https://ferenceforalways.anrsvp.com/"
                                target="_blank"
                                rel="noreferrer">
                                RSVP
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#hotels" onClick={this.toggleMobileNav}>
                                Lodging
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#registry" onClick={this.toggleMobileNav}>
                                Registry
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#bridal-party" onClick={this.toggleMobileNav}>
                                Bridal Party
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