import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/fakeData'
import MealItem from '../components/MealItem'

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

  function renderMealItem(itemData){
    const item = itemData.item

    const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
    }

    return <MealItem {...mealItemProps}/>
}
  return (
    <View style={styles.container}>
      <FlatList 
          data={favoriteMeals} 
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
      />
    </View>
  )
}

export default FavoriteScreen

const  styles= StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,        
  }
}) 