import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {

    render() {
        async function logout() {
            try {
                await AsyncStorage.removeItem('fb_token')
                console.log('====================================');
                console.log("LOGGED OUT");
                console.log('====================================');
            } catch (error) {
                console.log('==============ERROR======================');
                console.log(error);
                console.log('==============ERROR END======================');
            }
        }
        return (
            <View>
                <Button 
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedJobs}
                />
                <View
                style={{
                    height: 100,
                    padding: 20,}}
                >
                </View>
                <Button 
                    title="Log Out"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={logout.bind(this)}
                />
            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen);

