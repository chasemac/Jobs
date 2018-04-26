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
                this.onAuthComplete(this.props);
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return (
            <SafeAreaView>
                <Text>AuthScreen</Text>
            </SafeAreaView>
        );
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);