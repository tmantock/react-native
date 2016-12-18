import React from 'react';
import { AppRegistry, MapView, View, StyleSheet } from 'react-native';

var Weather = React.createClass({
    render: function () {
        var pins = [{
            latitude: 37,
            longitude: -95
        }];

        return (
            <MapView
                annotations={pins} 
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={styles.map}>
            </MapView>
        );
    },
    onRegionChangeComplete: function(region) {

    }
});

var styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

AppRegistry.registerComponent('weather', () => Weather);