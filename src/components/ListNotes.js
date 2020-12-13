import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListNotes = ({ item, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("UpdateNotes", {item})
            }}
        >
            <View style={styles.container}>
                <View >
                    <Text style={styles.titleNote}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                </View>
                <View>
                    <Text style={styles.dataNote}>{item.createdAt.slice(0, -14)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 0,
        borderRadius: 5,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 90,
        backgroundColor: '#75E6DA',
        height: 100,
        marginBottom: 10,
        display: 'flex'
    },
    titleNote: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    dataNote: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 18,
        padding: 5,
        maxWidth: 280,
        color: '#00141A'
    }
})

export default ListNotes