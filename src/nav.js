import React from 'react';
import './nav.css';
import Modal from './modal.js';
import RsvpForm from './rsvpForm.js';

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
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <RsvpForm onSubmit={this.hideModal}/>
                </Modal>
                <div className="nav">
                    <a className="navHeader" href="/">#FerenceForAlways</a>

                    <a className="navLink" href="#gifts">GIFT REGISTRY</a>

                    <a className="navLink" href="#bridal-party">BRIDAL PARTY</a>
                </div>
            </div>
        )
    }
}

export default Nav;