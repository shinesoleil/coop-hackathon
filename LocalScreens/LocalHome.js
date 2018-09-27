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
      <View style={{ flex: 1, flexDirection: 'column', width: '100%', padding: 20 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LocalForm')}
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

        <View style={{  }}>
          <Text style={{fontSize: 20}}>
            南塘·本地
          </Text>
          <Text style={{fontSize: 16, marginTop: 12}}>
            在这里，您可以了解关于南塘已采集的物种库、文化以及亲自进行记录。
          </Text>
        </View>
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
