import React from 'react'
import {Pressable, View, Text, StyleSheet, Platform} from 'react-native'

function CategoryGridTitle({id, title, color}) {
  return (
    <View style={styles.gridItem}> 
        <Pressable 
            android_ripple={{color:'pink'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed: null]}
        >
            <View style={[styles.innerContainer, {backgroundColor: color} ]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTitle

const styles= StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // shadow for Android
        shadowColor: 'black', //shadow IOS
        shadowOpacity: 0.25, //shadow IOS
        shadowOffset: {width:0, height: 2}, //shadow IOS
        shadowRadius: 8, //shadow IOS
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex:1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex:1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})