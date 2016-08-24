import React, { AppRegistry, View, Text, StyleSheet } from 'react-native';

const Weekdays = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>
          Days of the week:
        </Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
