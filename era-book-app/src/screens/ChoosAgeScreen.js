import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MainButton, ChooseButton } from '../styles/GlobalStyles.js'


const ChooseAgeScreen = ({ navigation }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, label: '14-17' },
        { id: 2, label: '18-24' },
        { id: 3, label: '25-29' },
        { id: 4, label: '30-34' },
        { id: 5, label: '35-39' },
        { id: 7, label: '40-44' },
        { id: 8, label: '45-49' },
        { id: 9, label: '>50' },
    ];

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
    };

    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Choose your age?</Text>
                <Text style={styles.text}>Select age range for better content</Text>

                <View style={styles.buttonContainer}>
                    {options.map((item) => (
                        <View key={item.id} style={styles.buttonWrapper}>
                            <ChooseButton
                                label={item.label}
                                isSelected={selectedOption === item.id}
                                onSelect={() => handleOptionSelect(item.id)}
                            />
                        </View>
                    ))}
                </View>

            </View>
            <View style={styles.bottomContainer}>
                <MainButton title="Continue" onPress={() => navigation.navigate('Choose Genre')}>Continue</MainButton>
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    buttonWrapper: {
        width: '50%', 
        paddingHorizontal: 5,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 20
    },
});

export default ChooseAgeScreen;