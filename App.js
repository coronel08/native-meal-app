import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import { store } from './store/redux/store';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: 'white' },
      drawerInactiveTintColor: 'black',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: 'pink',
    }}
  >
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoriteScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              title: 'All Catgegories',
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            {/* <Stack.Screen name="MealsCategories" component={CategoriesScreen}/> */}
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="MealsOverview"
              component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {title: catId}
            // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                headerRight: () => {
                  return <Button title='Fav' />
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
