import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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


const BookItem = ({ children }) => {


    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.bookContainer}>
                        <Image style={styles.imageContainer} source={require('../../assets/books.jpg')} />
                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.title}>Art&Museum sjhfkdjhfasdbm,nfds</Text>
                            {children} 
                           
                        </View>
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
        height: 'auto',
        marginHorizontal: 10,
        justifyContent: 'flex-start',
    },
    imageContainer: {
        width: 150,
        height: 200,
        borderRadius: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        marginRight: 10,
        color: '#A8AEB1'
    }

});

export default BookItem;