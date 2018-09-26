import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Button,
	Alert
} from 'react-native';

export default class Login extends Component {

	render() {
		return (
			<ScrollView style={{ padding: 30 }}>
				<Text style={{ fontSize: 40 }}>Login</Text>
				<TextInput style={{ fontSize: 25, marginTop: 20 }} placeholder='Username'/>
				<TextInput style={{ fontSize: 25, marginTop: 20 }} placeholder='Password' secureTextEntry={true}/>
				<View>
					<Button
						title='Submit'
						onPress={this.props.onLogin}/>
				</View>
			</ScrollView>
		)
	}
}