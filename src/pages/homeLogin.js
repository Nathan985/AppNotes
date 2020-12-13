import React, { useState, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import image from '../img/Home.png'

const Login = ({navigation}) => (
    <View style={styles.container} >
        <Image source={image} style={{
            width: 300,
            height: 320,
            marginTop: 20
        }} />
        <Text style={styles.textTitle}>A notes app for your creativity to flow</Text>
        <Text style={styles.textBody}>to use the app and let your creativity flow, log in or register on the app</Text>
        <View style={styles.Buttons} >
            <Button
                style={{

                    backgroundColor: '#fff',
                    flex: 1,
                    padding: 13,
                    borderRadius: 20
                }}
                onPress={() => navigation.navigate('Register')}
                color='#191720'
            >Register</Button>
            <Button
                style={{

                    backgroundColor: '#3B3A41',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20,
                    flex: 1,
                    padding: 13,
                    borderRadius: 0
                }}
                onPress={() => {
                    navigation.navigate('SignIn');
                }}
                color='#fff'
            >Sign in</Button>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        padding: 25,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#191720'
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    textBody: {
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        color: '#D9E0D7',
    },
    Buttons: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3B3A41'
    },
    alignBase: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})

export default Login