import React, { Component } from 'react';
import { View, Text, SafeAreaView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.props.facebookLogin();
                AsyncStorage.removeItem('fb_token');
            }
        );
    }

    render() {
        return (
            <SafeAreaView>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </SafeAreaView>
        );
    }
}

export default connect(null, actions)(AuthScreen);