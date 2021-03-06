import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const MainNavigator = TabNavigator({
  
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
                screen: StackNavigator({
                review: { screen: ReviewScreen },
                settings: { screen: SettingsScreen }
                })
              }
      }, {
        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }
      })
    }
  }, {
    navigationOptions: {
      tabBarVisible: false
  }
});

export default class App extends React.Component {
  render() {
    const { persistor, store } = configureStore();

    return <Provider store={store}>
            <PersistGate persistor={persistor}>
             <MainNavigator/>
            </PersistGate>
          </Provider> ;
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });