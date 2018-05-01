import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';


// NEED TO Get LATIDUE AND LONGITUDE from job location

class DeckScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Jobs',
          tabBarIcon: ({ tintColor }) =>
            <Icon name="description" size={30} color={tintColor} />
        };
      };

      

    renderCard(job) {
        console.log('================latitude===BELOW=================');
        console.log(job.lat);
        console.log('================latitude==ABOVE==================');
        console.log('================Region===BELOW=================');
        console.log(job.region);
        console.log('================Region==ABOVE==================');
        const doStuff = (job) => {
            const desc = job.description.substring(0, 900);
            const reg = /<p>(.*?)<\/p>/g;
            const pMatch = reg.exec(desc);
            const matchStrong = /<strong>(.*?)<\/strong>/g.exec(pMatch);

            if (matchStrong) {
                const strongStr = matchStrong[0];
                const strongLength = strongStr.length;
                console.log(strongLength);
                const newDesc = job.description.substring(strongLength, 900);
                const newPMatch = reg.exec(newDesc);
                console.log(newPMatch);
                return newPMatch[1];
            } else {
                return pMatch[1]
            }
            return pMatch[1];
        }
        const initialRegion = {

            longitude: 37.78825,
            latitude: -122.4324,
            longitudeDelta: 0.044,
            latitudeDelta: 0.02,
        }



        return (
            <Card title={job.title}>
            <View style={{ height: 300 }}>
                <MapView
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    cacheEnabled={false}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,}}
                >

                </MapView>
            </View>
            
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.created_at.substring(0, 10)}</Text>
                </View>
                <Text>{doStuff(job)}</Text>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return (
            <Card title="No More Jobs">
                <Button 
                    title="Back To Map"
                    large
                    icon= {{ name: 'my-location' }}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        )
    }
    render() {
        return (
            <SafeAreaView>
                <Swipe 
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={job => this.props.likeJob(job)}
                    keyProp="id"
                />
            </SafeAreaView>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
};

function mapStateToProps({ jobs }) {
    return { jobs: jobs };
}

export default connect(mapStateToProps, actions)(DeckScreen);