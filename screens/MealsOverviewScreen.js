import React from 'react'
import { MEALS } from '../data/fakeData'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem'

function MealsOverviewScreen({route}) {
    const routed = useRoute()
    const catId = routed.params.categoryId
    // const catId = route.params.categoryId //can use the hook above or use the param 

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0 
    })

    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title} />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const  styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
}) 