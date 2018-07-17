import React, { Component } from 'react';
import { View, Text } from 'react-native';

// testing that header component is working
import Header from './components/common/Header';

/* Root component */
class App extends Component {
	render() {
		return (
			<View>
				<Header>Auth</Header>
			</View>
		);
	};
};

export default App;
