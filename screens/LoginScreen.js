import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        // Call your backend API to send an SMS
        sendSMSToUser(username, password)
            .then(response => {
                // If SMS sent successfully, navigate to ConfirmationScreen
                navigation.navigate('ConfirmationScreen', { username: username });
            })
            .catch(error => {
                // Handle any errors here
                Alert.alert('Error', 'Failed to send SMS');
            });
    };

    // This function should call your backend API
    const sendSMSToUser = (username, password) => {
        // Use fetch or any other method to call your backend
        // Return a promise
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;
