import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Modal, FlatList, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import FinalizeAppointmentScreen from '../screens/FinalizeAppointmentScreen'; // Adjust the path as necessary

const galleryImages = [
    require('../assets/nails1.jpg'),
    require('../assets/nails2.jpg'),
    require('../assets/nails3.jpg'),
    require('../assets/nails4.jpg'),
    require('../assets/nails5.jpg'),
    require('../assets/nails6.jpg'),
    require('../assets/nails7.jpg'),
];
const listData = [
    {
        id: '1',
        name: 'בנייה בשיטת הטיפס ג׳ל',
        avatar: require('../assets/naillogo.png'),
        subtitle: '250₪'

    },
    {
        id: '2',
        name: 'לק ג׳ל מבנה אנטומי/מילוי',
        avatar: require('../assets/naillogo.png'),
        subtitle: '130₪'

    },
    {
        id: '3',
        name: 'לק ג׳ל',
        avatar: require('../assets/naillogo.png'),
        subtitle: '110₪'

    },
    {
        id: '4',
        name: 'הסרת לק ג׳ל',
        avatar: require('../assets/naillogo.png'),
        subtitle: '50₪'

    },
    {
        id: '5',
        name: 'מניקור בלבד',
        avatar: require('../assets/naillogo.png'),
        subtitle: '60₪'

    },
    {
        id: '6',
        name: 'קישוט פרנץ׳/השלמת ציפורן',
        avatar: require('../assets/naillogo.png'),
        subtitle: '10₪'

    },
    {
        id: '7',
        name: 'תוספת קישוט',
        avatar: require('../assets/naillogo.png'),
        subtitle: '20₪'

    },

];


const AppointmentScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAvatars, setSelectedAvatars] = useState([]); // State to track selected avatars

    const openImage = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };
    const handleSelectAvatar = (id) => {
        if (selectedAvatars.includes(id)) {
            setSelectedAvatars(selectedAvatars.filter(item => item !== id));
        } else {
            setSelectedAvatars([...selectedAvatars, id]);
        }
    };

    const isAvatarSelected = (id) => {
        return selectedAvatars.includes(id);
    };
    const handleContinue = () => {
        navigation.navigate('FinalizeAppointmentScreen');
    };

    const renderItem = ({ item }) => (
        <View style={styles.listItemContainer}>
            <View style={styles.nameSubtitleContainer}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listSubtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity onPress={() => handleSelectAvatar(item.id)}>
                <Image source={item.avatar} style={[styles.listAvatar, isAvatarSelected(item.id) ? styles.selectedAvatar : null]} />
            </TouchableOpacity>
        </View>
    );

    return (
        <ImageBackground
            source={require('../assets/screensara.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.contentContainer}>
                <View style={styles.overlay} />

                {/* Gallery Title */}
                <Text style={styles.galleryTitle}>גלריה 👇</Text>

                {/* Gallery Code */}
                <ScrollView style={styles.galleryContainer} horizontal>
                    {galleryImages.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => openImage(image)}>
                            <Image source={image} style={styles.galleryImage} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.queueType}>סוג התור 🕐️</Text>
                <Text style={styles.smallPrint}>בחרי אחד או יותר</Text>



                {/* FlatList for displaying the list */}
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.listContainer}
                />

                {/* Modal for Image Display */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={selectedImage} style={styles.fullSizeImage} />
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text>סגור</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={styles.container}>
                    {/* ... Your existing components ... */}
                    <TouchableOpacity
                        onPress={handleContinue}
                        style={{ backgroundColor: '#000000', padding: 5, borderRadius: 101 }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>המשיכי</Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
    },
    galleryTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        left: 165,
    },
    queueType: {
        marginTop: 100,
        fontSize: 18,
        fontWeight: 'bold',
        left: 155,
        top: -80,
    },
    smallPrint: {
        fontSize: 12, // Set the font size smaller
        color: '#666', // Optional: set the text color
        left: 160,
        top: -80,
    },
    galleryContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    galleryImage: {
        width: 95,
        height: 95,
        borderRadius: 10,
        marginRight: 10,
    },
    modalView: {
        margin: 50,
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    fullSizeImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    closeButton: {
        backgroundColor: '#fddcdb',
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    tableContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: 200,
    },
    treatmentCell: {
        flex: 1,
        textAlign: 'left',
    },
    priceCell: {
        flex: 1,
        textAlign: 'right',
    },
    listContainer: {
        marginTop: -70,
        flexGrow: 10,

    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'flex-end',
        marginLeft: 130,

    },
    listAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 15,
    },
    listName: {
        fontSize: 15,
        textAlign: 'right',
    },
    nameSubtitleContainer: {
        justifyContent: 'center',
        marginRight: 15,
    },
    listSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'right',
    },
    selectedAvatar: {
        borderColor: 'white',
        borderWidth: 6,
    },
    container: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute', // Position the button absolutely
        bottom: 20, // Distance from bottom
        left: 20, // Distance from right
        padding: 0, // Optional padding
    },


});

export default AppointmentScreen;
