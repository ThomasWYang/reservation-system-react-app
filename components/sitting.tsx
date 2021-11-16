import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

type SittingProps = {
    data: any[];
    onClick(id: number,info:string): void;
}

export function Sitting({ data, onClick }: SittingProps) {

    function onPressSitting(id: number,info:string) {
        onClick(id,info);
    }


    const FlatListHeader = () => {
        return (
            <TouchableOpacity style={styles.titleRow} >
                <Text style={styles.titleText}>Date</Text>
                <Text style={styles.titleText}>StartTime</Text>
                <Text style={styles.titleText}>EndTime</Text>
                <Text style={styles.titleText}>Category</Text>
                <Text style={styles.titleText}>Remaining</Text>

            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                ListHeaderComponent={FlatListHeader}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} onPress={() => onPressSitting(item.id, `${item.date}, ${item.startTime}-${item.endTime}, ${item.category}`)}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.text}>{item.startTime}</Text>
                        <Text style={styles.text}>{item.endTime}</Text>
                        <Text style={styles.text}>{item.category}</Text>
                        <Text style={styles.text}>{item.remaining}/{item.capacity}</Text>
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
    titleRow: {
        backgroundColor: '#987654',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
    },
    row: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#987654',
    },
    text: {
        flex: 1,
        fontSize: 16,
    },
    textLink: {
        flex: 1,
        color: 'blue',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
