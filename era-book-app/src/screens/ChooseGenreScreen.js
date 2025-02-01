import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MainButton, ChooseButton } from '../styles/GlobalStyles.js';

const ChooseGenreScreen = ({ navigation }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { id: 1, label: 'Fiction' },
        { id: 2, label: 'Non-fiction' },
        { id: 3, label: 'Mystery' },
        { id: 4, label: 'Fantasy' },
        { id: 5, label: 'Sci-fi' },
        { id: 6, label: 'Romance' },
        { id: 7, label: 'Biography' },
        { id: 8, label: 'History' },
    ];

    const handleOptionSelect = (id) => {
        if (selectedOptions.includes(id)) {
            setSelectedOptions(selectedOptions.filter(option => option !== id));
        } else {
            setSelectedOptions([...selectedOptions, id]);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Choose the book genre you like?</Text>
                <Text style={styles.text}>Select your preferred book genre for better recommendations</Text>

                <View style={styles.buttonContainer}>
                    {options.map((item) => (
                        <View key={item.id} style={styles.buttonWrapper}>
                            <ChooseButton
                                label={item.label}
                                isSelected={selectedOptions.includes(item.id)}
                                onSelect={() => handleOptionSelect(item.id)}
                                style={styles.customButton}
                            />
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <MainButton title="Continue" onPress={() => navigation.navigate('Complete Profile')}>Continue</MainButton>
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    buttonWrapper: {
        marginHorizontal: 5
    },
    customButton: {
        paddingHorizontal: 15,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default ChooseGenreScreen;
