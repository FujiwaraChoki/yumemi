import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Alert } from 'react-native';

const AccountScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = async () => {
        await fetch("https://yumemi-backend.vercel.app/api/account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'phaXf7,rxlO-jiFA'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        }).then(response => response.json())
            .then(data => {
                Alert.alert('Success', 'Account information has been updated.');
                console.log('Success:', data);
            })
    };

    return (
        <View>
            <Text>Account Information</Text>
            <TextInput
                placeholder="Name"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

export default AccountScreen;
