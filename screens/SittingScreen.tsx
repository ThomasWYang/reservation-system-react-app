import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Linking, TouchableOpacity } from 'react-native';

type SittingProps = {
    data: any[];
}

export function SittingScreen({ data }: SittingProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} >

                        <Text style={styles.text}>{item.Title}</Text>
                        <Text style={styles.yearText}>({item.Year})</Text>
                        <a onClick={() => Linking.openURL(`https://www.imdb.com/title/${item.imdbID}/`)}></a>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    row: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkblue',
    },
    text: {
        flex: 1,
        fontSize: 20,
    },
    yearText: {
        marginLeft: 10,
        fontSize: 10,
    },
    img: {
        height: 80,
        width: 80,
        marginRight: 10,
    },
});
