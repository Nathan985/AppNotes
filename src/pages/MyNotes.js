import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ListNotes from '../components/ListNotes'
import getNotes from '../services/api/GetNotes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


const MyNotes = ({ navigation, route}) => {


    const [notes, setNotes] = useState([]);

    console.log(route);

    async function SignOut() {
        await AsyncStorage.removeItem("userData");
        navigation.navigate("Home");
    }

    async function getMyNotes() {
        let data = await AsyncStorage.getItem('userData');
        data = JSON.parse(data);
        if (!data._id) {
            navigation.navigate("Home")
        }
        getNotes(data._id).then(res => {
            setNotes(res)
        })
    }

    useEffect(() => {
        getMyNotes();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={() => SignOut()} name="times-circle" size={29} color="#DC143C" />
                <Icon onPress={() => navigation.navigate("CreateNote")} name="plus-circle" size={29} color="#00FF00" />
            </View>
            <ScrollView>
                {
                    notes[0] &&
                    notes.map((item, key) => (
                        <ListNotes key={key} navigation={navigation} item={item} />
                    ))
                }
                {
                    route.params &&
                    <ListNotes navigation={navigation} item={route.params.res} />
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        // padding: 6,
        overflow: 'scroll',
        maxHeight: '100%',
        backgroundColor: '#191720'
    },
    header: {
        paddingTop: 34,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 14,
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
        backgroundColor: '#242325'
    }
})

export default MyNotes;