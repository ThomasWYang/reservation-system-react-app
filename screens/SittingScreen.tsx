import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from '../components';

import { Sitting } from '../components';
import { GetOpenSittings, CreateReservationBySittingId } from '../services/services';


export function SittingScreen() {

    const [sittings, setSittings] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [guests, setGuests] = useState<string>('');
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [id, setId] = useState<number>(0);
    const [selectedSittingInfo, setSelectedSittingInfo] = useState<string>();

    function search() {
        setLoading(true);
        GetOpenSittings().then((data: any) => {
            setSittings(data);
            setLoading(false);
        });
    }

    function onClickSitting(id: number, info: string) {
        setId(id);
        setSelectedSittingInfo(info);
    }

    function reserve() {
        let resInfo = {
            "expectedStartTime": startTime,
            "expectedEndTime": endTime,
            "numOfGuests": Number(guests),
            "custFName": fName,
            "custLName": lName,
            "custEmail": email,
            "custPhone": phone
        };
        let response = CreateReservationBySittingId(id, resInfo);
        console.log(response);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Find Open Sittings</Text>
                <Button title="GO" onPress={search} />
                <View style={styles.row}>
                    <Text style={styles.input}>StartTime</Text>
                    <TextInput style={styles.input} value={startTime} onChangeText={setStartTime} placeholder="e.g. 8:00:00" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>EndTime</Text>
                    <TextInput style={styles.input} value={endTime} onChangeText={setEndTime} placeholder="e.g. 10:00:00" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>Guests</Text>
                    <TextInput keyboardType='numeric' style={styles.input} value={guests} onChangeText={setGuests} placeholder="e.g. 2" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>First Name</Text>
                    <TextInput style={styles.input} value={fName} onChangeText={setFName} placeholder="e.g. Adam" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>Last Name</Text>
                    <TextInput style={styles.input} value={lName} onChangeText={setLName} placeholder="e.g. S" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="e.g. as@gmail.com" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>Phone</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="e.g. 11111111" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.input}>SelectedSitting</Text>
                    <Text>{selectedSittingInfo}</Text>
                </View>
                <Button title="Reserve" onPress={reserve} />
                <Sitting data={sittings} onClick={onClickSitting} />
                {loading ? <ActivityIndicator style={styles.loader} /> : null}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'beige',
    },
    loader: {
        marginTop: 15,
    },
    content: {
        flex: 1,
        marginTop: 5,
    },
    input: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        marginRight: 15,
    },
    row: {
        flexDirection: 'row',

    }
});
