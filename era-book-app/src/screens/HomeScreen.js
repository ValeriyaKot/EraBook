import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import BookItem from '../components/BookItem.jsx';
import GenreItem from '../components/GenreItem.jsx';


const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(pageIndex);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View >
                <View style={styles.container}>
                    <Text style={styles.titleText}>Explore by Genre</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="arrow-forward-outline" size={25} color='#F89300' />
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <GenreItem />
                </View>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Your last readings</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="arrow-forward-outline" size={25} color='#F89300' />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <BookItem />
                </View>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Recomendations for you</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="arrow-forward-outline" size={25} color='#F89300' />
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <BookItem>
                        <View style={styles.detailsContainer} >
                            <Ionicons name="star-half" size={14} color="#A8AEB1" />
                            <Text style={styles.text}>4.8</Text>
                            <Ionicons name="logo-usd" size={14} color="#A8AEB1" />
                            <Text style={styles.text}>45</Text>
                        </View>
                    </BookItem>

                </View>




            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
        paddingVertical: 10,
        backgroundColor: "#fff"

    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    text: {
        marginRight: 10,
        color: '#A8AEB1'
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5
    },

});

export default HomeScreen;