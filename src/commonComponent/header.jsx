/* eslint-disable no-use-before-define */
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
    return (
        <Text style={styles.title}>{title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },

});
