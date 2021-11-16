import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ButtonSitting, Sitting } from '../components';
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
    const [selectedSittingInfo, setSelectedSittingInfo] = useState<string>('Please check sittings!');    

    function search() {
        setLoading(true);
        GetOpenSittings().then((data: any) => {
            setSittings(data);
            setLoading(false);
        });
        setTimeout(() => setSelectedSittingInfo('Please select a sitting!'), 1000);
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

            <View style={styles.custInfo}>
                
                <View style={styles.row}>
                    <Text style={styles.label}>Start Time</Text>
                    <TextInput style={styles.input} value={startTime} onChangeText={setStartTime} placeholder="e.g. 8:00:00" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>End Time</Text>
                    <TextInput style={styles.input} value={endTime} onChangeText={setEndTime} placeholder="e.g. 10:00:00" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Guests</Text>
                    <TextInput keyboardType='numeric' style={styles.input} value={guests} onChangeText={setGuests} placeholder="e.g. 2" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.input} value={fName} onChangeText={setFName} placeholder="e.g. Adam" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.input} value={lName} onChangeText={setLName} placeholder="e.g. S" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="e.g. as@gmail.com" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="e.g. 11111111" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Your selection</Text>
                    <TextInput style={styles.input} value={selectedSittingInfo}/>
                </View>
                
            </View>

            <View style={styles.row}>
                <ButtonSitting title='Check Sittings' onPress={search} />
                <ButtonSitting title="Reserve" onPress={reserve} />
            </View>

            <View>
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
    },    
    custInfo: {
        //flex: 1,
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        color: 'gray',
        width: 120,
        padding: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    sittingList: {
        
    },
    loader: {
        marginTop: 15,
    },
    
});
