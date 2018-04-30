import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
    //(?<=<p>)(.*)(?=<\/\p>)


    renderCard(job) {
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

        return (
            <Card title={job.title}>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.created_at.substring(0, 10)}</Text>
                </View>
                <Text>{doStuff(job)}</Text>
            </Card>
        );
    }
    render() {
        return (
            <SafeAreaView>
                <Swipe 
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    onSwipeRight={job => this.props.likeJob(job)}
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

function mapStateToProps({jobs}) {
    return { jobs: jobs };
}

export default connect(mapStateToProps)(DeckScreen);