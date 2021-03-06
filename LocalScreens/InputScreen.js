import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Slider from "react-native-slider/src/Slider";


class InputScreen extends React.Component {
  static navigationOptions = {
    title: "我是记录员 - 第二步",
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
      return "--";
    } else {
      return res.toFixed(2);
    }
  };

  translateStatus = FBI => {
    if (FBI === "--") {
      return "--";
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
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image style={styles.image} source={require("../image/step2.png")} />

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
                style={{ width: 14, height: 16, marginRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "right",
                  height: 22,
                  color: "rgb(32, 200, 255)"
                }}
                onPress={() =>
                  this.props.navigation.navigate("AnimalInspector")
                }
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
              <Text style={{ fontSize: 15 }}>田螺（耐污值：5）</Text>
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
                style={{ width: 14, height: 16, marginRight: 5  }}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "right",
                  height: 22,
                  color: "rgb(32, 200, 255)"
                }}
                onPress={() =>
                  this.props.navigation.navigate("AnimalInspector")
                }
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
                  {this.state.secondNum}
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
            onValueChange={value => this.setState({ secondNum: value })}
          />
          <View style={styles.divider} />

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
              <Text style={{ fontSize: 15 }}>水蚯蚓（耐污值：10）</Text>
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
                style={{ width: 14, height: 16, marginRight: 5  }}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "right",
                  height: 22,
                  color: "rgb(32, 200, 255)"
                }}
                onPress={() =>
                  this.props.navigation.navigate("AnimalInspector")
                }
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
                  {this.state.thirdNum}
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
            onValueChange={value => this.setState({ thirdNum: value })}
          />
          <View style={styles.divider} />

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
              <Text style={{ fontSize: 15 }}>摇蚊幼虫（耐污值：9）</Text>
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
                style={{ width: 14, height: 16, marginRight: 5  }}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "right",
                  height: 22,
                  color: "rgb(32, 200, 255)"
                }}
                onPress={() =>
                  this.props.navigation.navigate("AnimalInspector")
                }
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
                  {this.state.forthNum}
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
            onValueChange={value => this.setState({ forthNum: value })}
          />
          <View style={styles.divider} />

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 5
            }}
          >
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                this.props.navigation.navigate("LocalHome")
              }}
            >
              <Text style={styles.nextButtonText}> 提交 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTextHead}>FBI（科级耐污指数)</Text>
            <Text style={styles.bottomTextDetail}> {this.calculateFBI()}</Text>
          </View>
          <View style={styles.spector} />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTextHead}>水质综合评价</Text>
            <Text style={styles.bottomTextDetail}>
              {this.translateStatus(this.calculateFBI())}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  scrollView: {
    backgroundColor: "white",
    height: "75%"
  },
  bottomView: {
    height: 78,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgb(251,251,251)"
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    height: 78,
    alignItems: "center"
  },
  spector: {
    width: 2,
    backgroundColor: "lightskyblue",
    margin: 4,
    height: 70
  },
  bottomTextHead: { fontSize: 15, paddingTop: 11 },
  bottomTextDetail: { fontSize: 20, fontWeight: "bold", paddingTop: 11 },
  image: {
    width: "100%",
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
  },
  nextButton: {
    width: 304,
    height: 44,
    backgroundColor: "#272C2F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  nextButtonText: {
    fontSize: 16,
    color: "#FFFFFF"
  }
});

export default InputScreen;
