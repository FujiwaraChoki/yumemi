import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const handleStart = () => {
        // Navigate to the main screen of your app
        navigation.navigate('Register');
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Yumemi</Text>
                <Text style={styles.subtitle}>The chatting app for all your needs</Text>
                <Button title="Get Started" onPress={handleStart} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default WelcomeScreen;
