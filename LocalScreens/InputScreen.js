import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView
} from "react-native";
import Slider from "react-native-slider/src/Slider";

class InputScreen extends React.Component {
  static navigationOptions = {
    title: "我是记录员"
  };

  constructor(props) {
    super(props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      thirdNum: 0,
      forthNum: 0
    };
  }

  calculateFBI = () => {
    const res =
      (parseInt(this.state.firstNum * 6) +
        parseInt(this.state.secondNum * 5) +
        parseInt(this.state.thirdNum * 10) +
        parseInt(this.state.forthNum * 9)) /
      (parseInt(this.state.firstNum) +
        parseInt(this.state.secondNum) +
        parseInt(this.state.thirdNum) +
        parseInt(this.state.forthNum));

    if (isNaN(res)) {
      return "请输入完整信息";
    } else {
      return res.toFixed(2);
    }
  };

  translateStatus = FBI => {
    if (FBI === "请输入完整信息") {
      return "请输入完整信息";
    }

    let status;

    if (FBI <= 4.5) {
      status = "好";
    } else if (FBI > 4.5 && FBI <= 6.5) {
      status = "一般";
    } else if (FBI > 6.5) {
      status = "较差";
    } else {
      status = "差";
    }

    return status;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

        <Image
          style={styles.image}
          source={require('../image/step2.png')}
        />


        <View
          style={[
            {
              paddingTop: 20,
              flex: 1,
              flexDirection: "row",
              paddingLeft: 10
            }
          ]}
        >
          <View style={{ flex: 1, height: 22 }}>
            <Text style={{ fontSize: 15 }}>淡水虾（耐污值：6）</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 27,
              height: 22
            }}
          >
            <Image
              source={require("../image/view.png")}
              style={{ width: 14, height: 16 }}
            />
            <Text
              style={{
                fontSize: 15,
                textAlign: "right",
                height: 22,
                color: "rgb(32, 200, 255)"
              }}
              onPress={() => this.props.navigation.navigate('AnimalInspector')}
            >
              查看
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={[
              {
                flex: 1,
                flexDirection: "column"
              }
            ]}
          >
            <View
              style={[
                styles.smallText,
                {
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }
              ]}
            >
              <Text
                style={{
                  color: "skyblue",
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 18
                }}
              >
                {this.state.firstNum}
              </Text>{" "}
              <Text>只</Text>
            </View>
            <Image
              source={require("../image/line.png")}
              style={{ width: 64, height: 2 }}
              resizeMode="stretch"
            />
          </View>
        </View>
        <Slider
          style={styles.slider}
          thumbTintColor="transparent"
          thumbImage={require("../image/thumb.png")}
          value={this.state.value}
          maximumValue={10}
          minimumTrackTintColor={"#d8d8d8"}
          maximumTrackTintColor={"#d8d8d8"}
          step={1}
          onValueChange={value => this.setState({ firstNum: value })}
        />
        <View style={styles.divider} />

        <Text style={{ padding: 10, fontSize: 15 }}>田螺（耐污值：5）</Text>
        <Text style={styles.text}>
          <Text style={{ color: "skyblue" }}>{this.state.secondNum}</Text> 只
        </Text>
        <Slider
          style={styles.slider}
          value={this.state.value}
          maximumValue={10}
          step={1}
          onValueChange={value => this.setState({ secondNum: value })}
        />
        <View style={styles.divider} />

        <Text style={{ padding: 10, fontSize: 15 }}>水蚯蚓（耐污值：10）</Text>
        <Text style={styles.text}>
          <Text style={{ color: "skyblue" }}>{this.state.thirdNum}</Text> 只
        </Text>
        <Slider
          style={styles.slider}
          value={this.state.value}
          maximumValue={10}
          step={1}
          onValueChange={value => this.setState({ thirdNum: value })}
        />
        <View style={styles.divider} />

        <Text style={{ padding: 10, fontSize: 15 }}>摇蚊幼虫（耐污值：9）</Text>
        <Text style={styles.text}>
          <Text style={{ color: "skyblue" }}>{this.state.forthNum}</Text> 只
        </Text>
        <Slider
          style={styles.slider}
          value={this.state.value}
          maximumValue={10}
          step={1}
          onValueChange={value => this.setState({ forthNum: value })}
        />
        <View style={styles.divider} />

        <Text style={{ padding: 10, fontSize: 15 }}>
          FBI（科级耐污指数）：
          {this.calculateFBI()}
        </Text>

        <Text style={{ padding: 10, fontSize: 15 }}>
          水质综合评价：
          {this.translateStatus(this.calculateFBI())}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 50,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    margin: 10,
    fontSize: 15,
    textAlign: "center"
  },
  smallText: {
    margin: 5
  },
  slider: {
    marginLeft: 10,
    marginRight: 10
  },
  divider: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
});

export default InputScreen;
