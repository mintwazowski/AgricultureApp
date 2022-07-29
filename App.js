
import React, { Component } from 'react';
import { LogBox } from 'react-native';
import MainRoutes from './src/routes/Routes';

export default class App extends Component {

    render() {
        LogBox.ignoreAllLogs()
        return (
            <MainRoutes />
        );
    }
}
