import React, { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Moment from 'moment';
import DayItems from './src/day-item';

const Weekdays = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>git commit -m "Hey Github!"</Text>
        <Text>What happened on Monday?</Text>
        <Text>A lot happened on Monday. Sorry for the lack of code.</Text>
        {this.days()}
      </View>
    )
  },
  days: function() {
    let dayItems = [];

    for(let i = 0; i < 7; i++){
      let day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItems day={day} daysUntil={i} key={day} />
      );
    }

    return dayItems;
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
