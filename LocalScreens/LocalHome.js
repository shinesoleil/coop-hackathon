import React from "react";
import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

class LocalHome extends React.Component {
  static navigationOptions = {
    title: "本地",
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
    this.state = {};
    StatusBar.setBarStyle("light-content", true);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <View style={{ padding: 20, backgroundColor: "rgb(238, 238, 238)" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LocalForm")}
          >
            <Image
              style={styles.image}
              source={require("../image/localhome1.jpg")}
            />
          </TouchableOpacity>

          <Image
            style={styles.image}
            source={require("../image/localhome2.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../image/localhome3.jpg")}
          />
        </View>

        <View
          style={{
            height: 200,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 40,
            opacity: 0.6,
            backgroundColor: "white"
          }}
        >
          <Text style={{ fontSize: 20 }}>南塘·本地</Text>
          <Text style={{ fontSize: 16, marginTop: 12 }}>
            在这里，您可以了解关于南塘已采集的物种库、文化以及亲自进行记录。
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    marginBottom: 20
  }
});

export default LocalHome;
