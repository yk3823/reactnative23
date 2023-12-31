import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const FinalizeAppointmentScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [chosenTime, setChosenTime] = useState(new Date());

    const onDateSelect = (day) => {
        setSelectedDate(day.dateString);
        setShowTimePicker(true);
    };

    const onTimeChange = (event, selectedTime) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedTime) {
            setChosenTime(selectedTime);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>בחרי תאריך ושעה:💅🏻</Text>
            <Calendar
                onDayPress={onDateSelect}
                markedDates={{ [selectedDate]: { selected: true, selectedColor: '#DB7093' } }}
                theme={{
                    selectedDayBackgroundColor: '#DB7093',
                    todayTextColor: '#DB7093',
                    arrowColor: '#DB7093',
                    // Add more theme properties to customize other parts of the calendar
                }} />
            {showTimePicker && (
                <DateTimePicker
                    value={chosenTime}
                    mode="time"
                    display="default"
                    onChange={onTimeChange}

                />
            )}
            {/* Display selected date and time */}
            {selectedDate && (
                <Text style={styles.selectedDateTime}>
                    Selected: {selectedDate} at {chosenTime.toLocaleTimeString()}
                </Text>
            )}
            {/* Add more components here for confirmation and other details */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F5',
        paddingTop: 90,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#DB7093', // Soft pink color
        margin: 10,
        left: 100,
    },
    selectedDateTime: {
        fontSize: 16,
        textAlign: 'center',
        color: '#DB7093',
        marginTop: 20,
    },
    // Add more styles here as needed
});

export default FinalizeAppointmentScreen;
