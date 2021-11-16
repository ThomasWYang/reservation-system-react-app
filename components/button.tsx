import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type ButtonProps = {
    title: string;
    onPress(): void;
}

export function Button(props: ButtonProps) {
    const {title, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
    button: {
        padding: 10,
        backgroundColor: '#536eff',
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
