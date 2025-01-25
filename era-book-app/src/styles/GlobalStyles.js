import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export const MainButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainButton, style]}>
      <Text style={styles.mainButtonText}>{children}</Text>
    </TouchableOpacity>
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
});
