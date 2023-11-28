import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const AppointmentScreen = () => (
    <ImageBackground
        source={require('../assets/screensara.jpg')} // Update the path as needed
        style={styles.backgroundImage}
    >
        <View style={styles.contentContainer}>
            <View style={styles.overlay} />
            <Text>לוח שנה לזימון תור</Text>
            <Text>מחירון</Text>
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
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default AppointmentScreen;
