import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Text, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MainButton } from '../styles/GlobalStyles.js'


const { width } = Dimensions.get('window');

const data = [
    { id: '1', title: 'The number One Best Ebook Store & Reader Application in this Century' },
    { id: '2', title: 'Your library, always in your pocket' },
    { id: '3', title: 'Discover, read, and grow—anytime, anywhere' },
    { id: '4', title: 'Escape into stories with just one tap' },
    { id: '5', title: 'The future of reading, in the palm of your hand' },
];


const FirstScreen = ({ navigation }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(pageIndex);
    };

    const renderItem = ({ item }) => (
        <View style={[styles.item, { width }]}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.mainContainer}>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/books.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />

                <LinearGradient colors={['transparent', '#FFFFFF']} style={styles.gradient} />
            </View>

            <View style={[styles.container, { marginBottom: 0 }]}>
                <Text style={styles.titleText}>Welcome to
                    <Text style={[styles.titleText, { color: '#F89300' }]}> Erabook</Text>
                </Text>
            </View>

            <View style={[styles.container, { marginTop: 0 }]}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    renderItem={renderItem}
                />
                <View style={styles.pagination}>
                    {data.map((_, index) => (
                        <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
                    ))}
                </View>
            </View>

            <View style={styles.container}>
                <MainButton style={styles.google} title="Google login">
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/google.png')} style={styles.googleIcon} />
                        <Text style={styles.googleText}>Continue with Google</Text>
                    </View>
                </MainButton>

                <MainButton title="Get started" onPress={() => navigation.navigate('Choose Gender')}>Get started</MainButton>
                <MainButton style={{ backgroundColor: '#FFF4E7' }} title="Log In" onPress={() => navigation.navigate('Log in')}>
                    <Text style={{ color: '#F89300', justifyContent: 'center' }}>I already have an account</Text>
                </MainButton>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    item: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#F89300',
        width: 12,
        height: 12,
    },
    google: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        height: 16,
        width: 16,
        marginHorizontal: 5,
    },
    googleText: {
        color: '#212021',
        fontSize: 14,
        textAlign: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 350,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        margin: 20,
        color: '#333',
    },

});

export default FirstScreen;