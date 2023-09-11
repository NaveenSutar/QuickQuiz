import React from 'react';
import Start from './src/screens/Start';
import Score from './src/screens/Score';
import {NavigationContainer} from '@react-navigation/native';
import Quiz from './src/screens/Quiz';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
