import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Notifications</Text>
                <View style={styles.settingDetailsContainer}>
                    <Text style={styles.settingOption}>Allow Notifications</Text>
                    <Text style={styles.settingOption}>Show Preview</Text>
                </View>
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Account</Text>
                <View style={styles.settingDetailsContainer}>
                    <Text style={styles.settingOption}>Change Password</Text>
                    <Text style={styles.settingOption}>Change Email</Text>
                    <Text style={styles.settingOption}>Delete Account</Text>
                </View>
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Appearance</Text>
                <View style={styles.settingDetailsContainer}>
                    <Text style={styles.settingOption}>Dark Mode</Text>
                    <Text style={styles.settingOption}>Font Size</Text>
                    <Text style={styles.settingOption}>Theme Color</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    settingContainer: {
        marginBottom: 20,
    },
    settingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    settingDetailsContainer: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
    },
    settingOption: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default SettingsScreen;
