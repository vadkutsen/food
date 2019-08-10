import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    
    if (!result) {
        return null;
    }
    
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text>{result.phone}</Text>
            <Text>{result.location.address1}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}    
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        margin: 5,
        borderRadius: 5
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    containerStyle: {
        margin: 10
    }
});

export default ResultShowScreen;