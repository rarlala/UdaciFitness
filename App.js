import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddEntry from './components/AddEntry';
import History from './components/History';

import { white, purple } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <NavigationContainer>
          <Tabs.Navigator
            initialRouteName="AddEntry"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let icon;
                if (route.name === 'Add Entry') {
                  icon = (
                    <FontAwesome name="plus-square" size={30} color={color} />
                  );
                } else if (route.name === 'Add Entry') {
                  icon = (
                    <FontAwesome name="ios-bookmarks" size={30} color={color} />
                  );
                }
                return icon;
              },
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === 'ios' ? purple : white,
              style: {
                height: 80,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
              },
            }}
          >
            <Tabs.Screen name="History" component={History} />
            <Tabs.Screen name="AddEntry" component={AddEntry} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
