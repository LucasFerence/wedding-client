import React from 'react';
import './nav.css';
import Modal from './modal.js';

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div class="nav">
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>RSVP</p>
                </Modal>
                <div class="navBar"></div>
                <div class="navElements">
                    <a class="navHeader" href="/">Ference</a>
                    <button class="navLink" onClick={this.showModal}>RSVP</button>
                    <a class="navLink" href="/">When and where</a>
                </div>
            </div>
        )
    }
}

export default Nav;