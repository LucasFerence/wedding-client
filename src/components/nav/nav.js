import React from 'react';
import './nav.css';

import Modal from 'components/modal/modal';
import RsvpForm from 'views/rsvp/rsvpForm';

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
                <Modal show={this.state.showModal} handleClose={this.hideModal}>
                    <RsvpForm onSubmit={this.hideModal}/>
                </Modal>

                <nav className={"navbar " + (this.state.showMobileNav ? "open" : null)}>
                    <img
                        className="navbar-logo"
                        src={process.env.PUBLIC_URL + '/img/websiteLogo.png'}
                        alt="logo"
                    />
                    <ul className="nav-list">

                        <li className="nav-item">
                            <a className="nav-link" href="#hotels" onClick={this.toggleMobileNav}>
                                Lodging
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#bridal-party" onClick={this.toggleMobileNav}>
                                Bridal Party
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#gallery" onClick={this.toggleMobileNav}>
                                Gallery
                            </a>
                        </li>

                        <li className="nav-item" style={{"display": "none"}}>
                            <button type="button" className="nav-link" onClick={this.showModal}>
                                rsvp
                            </button>
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