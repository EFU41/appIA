import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ResultPage from './components/ResultPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'take a poto'}}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{title: 'Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
