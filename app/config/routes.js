/*
File for routes on this app
*/
import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';

import App from './../app.js';
import CreateNote from './../container/createNote.js';

const Nav = StackNavigator({
    // routes
    Home: { screen: App },
    Create:{ screen: CreateNote },
});
export {Nav};