import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalogo from '../screen/catalogo';
import DescricaoFilme from '../screen/filme';

export type RootStackParamList = {
  Catalogo: undefined;
  DescricaoFilme: {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Catalogo">
        <Stack.Screen
          name="Catalogo"
          component={Catalogo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DescricaoFilme"
          component={DescricaoFilme}
          options={{ title: 'Descrição do Filme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
