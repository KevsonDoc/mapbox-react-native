import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("<YOUR_ACCESSTOKEN>");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
      </View>
    );
  }
}