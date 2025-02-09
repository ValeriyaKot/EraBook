import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native';

const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },

];


const GenreItem = () => {


    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.bookContainer}>
                        <ImageBackground style={styles.imageContainer} source={require('../../assets/books.jpg')}>

                            <Text style={styles.title}>{item.title}</Text>
                        </ImageBackground>

                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    bookContainer: {
        width: 150,
        height: 80,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        width: 150,
        height: 80,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 5

    },

});

export default GenreItem;