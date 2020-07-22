import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Maps from './Components/Maps';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"  backgroundColor="rgba(0,191,255, 0.3)" translucent/>
      <Maps />
    </>
  );
}

export default App;