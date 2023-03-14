import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AccountScreen = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSave = () => {
        // handle save logic
    };

    return (
        <View>
            <Text>Account Information</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
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
