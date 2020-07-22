import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput placeholder="Pesquise pelo seu estabelecimento" style={styles.searchBar}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: Platform.select({ ios: 60, android: 40 }),
        width: "100%",
        alignItems: "center"
    },
    textInput: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,191,255, 1)",
      width: "90%",
      borderRadius: 25,
      padding: 5,
      height: 50
    },
    searchBar: {
      width: "100%",
      backgroundColor: "rgba(127,255,0, 0.5)",
      borderRadius: 20
    }
})

export default Search;