import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import History from './History';
import EntryDetail from './EntryDetail';

import { white } from '../utils/colors';

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="History"
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
        },
      }}
    >
      <Stack.Screen name="History" component={History} />
      <Stack.Screen
        name="EntryDetail"
        component={EntryDetail}
        options={({ route }) => {
          return {
            title: route.params.entryId,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
