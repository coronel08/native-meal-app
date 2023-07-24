import React, { useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/fakeData'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem'

function MealsOverviewScreen({route, navigation}) {
    const routeHook = useRoute()
    const catId = routeHook.params.categoryId
    // const catId = route.params.categoryId //can use the hook above or use the param 

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0 
    })

    // useLayoutEffect instead of useEffect since we need it before the render painting, sets the page title
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId, navigation])


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