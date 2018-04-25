import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


class ReviewScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button
                  onPress={() => navigation.navigate('settings')}
                  title="Settings"
                  color="rgba(0,122,255,1)"
                  backgroundColor="rgba(0,0,0,0)"
                />
              ),
        }
    }

    navToSettings = () => {
        this.props.navigation.push('settings', { name: 'Chase' })
        console.log('weeeeee')
    }

    render() {
        return (
            <View>
                <Text>1ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>12ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;