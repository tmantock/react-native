import React from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

const StopWatch = React.createClass({
  render: function() {
    return (
    <View>
      <Text>
        00:00:00
      </Text>

      <View>
        {this.startStopButton()}
      </View>

      <View>
        {this.lapButton()}
      </View>

    </View>
  );
},
startStopButton: function () {
  return (
    <Text>
      Start
    </Text>
  );
},
lapButton: function () {
  return (
    <Text>
      Lap
    </Text>
  );
}
});

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
