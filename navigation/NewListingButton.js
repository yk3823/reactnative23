import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewListingButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.button}>
            <MaterialCommunityIcons name="plus-circle" size={40} color="#fff" />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -30, // Adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#a065ec', // Adjust color as needed
        borderRadius: 20,
        width: 60, // Adjust size as needed
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NewListingButton;
