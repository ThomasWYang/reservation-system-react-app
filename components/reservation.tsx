import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Linking, TouchableOpacity } from 'react-native';

type ReservationProps = {
    data: any[];
}

export function Reservation({ data }: ReservationProps) {

    const FlatListHeader = () => {
        return (
            <TouchableOpacity style={styles.titleRow} >
                <Text style={styles.titleText}>Date</Text>
                <Text style={styles.titleText}>Sitting</Text>
                <Text style={styles.titleText}>Arrival</Text>
                <Text style={styles.titleText}>Leave</Text>
                <Text style={styles.titleText}>Guests</Text>
                <Text style={styles.titleText}>Status</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>            
            <FlatList
                data={data}
                ListHeaderComponent={FlatListHeader}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} >
                        <Text style={styles.text}>{item.sittingDate}</Text>
                        <Text style={styles.text}>{item.sittingCategoryName}</Text>                        
                        <Text style={styles.text}>{item.arrival}</Text>
                        <Text style={styles.text}>{item.leave}</Text>
                        <Text style={styles.text}>{item.guests}</Text>                    
                        <Text style={styles.text}>{item.status}</Text>
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
});
