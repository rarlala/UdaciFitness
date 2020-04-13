import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import History from './History';
import EntryDetail from './EntryDetail';

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="History" headerMode="none">
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="EntryDetail" component={EntryDetail} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
