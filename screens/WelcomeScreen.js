import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4'},
    { text: 'Use it to Job', color: '#009688'},
    { text: 'Set your location, then swipe away', color: '#03A9F4'},
];

class WelcomeScreen extends Component {
    state = { token: null }

    tokenVar = false;
    tokenStuff = '';
     async componentWillMount() {
         console.log('====================================');
         console.log("here?");
         console.log('====================================');

        // await AsyncStorage.removeItem('fb_token', (data) => {
        //     console.log(data);
        //     console.log(AsyncStorage.getItem('fb_token'));
        // });

        const token = await AsyncStorage.getItem('fb_token');
        console.log('====================================');
        console.log(token);
        console.log('====================================');
        if (token) {
            this.props.navigation.navigate('map');
            this.tokenVar = true;
            this.setState({ token });
            console.log('====================================');
            console.log("here2");
            console.log('====================================');
        } else {
            this.tokenVar = false;
            this.setState({ token: false });
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        console.log('====================================');
        console.log("rendering!!!");
        console.log('====================================');
        // if (this.tokenVar) {
        //     console.log('====================================');
        //     console.log("I am here");
        //     console.log('====================================');
        //     return <AppLoading />;
        // }
        console.log('====================================');
        console.log("DONE rendering!!!");
        console.log('====================================');

        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }

        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;