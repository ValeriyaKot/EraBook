import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MainButton } from '../styles/GlobalStyles.js'


const OptionRadioButton = ({ label, isSelected, onSelect }) => {
    return (
        <View style={styles.selectContainer}>
            <TouchableOpacity style={styles.optionContainer} onPress={onSelect}>
                <Ionicons
                    name={isSelected ? 'radio-button-on' : 'radio-button-off'}
                    size={24}
                    color={isSelected ? '#F89300' : '#ccc'}
                    style={styles.icon}
                />
                <Text style={styles.selectText}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};


const ChooseGenderScreen = ({ navigation }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, label: 'I am male' },
        { id: 2, label: 'I am female' },
        { id: 3, label: 'Rather not to say' },
    ];

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
    };

    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>What is your gender?</Text>
                <Text style={styles.text}>Select gender for better content</Text>

                {options.map((option) => (
                    <OptionRadioButton
                        key={option.id}
                        label={option.label}
                        isSelected={selectedOption === option.id}
                        onSelect={() => handleOptionSelect(option.id)}
                    />
                ))}

            </View>
            <View style={styles.bottomContainer}>
                <MainButton title="Continue" onPress={() => navigation.navigate('Log in')}>Continue</MainButton>
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
        alignItems: 'baseline'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginVertical: 10
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectContainer: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    selectText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 20
    },
    icon: {
        marginRight: 10,
    },

});

export default ChooseGenderScreen;