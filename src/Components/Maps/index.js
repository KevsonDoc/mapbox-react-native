import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, PermissionsAndroid, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from 'react-native-geolocation-service';

import Search from '../Search';

MapboxGL.setAccessToken("pk.eyJ1Ijoia2V2c29uZG9jIiwiYSI6ImNrY3Rwd2Z6YTIxMGwycnM1MHVrcnJ6aWwifQ.kb34aAVTeAVc4Ozr08sghA");
MapboxGL.setConnected(true);

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default function App() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [userPosition, setUserPosition] = useState({ latitude: 0, longitude: 0 });

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setHasLocationPermission(true);
      } else {
        console.error('permissão negada');
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    verifyLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        }
      );
    }
  }, [hasLocationPermission]);

  return (
    <View style={{ flex: 1, }}>
      <MapboxGL.MapView
        logoEnabled={false}
        compassViewPosition={1, 2, 3}
        style={styles.map}
        showUserLocation
      >
        <MapboxGL.Camera
          centerCoordinate={[ userPosition.longitude , userPosition.latitude ]} //Primeiro a longitude depois a latitude
          zoomLevel={15}
          showUserLocation
        />
        <MapboxGL.PointAnnotation
          id="first-annotation"
          coordinate={[ userPosition.longitude , userPosition.latitude ]}
        />
      </MapboxGL.MapView>
      <Search />
    </View>
  );
}