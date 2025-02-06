import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MainButton, TextInputField } from '../styles/GlobalStyles.js';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/AuthSlice';
import { UserDataContext } from "../context/UserDataContext";


const ChooseGenreScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { userData, setUserData } = useContext(UserDataContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [isChecked, setIsChecked] = useState(false);


    const handleSubmit = () => {
        const updatedUserData = {
            ...userData,
            username,
            email,
            password
        };

        setUserData(updatedUserData);
        dispatch(registerUser(updatedUserData));
    };


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.text}>Enter your username, email & password. If you forget it, then you have to do forgot password</Text>


                <TextInputField
                    label={'Username'}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInputField
                    label={'Email'}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInputField
                    label={'Password'}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secure}>

                    <TouchableOpacity onPress={() => setSecure(!secure)}>
                        <Ionicons name={secure ? "eye-off" : "eye"} size={20} color='#F89300' />
                    </TouchableOpacity>

                </TextInputField>

                <TextInputField
                    label={'Current password'}
                    placeholder="Enter your current password"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry={secure}>

                    <TouchableOpacity onPress={() => setSecure(!secure)}>
                        <Ionicons name={secure ? "eye-off" : "eye"} size={20} color='#F89300' />
                    </TouchableOpacity>

                </TextInputField>

                <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkContainer}>
                    <Ionicons name={isChecked ? "checkmark-circle" : "checkmark-circle-outline"} size={20} color="#F89300" style={{ marginRight: 5 }} />
                    <Text>Remember me?</Text>
                </TouchableOpacity>


            </View>
            <View style={styles.bottomContainer}>
                <MainButton title="Continue" onPress={handleSubmit}>Sign Up</MainButton>
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
    checkContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default ChooseGenreScreen;
