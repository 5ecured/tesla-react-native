import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => (
                    <CarItem car={item} />
                )}
            />
        </View>
    )
}

export default CarsList