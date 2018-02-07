// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => (
    <Header />
);

// render it to the device
AppRegistry.registerComponent('newAlbums', () => App);
