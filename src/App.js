import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/Pages/HomePage';
import SelectModelPage from './components/Pages/SelectModelPage';
import ModelAvatarPage from './components/Pages/ModelAvatarPage';
import PromtPage from './components/Pages/PromtPage';
import ResultPage from './components/Pages/ResultPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectModelPage"
          component={SelectModelPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ModelAvatarPage"
          component={ModelAvatarPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PromtPage"
          component={PromtPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
