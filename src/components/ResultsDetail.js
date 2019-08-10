import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetatil = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 10
    },
    imageStyle: {
        width:250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ResultsDetatil;