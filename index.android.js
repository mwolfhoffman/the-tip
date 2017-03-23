import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: 'antiquewhite',
    flex: 1
  },
  title: {
    fontSize: 50,
    color: 'antiquewhite',
    textAlign: 'center',
    backgroundColor: 'blueviolet',
  },

  input: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'blueviolet',
    width: 400,
    height: 50,
  },

  result: {
    fontWeight: 'bold',
    fontSize: 30
  },
  resultWrapper: {
    height: 300
  }

})


class TipChoice extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        color='blue'
        title={this.props.title}
        style={color = "#841584"}
      />
    )
  }
}


export default class JustTheTip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      tip: 0
    }
  }
  resetAll(){
      this.setState({ total: 0, tip: 0 })
  }
  btnLog(num) {
    let tip = parseFloat((num * 100) / 100).toFixed(2) * this.state.total
    this.setState({ tip }, () => {
      console.log("tip state ", tip)
    })
  }
  changeTotal(num) {
    if (!isNaN(num)) {
      let total = parseFloat(num).toFixed(2)
      this.setState({ total, tip:0 })
    }
    else {
      Alert("You must provide a valid number")
    }
  }
  render() {
    return (
      <View style={styles.backGround}>
        <Text style={styles.title}>
          Just The Tip
        </Text>

        <View style={styles.resultWrapper}>
          <Text style={styles.result}>
            Tip: $ {this.state.tip.toFixed(2)}
          </Text>
          <Text style={styles.result}>
            Total: $ {(+this.state.total + +this.state.tip).toFixed(2)}
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <TipChoice title="10%" onPress={() => { this.btnLog(0.10) }} />
          <TipChoice title="15%" onPress={() => { this.btnLog(0.15) }} />
          <TipChoice title="20%" onPress={() => { this.btnLog(0.20) }} />
        </View>

        <Button
          onPress={()=>{this.resetAll()}}
          title="Reset"
          style={color = "#841584"}
        />
        <TextInput
          ref={(textInput) => { _textInput = textInput }}
          style={styles.input}
          placeholder="Amount of the Bill"
          onSubmitEditing={(event) => {
            this.changeTotal(event.nativeEvent.text)
            _textInput.clear()
          }
          } />

      </View>
    );
  }
}


AppRegistry.registerComponent('justthetip', () => JustTheTip);