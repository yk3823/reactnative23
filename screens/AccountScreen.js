import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AccountScreen = ({ navigation }) => {
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState("User Name"); // Replace with actual user name

    const handleChoosePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.assets && response.assets.length > 0) {
                setUserImage(response.assets[0].uri);
            }
        });
    };

    return (
        <ImageBackground
            source={require('../assets/screensara.jpg')} // Update the path as needed
            style={styles.backgroundImage}
        >
            <View style={styles.contentContainer}>
                <View style={styles.overlay} />

                <TouchableOpacity onPress={handleChoosePhoto}>
                    {userImage ? (
                        <Image source={{ uri: userImage }} style={styles.userImage} />
                    ) : (
                        <View style={styles.placeholderImage}>
                            <Text>Tap to add photo</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <Text>{userName}</Text>
                {/* Other details */}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    // ... other styles ...
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    placeholderImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 250, 255, 0.3)',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default AccountScreen;
