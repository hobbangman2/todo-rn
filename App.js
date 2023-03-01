import '@azure/core-asynciterator-polyfill';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Home from './src/Home';

Amplify.configure(awsconfig);

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default withAuthenticator(App, { includeGreetings: true });