import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoia2V2c29uZG9jIiwiYSI6ImNrY3Rwd2Z6YTIxMGwycnM1MHVrcnJ6aWwifQ.kb34aAVTeAVc4Ozr08sghA");
MapboxGL.setConnected(true);

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default class App extends Component {
  async componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          logoEnabled={false}
          compassViewPosition={1, 2, 3}
          style={styles.map}
          showUserLocation
        >
          <MapboxGL.Camera
            centerCoordinate={[-48.0485868, -15.8040292]} //Primeiro a longitude depois a latitude
            zoomLevel={15}
            pitch={100}
          />
        </MapboxGL.MapView>
      </View>
    );
  }
}