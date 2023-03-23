import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ route }) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState({ status: 0, message: '' });
    const authKey = 'phaXf7,rxlO-jiFA';

    const handleLogin = () => {
        // Handle registration logic here
        fetch('https://yumemi-backend.vercel.app/api/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: authKey,
                username: username,
                password: password
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                AsyncStorage.setItem('token', data.user.token);
                AsyncStorage.setItem('user', JSON.stringify(data.user));
                setResponse(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleRegister = () => {
        // Navigate to login screen
        navigation.navigate('Register');
    };

    useEffect(() => {
        if (response.status === 200) {
            setTimeout(() => {
                // Reload screen then navigate to chat screen
                if(route.params?.screen === 'Chat') {
                    navigation.navigate('Chat');
                }
            }, 3000);
        }
    }, [response])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to your Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
                autoCapitalize="none"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <Text style={styles.loginText}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.loginButton}>Register</Text>
                </TouchableOpacity>
            </View>
            {response.message !== '' && (
                <Text style={response.status === 200 ? styles.notification_success : styles.notification_error}>{response.message}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: -130,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginVertical: 8,
        width: '80%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        marginTop: 16,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    login: {
        flexDirection: 'row',
        marginTop: 24,
    },
    loginText: {
        fontSize: 16,
        marginRight: 8,
    },
    loginButton: {
        fontSize: 16,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    notification_success: {
        color: 'green',
        fontSize: 16,
        marginTop: 16,
        backgroundColor: '#d4edda',
        padding: 8,
        borderRadius: 10
    },
    notification_error: {
        color: 'red',
        fontSize: 16,
        marginTop: 16,
        backgroundColor: '#f8d7da',
        padding: 8,
        borderRadius: 10
    },
});

export default LoginScreen;
