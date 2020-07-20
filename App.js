import React, { Component } from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";

import Maps from './src/maps';;
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Maps />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red"
  }
});

export default App;