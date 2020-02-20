import React from 'react';

//This component handles submissions of new messages

class MessageForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = { body: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({ [field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		App.currentChannel.speak({ message: this.state.body });
		this.setState({ body: "" });
	}

	render() {
		return (
			<div className="message-form-container">
				<form className="message-form" onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.body}
						onChange={this.update("body")}
						placeholder={`Message #${name}`}
					/>
				</form>
			</div>
		);
	}
}

export default MessageForm;