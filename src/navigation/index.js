import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TasksScreen from '../screens/Tasks';
import {RecipesStack} from './RecipesStack';
const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="Recettes" component={RecipesStack} />
        <Tabs.Screen name="Liste" component={TasksScreen} />
        <Tabs.Screen name="Profile" component={TasksScreen} />
      </Tabs.Navigator>
      {/*<Stack.Navigator>
        <Stack.Screen name="TasksList" component={TasksScreen} />
        <Stack.Screen name="RecipesList" component={RecipesList} />
        <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
      </Stack.Navigator>*/}
    </NavigationContainer>
  );
}
