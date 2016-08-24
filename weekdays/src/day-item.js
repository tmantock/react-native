import React, { Text, StyleSheet } from 'react-native';

const DayItems = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      A day of the week
    </Text>
  }
});

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})

module.exports = DayItems;
