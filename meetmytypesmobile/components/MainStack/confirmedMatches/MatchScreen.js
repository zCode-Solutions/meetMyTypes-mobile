import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class MatchScreen extends Component {
    render() {
        return (
            <View style= {styles.container}>
                
                <Text>matches Component</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})