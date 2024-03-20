import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageOne from './components/page1';
import PageTwo from './components/page2';
import PageThree from './components/page3';
import PageFour from './components/page4';
import PageFive from './components/page5';
import PageSix from './components/page6';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="page1"
          component={PageOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="page2"
          component={PageTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="page3"
          component={PageThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="page4"
          component={PageFour}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="page5"
          component={PageFive}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="page6"
          component={PageSix}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
