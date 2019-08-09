import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle} placeholder="Search" />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0EEEE',
        height: 50,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 24,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;