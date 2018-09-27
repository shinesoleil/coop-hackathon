import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Button,
  Alert,
  FlatList,
  SectionList,
  ListView, ImageBackground, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import SecurePage from './SecurePage';
import navigate from 'react-navigation/src/NavigationActions';
import InputScreen from './LocalScreens/InputScreen';
import LocalHome from './LocalScreens/LocalHome';
import LocalForm from './LocalScreens/LocalForm';
import AnimalInspector from './LocalScreens/AnimalInspector';

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     isLoggedIn: false,
  //   }
  // }

  // onLogin = () => {
  //   this.setState({
  //     isLoggedIn: true,
  //   })
  // };
  //
  // onLogout = () => {
  //   this.setState({
  //     isLoggedIn: false,
  //   })
  // };

  render() {
    const { navigate } = this.props.navigation;

    // return this.state.isLoggedIn ? <WelcomePage navigation={this.props.navigation}/> : <Login onLogin={this.onLogin}/>;
    return (
      <TouchableOpacity onPress={() => navigate('LocalHome', {})}>
        <View>
          <Image
            source={require('./image/home.png')}
            style={{ width: '100%', height: '100%' }}>
          </Image>
        </View>
      </TouchableOpacity>
    )
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />


        <SectionList
          sections={[
            { title: 'D', data: ['Devin'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  Input: {
    screen: InputScreen
  },
  LocalHome: {
    screen: LocalHome
  },
  LocalForm: {
    screen: LocalForm
  },
  AnimalInspector: {
    screen: AnimalInspector
  }
});

//
// class Greeting extends React.Component {
// 	render() {
// 		return (
// 			<Text style={{fontSize: 60}}>Hello, {this.props.name}.</Text>
// 		)
// 	}
// }
//
// class Blink extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			show: true,
// 		};
//
// 		setInterval(() => {
// 			this.setState({
// 				show: !this.state.show,
// 			})
// 		}, 1000);
//
// 	}
//
// 	render() {
// 		let text = this.state.show ? 'I blink' : '';
//
// 		return (
// 			<Text>{text}</Text>
// 		)
// 	}
// }
//
// export default class App extends React.Component {
//
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			text: '',
// 		}
// 	}
//
// 	render() {
// 		let pic = {
// 			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// 		};
//
// 		return (
// 			<View>
// 				<Text>React Native Test </Text>
// 				<Image source={pic} style={{ width: 193, height: 110 }}/>
// 				<Greeting name="Alice"/>
// 				<Greeting name="Bob"/>
// 				<Text style={{fontSize: 80}}>Whatever it is.Whatever it is.Whatever it is.Whatever it is.</Text>
// 				<TextInput
// 					style={{ height: 40 }}
// 					placeholder='please input something:'
// 					onChangeText={(text) => {
// 						this.setState({ text })
// 					}}
// 				/>
// 				<Text>
// 					{this.state.text.split(' ').map(word => (word && '🍕')).join(' ')}
// 				</Text>
// 				<Blink/>
// 				<View style={{ flex: 1, backgroundColor: 'powderblue' }}/>
// 				<Button
// 					buttonStyle={{
// 						height: 10,
// 						width: 300,
// 					}}
// 					onPress={() => {
// 						Alert.alert('You tapped the button!');
// 					}}
// 					title="Press Me"
// 				/>
// 			</View>
// 		);
// 	}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
