import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Linking, Alert, Image, Modal } from 'react-native';

const address = "HaMeginim St 12, Gan Yavne";
const googleMapsURL = `https://maps.app.goo.gl/oc5bjvAQgefsdhfD9`;
const wazeURL = `https://ul.waze.com/ul?preview_venue_id=22741310.227478635.293024&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`;
const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=HaMeginim+St+12,Gan+Yavne&zoom=15&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7CHaMeginim+St+12,Gan+Yavne&key=AIzaSyBA_g53A_JHYJC4eeONj0cszbxf4cVYgGU`;

const TikTokURL = 'https://www.tiktok.com/@sara__kenan?_t=8hw9vdrRijK&_r=1';
const instagramURL = 'https://instagram.com/sara.keinan.nails?igshid=MzMyNGUyNmU2YQ==';
const WhatsappURL = 'https://wa.link/zo2ahr';

const openMap = (mapType) => {
    const url = mapType === 'googleMaps' ? googleMapsURL : wazeURL;
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            Alert.alert("Error", "Unable to open this URL: " + url);
        }
    });
};

const chooseMap = () => {
    Alert.alert(
        "Open in Map",
        "Choose a map application to open",
        [
            { text: "Google Maps", onPress: () => openMap('googleMaps') },
            { text: "Waze", onPress: () => openMap('waze') },
            { text: "Cancel", onPress: () => { }, style: 'cancel' }
        ],
        { cancelable: true }
    );
};

const openInstagram = () => {
    Linking.canOpenURL(instagramURL).then(supported => {
        if (supported) {
            Linking.openURL(instagramURL);
        } else {
            console.log("Don't know how to open URI: " + instagramURL);
        }
    });
};

const openTikTok = () => {
    Linking.canOpenURL(TikTokURL).then(supported => {
        if (supported) {
            Linking.openURL(TikTokURL);
        } else {
            console.log("Don't know how to open URI: " + TikTokURL);
        }
    });
};

const openWhatsapp = () => {
    Linking.canOpenURL(WhatsappURL).then(supported => {
        if (supported) {
            Linking.openURL(WhatsappURL);
        } else {
            console.log("Don't know how to open URI: " + WhatsappURL);
        }
    });
};

const AboutScreen = () => {
    return (

        <ImageBackground
            source={require('../assets/sara.jpg')} // Update the path as needed
            style={styles.backgroundImage}
        >
            <View style={styles.overlay} />
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={chooseMap} style={styles.mapContainer}>
                    <Image
                        source={{ uri: staticMapUrl }}
                        style={styles.mapImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openInstagram} style={styles.instagramContainer}>
                    <Image
                        source={require('../assets/iconsinstagram.png')}
                        style={styles.instagramIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openTikTok} style={styles.tiktokContainer}>
                    <Image
                        source={require('../assets/iconstiktok.png')}
                        style={styles.instagramIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openWhatsapp} style={styles.whatsappContainer}>
                    <Image
                        source={require('../assets/logowhatsapp.png')}
                        style={styles.instagramIcon}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};


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
        paddingTop: 50,
    },
    mapContainer: {
        position: 'absolute',
        bottom: 70,
    },
    instagramContainer: {
        position: 'absolute',
        bottom: 20,
        left: 140,
    },
    tiktokContainer: {
        position: 'absolute',
        bottom: 20,
        // right: 170,
    },
    whatsappContainer: {
        position: 'absolute',
        bottom: 20,
        right: 140,
    },
    mapImage: {
        width: 400,
        height: 250,
        borderRadius: 15,
    },
    instagramIcon: {
        width: 50,
        height: 40,
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

});

export default AboutScreen;