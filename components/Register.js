import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState({ status: 0, message: '' });

    const handleRegister = () => {
        // Handle registration logic here
        fetch('https://yumemi-backend-ih5q.vercel.app/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                setResponse(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleLogin = () => {
        // Navigate to login screen
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
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
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.loginButton}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={response.status === 200 ? styles.notification_success : styles.notification_error}>{response.message}</Text>
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

export default RegisterScreen;
