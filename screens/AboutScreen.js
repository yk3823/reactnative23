import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const AboutScreen = () => (

    <ImageBackground
        source={require('../assets/screensara.jpg')} // Update the path as needed
        style={styles.backgroundImage}
    >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
            <Text>קישורים לאיסנטגרם</Text>
            <Text>גלריה</Text>
            <Text>מיקום</Text>
        </View>

    </ImageBackground>
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // This will cover the entire parent view
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust color and opacity as needed
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default AboutScreen;



