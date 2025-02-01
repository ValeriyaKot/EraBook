import React, { useState } from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';


export const MainButton = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.mainButton, style]}>
            <Text style={styles.mainButtonText}>{children}</Text>
        </TouchableOpacity>
    );
};

export const ChooseButton = ({ label, isSelected, onSelect, style }) => {
    return (
        <TouchableOpacity style={[styles.option, style, isSelected ? styles.activeOption : null]} onPress={onSelect}>
            <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
    );
};

export const TextInputField = ({ label, placeholder, value, onChangeText, secureTextEntry = false, children }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                selectionColor="transparent"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isFocused={isFocused}
                secureTextEntry={secureTextEntry}
                style={styles.inputForm}
            />
            <View style={styles.iconContainer}>{children}</View>
        </View>
    );
};

export const theme = {
    colors: {
        primary: '#F89300',
        secondary: '#03dac6',
        background: '#FFFFFF',
        text: '#333',
        white: '#fff',
    },
    fontSizes: {
        small: 12,
        medium: 15,
        large: 24,
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
};


const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: theme.colors.primary,
        width: 300,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    mainButtonText: {
        color: theme.colors.white,
        fontSize: theme.fontSizes.medium,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    option: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#F89300',
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderRadius: 50,
        margin: 10,
        marginLeft: 0,
    },
    activeOption: {
        backgroundColor: '#F89300',

    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textInputContainer: {
        width: '100%',
        marginBottom: 10,
    },

    inputText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    inputForm: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#F89300',
        paddingVertical: 5,
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: [{ translateY: 4 }],
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});
