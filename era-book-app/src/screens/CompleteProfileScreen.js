import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MainButton, TextInputField } from '../styles/GlobalStyles.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { UserDataContext } from "../context/UserDataContext";



const ChooseGenreScreen = ({ navigation }) => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [full_name, setFullName] = useState('');
    const [phone_number, setNumber] = useState('');
    const [country, setCountry] = useState('');
    const [birthday, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [inputDate, setInputDate] = useState(birthday.toLocaleDateString());


    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthday;
        setOpen(false);
        setDate(formatDate(currentDate));
        setInputDate(currentDate);
    };
    

    const handleContinue = () => {
        setUserData({ 
            ...userData, 
            full_name, 
            phone_number, 
            birthday: formatDate(birthday),  
            country 
        });
        navigation.navigate('Create Account'); 
    };

    useEffect(() => {
        console.log('Updated userData:', userData);
    }, [userData]); 

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
                    value={full_name}
                    onChangeText={setFullName}
                />

                <TextInputField
                    label={'Phone number'}
                    placeholder="Enter your phone number"
                    value={phone_number}
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
                        value={birthday}
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
                <MainButton title="Continue" onPress={handleContinue}>Continue</MainButton>
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
