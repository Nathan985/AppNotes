import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CreateNewNote from '../services/api/CreateNote';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateNote = ({ navigation }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [id_user, setId_user] = useState("");
    async function GetData() {
        let data = await AsyncStorage.getItem('userData');
        data = JSON.parse(data);
        setId_user(data._id);
    }

    useEffect(() => {
        GetData();
    },[])

    function Create() {
        const data = {
            title,
            body,
            id_user
        }

        CreateNewNote(data).then(res => {
            if(res._id){
                navigation.navigate("MyNotes", {res})
            }
        })
    }

    return (

        <View style={styles.container}>
            <View style={styles.header} >
                <Icon
                    name="reply"
                    size={29}
                    onPress={() => {
                        navigation.navigate("MyNotes")
                    }}
                    color="#75E6DA"
                />

                <Icon
                    name="check"
                    size={29}
                    onPress={() => {
                        Create();
                    }}
                    color="#00FF00"
                />
            </View>
            <View style={styles.containerTitle} >
                <Text style={styles.label} >Title:</Text>
                <TextInput
                    theme={{ colors: { primary: '#000000', background: '#1ADBD2' } }}
                    style={styles.inputTitle}
                    onChange={event => setTitle(event.nativeEvent.text)}
                />
            </View>
            <View style={styles.containerBody} >
                <TextInput
                    theme={{ colors: { primary: '#000000', background: '#1ADBD2' } }}
                    style={styles.inputBody}
                    multiline={true}
                    onChange={event => setBody(event.nativeEvent.text)}
                // maxLength={100}
                />
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        overflow: 'scroll',
        maxHeight: '100%',
        backgroundColor: '#75E6DA'
    },
    header: {
        width: '100%',
        paddingTop: 34,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 14,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 8,
        backgroundColor: '#242325'
    },
    containerTitle: {
        width: '100%',
        backgroundColor: '#1ADBD2',
        padding: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    containerBody: {
        width: '100%',
        backgroundColor: '#1ADBD2',
        padding: 10,
        marginTop: 10,
        height: 550,
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    inputTitle: {
        height: 20,
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
        textDecorationLine: 'none',
        marginTop: -2,
        width: '88%',
        paddingLeft: 0
    },
    inputBody: {
        width: '100%',
    }
})

export default CreateNote