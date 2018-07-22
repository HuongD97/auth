import React, { Component } from 'react';
import { View, Text } from 'react-native';

// testing that header component is working
import {
	Header,
	Button,
	Card,
	CardSection
} from './components/common';

/* Root component */
class App extends Component {
	render() {
		return (
			<View>
				<Header>Authentication</Header>
				<Card>
					<CardSection>
						<Button onPress={console.log('Hello!')}>
							Click me!
						</Button>
					</CardSection>
				</Card>
			</View>
		);
	};
};

export default App;
