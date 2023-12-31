import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const AccountScreen = ({ navigation }) => {
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState("User Name"); // Replace with actual user name
    const [userPhone, setUserPhone] = useState("Phone Number");
    const [futureAppointments, setFutureAppointments] = useState(["Appointment 1", "Appointment 2"]);
    const [pastAppointments, setPastAppointments] = useState(["Past Appointment 1"]);
    const [paymentOptions, setPaymentOptions] = useState(["Credit Card", "PayPal"]);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const handleChoosePhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setUserImage(result.assets[0].uri);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={handleChoosePhoto} style={styles.imageContainer}>
                    {userImage ? (
                        <Image source={{ uri: userImage }} style={styles.userImage} />
                    ) : (
                        <View style={styles.placeholderImage}>
                            <Text style={styles.placeholderText}>Tap to add photo</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Phone: {userPhone}</Text>
                <Text style={styles.detailsTitle}>Future Appointments:</Text>
                {futureAppointments.map((appointment, index) => (
                    <Text key={index} style={styles.detailsText}>{appointment}</Text>
                ))}

                <Text style={styles.detailsTitle}>Past Appointments:</Text>
                {pastAppointments.map((appointment, index) => (
                    <Text key={index} style={styles.detailsText}>{appointment}</Text>
                ))}

                <Text style={styles.detailsTitle}>Payment Options:</Text>
                {paymentOptions.map((option, index) => (
                    <Text key={index} style={styles.detailsText}>{option}</Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    imageContainer: {
        borderRadius: 100,
        overflow: 'hidden',
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    placeholderImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#f9c2ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d6336c', // Pink color for the theme
        marginVertical: 10,
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d6336c', // Pink color for the theme
        marginTop: 15,
    },
    detailsText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    placeholderText: {
        color: '#aaa',
    },
});

export default AccountScreen;
