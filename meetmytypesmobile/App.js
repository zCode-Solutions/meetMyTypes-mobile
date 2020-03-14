/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Appbar, Provider as PaperProvider} from 'react-native-paper';
import ProfileScreen from './components/MainStack/Profile/ProfileScreen';
import MainAppNavigator from './navigation/MainAppNavigator';
import LoginNavigator from './navigation/LoginNavigator';
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class App extends Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');
  render() {
    return (
      <PaperProvider>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Title" subtitle="Subtitle" />
        </Appbar.Header>
        <ProfileScreen />
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => console.log('Pressed archive')}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => console.log('Pressed mail')}
          />
          <Appbar.Action
            icon="label"
            onPress={() => console.log('Pressed label')}
          />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>
      </PaperProvider>
    );
  }
}
