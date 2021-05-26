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
                    <div className="navBar"></div>
                    <div className="navElements">
                        <a className="navHeader" href="/">Ference</a>
                        <button className="navLink" onClick={this.showModal}>RSVP</button>
                        <a className="navLink" href="/">Gifts</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;