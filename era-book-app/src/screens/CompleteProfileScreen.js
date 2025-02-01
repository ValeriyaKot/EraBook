import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MainButton, TextInputField } from '../styles/GlobalStyles.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';



const ChooseGenreScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [inputDate, setInputDate] = useState(date.toLocaleDateString());


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setOpen(false);
        setDate(currentDate);
        setInputDate(currentDate.toLocaleDateString());
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Complete your profile</Text>
                <Text style={styles.text}>Don`t worry, only you can see your personal information.</Text>

                <View style={styles.avatarContainer}>
                    <Image style={styles.avatarImage} source={require('../../assets/meerkat.png')}></Image>
                </View>

                <TextInputField
                    label={'Full name'}
                    placeholder="Enter your full name"
                    value={fullName}
                    onChangeText={setFullName}
                />

                <TextInputField
                    label={'Phone number'}
                    placeholder="Enter your phone number"
                    value={number}
                    onChangeText={setNumber}
                />

                <TextInputField label={'Birthday'}
                    placeholder="Enter your birthday"
                    value={inputDate}
                    onChangeText={setInputDate}>

                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Ionicons name="calendar" size={20} color='#F89300' />
                    </TouchableOpacity>

                </TextInputField>
                {open && (
                    <DateTimePicker
                        value={birthDate}
                        mode="date"
                        display="spinner"
                        onChange={onChange}
                    />
                )}

                <TextInputField
                    label={'Country'}
                    placeholder="Enter your country"
                    value={country}
                    onChangeText={setCountry}
                />
            </View>
            <View style={styles.bottomContainer}>
                <MainButton title="Continue" onPress={() => navigation.navigate('Create Account')}>Continue</MainButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        margin: 20,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginVertical: 10,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default ChooseGenreScreen;
