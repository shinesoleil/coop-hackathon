import React from "react";
import {
  Button, Image, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity,
  View, NativeModules, LayoutAnimation
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


class AnimalInspector extends React.Component {
  static navigationOptions = {
    title: "底栖动物介绍 - 淡水虾",
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
      text: '',
      overTextTop: '100%'
    };
  }

  onExpand = () => {
    LayoutAnimation.spring();
    this.setState({
      overTextTop: 100
    })
  };

  onCollapse = () => {
    LayoutAnimation.spring();
    this.setState({
      overTextTop: '100%'
    })
  };

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
      <View style={{
        backgroundColor: 'white',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}>
        <View>
          <TouchableOpacity onPress={this.onExpand}>
            <Image
              style={styles.image}
              source={require('../image/shrimp.png')}
            />
          </TouchableOpacity>

          <View style={styles.textView}>
            <Text style={{ fontSize: 16, lineHeight: 30 }}>
              淡水虾广泛分布于我国江河、湖泊、水库和池塘中的河虾（又称青虾，学名叫日本沼虾
              （Macrobranchium nipponense）），是优质的淡水虾类。肉质细嫩，味道鲜美，营养丰富，
              是高蛋白低脂肪的水产食品，颇得消费者青睐。
            </Text>
          </View>
        </View>

        <View style={{
          borderColor: 'rgb(213,213,213)',
          borderWidth: 1
        }}>
          <Text style={{
            fontSize: 16,
            opacity: 0.5,
            textAlign: 'center',
            height: 80,
            lineHeight: 80,
            backgroundColor: 'rgb(251,251,251)',
          }}>
            请选择图中淡水虾的具体部位进行查看
          </Text>
        </View>
        <View style={{
          position: 'absolute',
          top: this.state.overTextTop,
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: 'rgb(251, 251, 251)',
          borderTopWidth: 1,
          borderColor: 'rgb(213,213,213)',
        }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                backgroundColor: 'rgba(32, 200, 255, 0.8)',
                color: 'white',
                fontSize: 13,
                width: 70,
                height: 25,
                lineHeight: 25,
                textAlign: 'center',
                marginBottom: 30
              }}
              onPress={this.onCollapse}
            >
              收起
            </Text>
          </View>

          <Image
            style={styles.overTextImage}
            source={require('../image/shrimp1.png')}
          />
          <Text style={{
            fontSize: 16,
            color: 'black',
            opacity: 0.6,
            lineHeight: 30,
            marginTop: 10,
            marginBottom: 10

          }}>
            淡水虾的眼睛是透明的，且会具有突出的特点。头部整体是半透明的，略带有花纹。
          </Text>
          <Image
            style={styles.overTextImage}
            source={require('../image/shrimp2.png')}
          />
          <Text style={{
            fontSize: 16,
            color: 'black',
            opacity: 0.6,
            lineHeight: 30,
            marginTop: 10,
            marginBottom: 100
          }}>
            而且淡水虾的眼睛会因为有污染而呈现出不同的颜色。
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250
  },
  textView: {
    padding: 30,
    opacity: 0.6,
  },
  overText: {},
  overTextImage: {
    height: 150,
    width: '100%'
  }
});

export default AnimalInspector;
