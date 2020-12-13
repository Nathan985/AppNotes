import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInUser from '../services/api/SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function SignInFunc() {
        const data = {
            email,
            password
        }
       SignInUser(data).then(async res => {
           if(res[0]){
                await AsyncStorage.setItem("userData", JSON.stringify(res[0]));
                navigation.navigate("MyNotes");
           }
           else{
               console.log("INVALIDO");
           }
       })
    }

    return (
        <View style={styles.container} >
            <Icon onPress={() => { navigation.navigate('Home') }} style={{ marginTop: 15 }} name="reply" size={29} color="#fff" />
            <Text style={styles.textTitle} >Let's sign you in</Text>
            <View style={{ marginTop: 20 }} >
                <Text style={styles.textBody} >Welcome back</Text>
                <Text style={styles.textBody} >You've been miseed!</Text>
            </View>
            <View style={styles.containerInputs} >
                <TextInput
                    value={email}
                    onChange={event => setEmail(event.nativeEvent.text)}
                    label='E-mail'
                    autoCapitalize='none'
                    theme={{ colors: { primary: '#ccc', text: '#ccc', placeholder: '#ccc' } }}
                    underlineColor="#1E1C24"
                    style={styles.arround}
                />
                <TextInput
                    value={password}
                    onChange={event => setPassword(event.nativeEvent.text)}
                    label='Password'
                    autoCapitalize='none'
                    theme={{ colors: { primary: '#ccc', text: '#ccc', placeholder: '#ccc' } }}
                    underlineColor="#1E1C24"
                    style={styles.arround}
                />
            </View>
            <Text style={{
                fontSize: 20,
                marginTop: 2,
                textAlign: 'center',
                color: '#ccc',
            }} >Don't have an account?<Text style={{
                color: '#fff',
                fontWeight: 'bold'
            }}> Register</Text></Text>
            <View style={styles.Buttons} >
                <Button
                    style={{

                        backgroundColor: '#fff',
                        flex: 1,
                        padding: 13,
                        borderRadius: 20
                    }}
                    onPress={() => SignInFunc()}
                    color='#191720'
                >Sign in</Button>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        padding: 25,
        flex: 1,
        backgroundColor: '#191720'
    },
    textTitle: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'left',
        color: '#fff',
        fontWeight: 'bold'
    },
    textBody: {
        fontSize: 20,
        marginTop: 2,
        textAlign: 'left',
        color: '#D9E0D7',
    },
    containerInputs: {
        display: 'flex',
        height: 350,
        alignContent: 'center',
        justifyContent: 'center',
    },
    arround: {
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 20,
        backgroundColor: '#423E4F',
        color: '#fff'
    },
    Buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 20,
        alignItems: 'center'
    },
})

export default SignIn