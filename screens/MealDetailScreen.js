import React, { useContext, useLayoutEffect } from 'react'
import { Image, Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { MEALS } from '../data/fakeData'
import { FavoritesContext } from '../store/context/favorites-context'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

function MealDetailScreen({ route, navigation }) {
  const dispatch = useDispatch()
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealsRedux = useSelector((state) => state.favoriteMeals.ids)
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
  const mealIsFavorite = favoriteMealsRedux?.includes(mealId)
  console.log('fav meal', favoriteMealsRedux, mealIsFavorite, mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      // favoriteMealsCtx.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title={mealIsFavorite ? 'UnFav' : 'Fav'} onPress={changeFavoriteStatusHandler} />
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    marginHorizontal: 8,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  }

})