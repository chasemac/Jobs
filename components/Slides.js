import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length -1) {
            return (
                <Button
                    title="Onwards!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={slide.text} 
                style={[styles.slideStyle, {backgroundColor: slide.color }]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render() {
        return (

                <ScrollView
                    horizontal
                    style={{ flex: 1}}
                    pagingEnabled
                  //backgroundColor: 'blue'
                >
                    {this.renderSlides()}
                </ScrollView>

        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        paddingRight: SCREEN_WIDTH / 7,
        paddingLeft: SCREEN_WIDTH / 7
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15,

        // fontSize: 30,
        // color: 'white',
        // paddingRight: SCREEN_WIDTH / 7,
        // paddingLeft: SCREEN_WIDTH / 7
    }
};

export default Slides;