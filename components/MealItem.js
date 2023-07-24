import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {Image, View, Text, Platform, Pressable, StyleSheet} from 'react-native'

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation()

  function handleMealClick(){
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => pressed && styles.buttonPressed }
        onPress={handleMealClick}
      >
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity}</Text>
          <Text style={styles.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles= StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,  //Android shadowing
    shadowColor: 'black', //shadow IOS
    shadowOpacity: 0.25, //shadow IOS
    shadowOffset: {width:0, height: 2}, //shadow IOS
    shadowRadius: 8, //shadow IOS
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  }, 
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },  
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5
  }
})