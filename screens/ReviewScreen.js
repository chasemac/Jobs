import React, { Component } from 'react';
import { View, Text, ScrollView, Linking,  } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
//import { ScrollView } from 'react-native-gesture-handler';


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
            headerTitle: 'Review',
              tabBarIcon: ({ tintColor }) =>
                <Icon name="favorite" size={30} color={tintColor} />
        }
    }

    navToSettings = () => {
        this.props.navigation.push('settings', { name: 'Chase' })
        console.log('weeeeee')
    }



    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const { company, created_at, url, title } = job;
            const initialRegion = {
                longitude: 37.78825,
                latitude: -122.4324,
                longitudeDelta: 0.044,
                latitudeDelta: 0.02,
            }
            return (
                
                <Card key={job.id} title={title}>
                    <View style={{ height: 200 }}>
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
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{created_at.substring(0, 10)}</Text>
                        </View>
                        <Button
                        title="Apply Now!"
                        backgroundColor="#03A9F4"
                        onPress={() => Linking.openURL(url)}
                    />
                    </View>

                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const styles= {
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    italics: {
        fontStyle: 'italic',
    }
}

function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);