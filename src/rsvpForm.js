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
                <label>
                    Name:
                    <input
                        className="textInput"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <input
                    className="submitButton"
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}

export default RsvpForm;