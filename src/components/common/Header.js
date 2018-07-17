// Creating a Header component
import React from 'react';
import { View, Text } from 'react-native';

const Header = ({children}) => {
	const { viewStyle, textStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		paddingTop: 30,
		paddingBottom: 10,
		alignItems: 'center', // Horizontal
		justifyContent: 'center', // Vertical
		backgroundColor: '#F8F8F8',
		elevation: 2,
		position: 'relative',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
	}
};
export default Header;
