import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import StyledButton from '../StyledButton'

const CarItem = ({ car: { name, tagline, taglineCTA, image } }) => {

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>


            <View style={styles.buttonContainer}>
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

        </View>
    )
}

export default CarItem