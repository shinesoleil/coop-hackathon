import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Button,
	Alert
} from 'react-native';

export default class SecurePage extends Component {

	render() {
		return (
			<ScrollView style={{ padding: 30 }}>
				<Text style={{ fontSize: 50 }}>Welcome</Text>
				<View>
					<Button
						title='Logout'
						onPress={this.props.onLogout}/>
				</View>
			</ScrollView>
		)
	}
}