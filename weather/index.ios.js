import React from 'react';
import { AppRegistry, MapView, View, StyleSheet } from 'react-native';
var Api = require('./src/api');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            pin: {
                latitude: 0,
                longitude: 0
            },
            city: '',
            temperature: '',
            description: ''
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

        Api(region.latitude, region.longitude)
            .then((data) => {
                console.log(data);
                this.setState(data);
            });
    }
});

var styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

AppRegistry.registerComponent('weather', () => Weather);