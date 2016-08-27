import React from 'react';
import { Text, View, AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

const StopWatch = React.createClass({
  getInitialState: function () {
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      lapArray: []
    }
  },
  render: function() {
    return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.timerWrapper]}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>

        <View style={[styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer]}>
        {this.renderLaps()}
      </View>

    </View>
  );
},
startStopButton: function () {
  let style = this.state.running ? styles.stopButton : styles.startButton
  return (
    <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress} style={[styles.button, style]}>
      <Text>
        { this.state.running ? 'Stop' : 'Start' }
      </Text>
    </TouchableHighlight>
  );
},
lapButton: function () {
  return (
    <TouchableHighlight underlayColor="gray" onPress={this.handleLapPress} style={styles.button}>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  );
},
handleStartPress: function () {
  if(this.state.running){
    clearInterval(this.interval);
    this.setState({
      running: false
    });
    return;
  }

  this.setState({
    startTime: new Date()
  })

  this.interval = setInterval(() => {
    this.setState({
      timeElapsed: new Date() - this.state.startTime,
      running: true,
    });
  }, 30);


},
handleLapPress: function () {
  let lap = this.state.timeElapsed;
  this.setState({
    lapArray: this.state.lapArray.concat([lap])
  });
},
renderLaps: function () {
  return this.state.lapArray.map((lap, index) => {
    return <View key={lap} style={styles.lap}>
      <Text style={styles.lapText}>
        Lap #{index + 1}:
      </Text>
      <Text style={styles.lapText}>
        {formatTime(lap)}
      </Text>
    </View>
  });
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
