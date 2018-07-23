// House entering email, password,
// and trying to sign user in
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
	Button,
	Card,
	CardSection,
	Input
} from './common';

class LoginForm extends Component {
	state = { text: '' };

	render() {
		const action = () => {
			console.log('this.state', this.state);
		};
		return (
			<Card>
				<CardSection>
					<
					// Whenever user enters value for textinput,
					// we're saving what the user input into value.
					// When the textinput component is rerendered, it
					// uses its value property to show the text. Text exists
					// as part of state.
					<TextInput
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
						style={{ height: 20, width: 100 }}
					/>
				</CardSection>

				<CardSection />

				<CardSection>
					<Button onPress={action}>
						Log in!
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
