import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterUser from '../services/api/Register';

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function RegisterNewUser() {

        const data = {
            email,
            name,
            password
        }
        
        RegisterUser(data).then(res => {
            if(res == true){
                navigation.navigate('SignIn')
            }
        })

    }

    return (
        <View style={styles.container} >
            <Icon onPress={() => { navigation.navigate('Home') }} style={{ marginTop: 15 }} name="reply" size={29} color="#fff" />
            <Text style={styles.textTitle} >Create your Registry</Text>
            <View style={{ marginTop: 20 }} >
                <Text style={styles.textBody} >Enter some</Text>
                <Text style={styles.textBody} >data to proceed!</Text>
            </View>
            <View style={styles.containerInputs} >
                <TextInput
                    value={name}
                    onChange={event => {setName(event.nativeEvent.text)
                    }}
                    label='Name'
                    autoCapitalize='none'
                    theme={{ colors: { primary: '#ccc', text: '#ccc', placeholder: '#ccc' } }}
                    underlineColor="#1E1C24"
                    style={styles.arround}
                />
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
            <View style={styles.Buttons} >
                <Button
                    style={{

                        backgroundColor: '#fff',
                        flex: 1,
                        padding: 13,
                        borderRadius: 20
                    }}
                    onPress={() => RegisterNewUser()}
                    color='#191720'
                    disabled={!name || !email || !password}
                >Register</Button>
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