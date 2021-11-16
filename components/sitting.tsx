import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

type SittingProps = {
    data: any[];
    onClick(id: number, info: string): void;
}

export function Sitting({ data, onClick }: SittingProps) {

    function onPressSitting(id: number, info: string) {
        onClick(id, info);
    }

    const FlatListHeader = () => {
        if (data.length > 0) {
            return (
                <TouchableOpacity style={styles.titleRow} >
                    <Text style={styles.titleText}>Date</Text>
                    <Text style={styles.titleText}>Start</Text>
                    <Text style={styles.titleText}>End</Text>
                    <Text style={styles.titleText}>Category</Text>
                    <Text style={styles.titleText}>Seats</Text>
                </TouchableOpacity>
            );
        }
        else {
            return null;
        }
    }

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={data}
                ListHeaderComponent={FlatListHeader}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} onPress={() => onPressSitting(item.id, `${item.date}, ${item.category}`)}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.text}>{item.startTime}</Text>
                        <Text style={styles.text}>{item.endTime}</Text>
                        <Text style={styles.text}>{item.category}</Text>
                        <Text style={styles.text}>{item.remaining}/{item.capacity}</Text>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        paddingVertical:15,
    },
    titleRow: {
        backgroundColor: '#987654',
        borderRadius: 3,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        textAlign: 'center'
    },
    titleText: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    row: {
        backgroundColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#987654',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        textAlign: 'center'
    },
    text: {
        flex: 1,
        fontSize: 12,
    },
});
