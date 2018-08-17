import React, { Component } from 'react';
import { View } from 'react-native';
// testing that header component is working
import {
	Header,
	Button,
	Card,
	CardSection
} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

/* Root component */
class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCYJdIn_bsMHdtPbxka0nA3GM6dWLz1f1A',
	    authDomain: 'authentication-4972e.firebaseapp.com',
	    databaseURL: 'https://authentication-4972e.firebaseio.com',
	    projectId: 'authentication-4972e',
	    storageBucket: 'authentication-4972e.appspot.com',
	    messagingSenderId: '109419922920'
		});
	}

	render() {
		return (
			<View>
				<Header>Authentication</Header>
				<LoginForm />
			</View>
		);
	};
};

export default App;
