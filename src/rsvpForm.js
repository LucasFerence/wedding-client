import React from 'react';
import './rsvpForm.css';

class RsvpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }
    

    handleSubmit(event) {
        event.preventDefault();
        // Just alert the name for now
        alert('Name submitted: ' + this.state.name);

        // Reset the name
        this.setState({ name: '' })

        // Call the onSubmit from the props
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className="formLabel">Name</h2>
                <input
                    className="textInput"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <h2 className="formLabel">Food</h2>
                <select className="dropdown">
                    <option value="soup">Soup</option>
                    <option value="salad">Salad</option>
                </select>

                <input
                    className="submitButton"
                    type="submit"
                    value="ATTEND"
                />
            </form>
        );
    }
}

export default RsvpForm;