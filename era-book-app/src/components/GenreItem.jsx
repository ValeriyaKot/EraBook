import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../redux/BooksSlice.js";


const GenreItem = () => {
    const dispatch = useDispatch();
    const { genres, status, error } = useSelector((state) => state.genres);
    const BASE_URL = "http://192.168.100.4:8000";

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <View>
            <FlatList
                data={genres}
                renderItem={({ item }) => {
                    const imageUrl = `${BASE_URL}/${item.image}`; // Добавил / перед media

                    console.log("Loading image:", imageUrl); // Лог пути к изображению

                    return (
                        <View style={styles.bookContainer}>
                            <ImageBackground style={styles.imageContainer} source={{ uri: imageUrl }} resizeMode="cover">
                                <Text style={styles.title}>{item.name}</Text>
                            </ImageBackground>
                        </View>
                    );
                }}
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
        margin: 5

    },

});

export default GenreItem;