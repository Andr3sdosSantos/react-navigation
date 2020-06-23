import * as React from 'react';

import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#494ab1',
      }}>
      <Text>Details Screen</Text>
      <Button
        title="Use Dashboards"
        onPress={() => navigation.navigate('Dashboards')}
      />
    </View>
  );
}

function DashboardScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#494ab1',
      }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overwiew'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Dashboards" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
