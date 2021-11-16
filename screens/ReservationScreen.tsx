import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Header, Reservation } from '../components';
import { GetReservationsByEmail } from '../services/services';

export function ReservationScreen() {
    
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    function search(searchTerm: string) {
        setReservations([]);        
        setLoading(true);
        
        GetReservationsByEmail(searchTerm).then((data: any) => {
            setReservations(data);
            setLoading(false);
        });
    }

    return (
        <View style={styles.container}>
            <Header onClick={search} />
            <View style={styles.content}>
                {loading ? <ActivityIndicator style={styles.loader} /> : null}
                <Reservation data={reservations} />                
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        marginTop: 15,
    },
    content: {
        flex: 1,
        marginTop: 5,
    },
});
