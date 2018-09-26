import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

class LocalHome extends React.Component {
  static navigationOptions = {
    title: '本地',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: '100%', padding: 20 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Input')}
        >
          <Image
            style={styles.image}
            source={require('../image/localhome1.jpg')}
          />
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={require('../image/localhome2.jpg')}/>
        <Image
          style={styles.image}
          source={require('../image/localhome3.jpg')}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20
  }
});

export default LocalHome
