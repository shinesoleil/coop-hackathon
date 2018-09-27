import React from 'react';
import {
  Button, Image, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity,
  View
} from 'react-native';

class AnimalInspector extends React.Component {
  static navigationOptions = {
    title: '底栖动物介绍 - 淡水虾',
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
      <View style={{ backgroundColor: 'white', height: "100%" }}>
        <View>
          <Image
            style={styles.image}
            source={require('../image/shrimp.png')}
          />
        </View>

        <View style={styles.textView}>
          <Text style={{fontSize: 16, lineHeight: 30}}>
            淡水虾广泛分布于我国江河、湖泊、水库和池塘中的河虾（又称青虾，学名叫日本沼虾
            （Macrobranchium nipponense）），是优质的淡水虾类。肉质细嫩，味道鲜美，营养丰富，
            是高蛋白低脂肪的水产食品，颇得消费者青睐。
          </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250
  },
  textView: {
    padding: 30,
    opacity: 0.6,
  }
});

export default AnimalInspector
