import React, { Text } from 'react-native';

const DayItems = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function () {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function () {
    let opacity;
    if(this.props.daysUntil == 0){
      opacity = 1
    } else{
      opacity = 1 / this.props.daysUntil;
    }
    return `rgba(0,0,0, ${opacity})`;
  },
  fontWeight: function () {
    let weight = (7 - this.props.daysUntil) * 100;
    return `${weight}`;
  },
  fontSize: function () {
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
  }
});

module.exports = DayItems;
