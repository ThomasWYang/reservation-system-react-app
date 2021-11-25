import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

type ReservationProps = {
    data: any[];
}

export function Reservation({ data }: ReservationProps) {

    const FlatListHeader = () => {
        if (data.length > 0) {
            return (
                <TouchableOpacity style={styles.titleRow} >
                    <Text style={styles.titleText}>Date</Text>
                    <Text style={styles.titleText}>Arrival</Text>
                    <Text style={styles.titleText}>Leave</Text>
                    <Text style={styles.titleText}>Guests</Text>
                    <Text style={styles.titleText}>Status</Text>
                </TouchableOpacity>
            )
        }
        else {
            return null;
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                ListHeaderComponent={FlatListHeader}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} >
                        <Text style={styles.text}>{item.sittingDate}</Text>
                        <Text style={styles.text}>{item.arrival}</Text>
                        <Text style={styles.text}>{item.leave}</Text>
                        <Text style={styles.text}>{item.guests}</Text>
                        <Text style={styles.text}>{item.status}</Text>
                    </TouchableOpacity>
                )}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 0,
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
