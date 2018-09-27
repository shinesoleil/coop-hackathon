import React from 'react';
import {
  Button, Image, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity,
  View
} from 'react-native';

class LocalForm extends React.Component {
  static navigationOptions = {
    title: '我是记录员',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const names = [
      '记录时间',
      '天气',
      '记录地点',
      '河宽',
      '水深',
      '水流流态',
      '底质状况',
    ];

    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', width: '100%',
        paddingLeft: 35, paddingRight: 35 }}>

        <Image
          style={styles.image}
          source={require('../image/step1.png')}
        />

        {
          names.map((name, index) => {
            return (
              <View key={name}>
                <Text style={styles.inputLabel}>{name}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({ name: text })}
                  value={this.state.text}/>
              </View>
            )
          })
        }

        <View style={styles.buttonView}>
          <Button
            title="test"
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('AnimalInspector')}
          >
          </Button>
        </View>

        <View style={styles.buttonView}>
          <Button
            title="下一步"
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('Input')}
          >
          </Button>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 50,
    marginTop: 20,
    marginBottom: 20
  },
  inputLabel: {
    fontSize: 15,
    marginBottom: 10
  },
  input: {
    height: 40,
    marginBottom: 10,
    fontSize: 25,
    borderColor: 'rgb(200, 200, 200)',
    borderWidth: 1
  },
  buttonView: {
    height: 100
  },
  button1: {
    height: 50,
    color: '#841584'
  }
});

export default LocalForm
