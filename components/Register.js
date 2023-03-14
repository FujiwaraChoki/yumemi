import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Registering user with email:', email, 'and password:', password);
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
});

export default RegisterScreen;
