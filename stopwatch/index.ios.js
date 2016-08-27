import React from 'react';
import { Text, View, AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';

const StopWatch = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            00:00:00
          </Text>
        </View>

        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of laps
        </Text>
      </View>

    </View>
  );
},
startStopButton: function () {
  return (
    <TouchableHighlight underlayColor="gray">
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  );
},
lapButton: function () {
  return (
    <View>
      <Text>
        Lap
      </Text>
    </View>
  );
},
border: function (color) {
  return {
    borderColor: color,
    borderWidth: 4
  }
}
});

const styles = StyleSheet.create({
  container: {
    flex: 1, //Fill the entire screen (height, width 100%)
    alignItems: 'stretch'
  },
  header: { //Yellow
    flex: 1
  },
  footer: { //Blue
    flex: 1
  },
  timerWrapper: { //Red
    flex: 5, //takes up 5/8 ths of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { //Green
    flex: 3, //takes up 3/8 ths of available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
