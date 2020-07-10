import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// jsx templates
export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text> Header </Text>
      </View>

      <Text style={styles.boldText}> Hello REACT NATIVE. This is my APP! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ff5733',
    padding: 3,
  },
  boldText: {
    fontWeight: 'bold'
  }
});
