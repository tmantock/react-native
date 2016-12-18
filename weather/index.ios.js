import React from 'react';
import { AppRegistry, MapView, View, StyleSheet } from 'react-native';

var Weather = React.createClass({
    getInitialState: function() {
        return {
            pin: {
                latitude: 0,
                longitude: 0
            }
        };
    },

    render: function () {
        var pins = [{
            latitude: 37,
            longitude: -95
        }];

        return (
            <MapView
                annotations={[this.state.pin]} 
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={styles.map}>
            </MapView>
        );
    },

    onRegionChangeComplete: function(region) {
        this.setState({
            pin:{
                longitude: region.longitude,
                latitude: region.latitude
            }
        });
    }
});

var styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

AppRegistry.registerComponent('weather', () => Weather);