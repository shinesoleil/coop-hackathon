import React from "react";
import {
  Button,
  Image,
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

class LocalForm extends React.Component {
  static navigationOptions = {
    title: "我是记录员 - 第一步",
    headerStyle: {
      backgroundColor: "rgb(39,44,47)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    const names = [
      "记录时间",
      "天气",
      "记录地点",
      "河宽",
      "水深",
      "水流流态",
      "底质状况"
    ];

    return (
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          width: "100%",
          paddingLeft: 35,
          paddingRight: 35
        }}
      >
        <Image style={styles.image} source={require("../image/step1.png")} />

        {names.map((name, index) => {
          return (
            <View key={name}>
              <Text style={styles.inputLabel}>{name}</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ name: text })}
                value={this.state.text}
              />
            </View>
          );
        })}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate("Input")}
          >
            <Text style={styles.nextButtonText}> 下一步 </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
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
    borderColor: "rgb(200, 200, 200)",
    borderWidth: 1
  },
  buttonView: {
    height: 100
  },
  button1: {
    height: 50,
    color: "#272C2F"
  },
  nextButton: {
    width: 340,
    height: 44,
    backgroundColor: "#272C2F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  nextButtonText: {
    fontSize: 16,
    color: "#FFFFFF"
  }
});

export default LocalForm;
