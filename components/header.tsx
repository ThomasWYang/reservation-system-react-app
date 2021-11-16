import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Button } from './index';

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
    }

    return (
        <View>
            <Text style={[{ paddingLeft: 20, paddingTop: 15 }]}>Existing customers: tx@gmail.com, wy@gmail.com</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Enter a customer's email to search for reservations" />
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
    input: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        flex: 1,
        marginRight: 15,
    }
});
