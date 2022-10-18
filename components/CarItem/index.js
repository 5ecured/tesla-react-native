import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import StyledButton from '../StyledButton'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton
                type='primary'
                content='custom order'
                onPress={() => {
                    console.warn('customer order pressed')
                }}
            />

            <StyledButton
                type='secondary'
                content='existing inventory'
                onPress={() => {
                    console.warn('existing inventory pressed')
                }}
            />

        </View>
    )
}

export default CarItem