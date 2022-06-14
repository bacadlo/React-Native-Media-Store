import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>      
        <StatusBar barStyle={'auto'} />
        <Navigation />     
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
