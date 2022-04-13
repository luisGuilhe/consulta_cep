import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BUSCA from './src/index';
import ENDERECO from './src/endereco';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="busca">
        <Stack.Screen name="busca" component={BUSCA} options={{ headerShown:false }} />
        <Stack.Screen name="endereco" component={ENDERECO} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;