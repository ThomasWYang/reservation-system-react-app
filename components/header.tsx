import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Button } from './buttonReservation';

type HeaderProps = {
    onClick(searchTerm: string): void;
}

export function Header({ onClick }: HeaderProps) {
    const [input, setInput] = useState('');

    function onPress() {
        const searchTerm = input.trim();
        if (searchTerm) {
            onClick(searchTerm);
        }
        else {
            alert("Valid email required");
            window.location.reload();
        }
    }

    return (
        <View>
            <Text style={styles.text}>Search suggestion:</Text>
            <Text style={styles.text}>tx@gmail.com, wy@gmail.com, as@gmail.com</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Enter email to search" />
                <Button title="GO" onPress={onPress} />
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
    },
    text: {
        paddingLeft: 20,
        paddingTop: 15,
        color: 'gray'
    },
    input: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        flex: 1,
        marginRight: 10,
    }
});
