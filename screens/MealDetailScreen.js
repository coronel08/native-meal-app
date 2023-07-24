import React from 'react'
import { Image, Text, StyleSheet, View, ScrollView } from 'react-native'
import { MEALS } from '../data/fakeData'

function MealDetailScreen({route}) {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  console.log(' meal id', selectedMeal)

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
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
    color:'white'
  },
  subtitle: {
    color:'white',
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