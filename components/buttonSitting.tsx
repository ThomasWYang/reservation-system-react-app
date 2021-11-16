import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type ButtonProps = {
    title: string;
    onPress(): void;
}

export function ButtonSitting (props: ButtonProps) {
    const { title, onPress } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: 150,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#a52a2a',
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});