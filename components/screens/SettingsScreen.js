import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Slider } from '@react-native-community/slider';
import { ColorPicker } from 'react-native-color-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [themeColor, setThemeColor] = useState('#000');

    const getUser = async () => {
        const userNow = await AsyncStorage.getItem('user');
        if (userNow != null) {
            setUser(JSON.parse(userNow));
        }
    };
    useEffect(() => {
        getUser();
    }, [])

    return (
        <View style={styles.container}>
            {
                user != null ? (
                    <>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingTitle}>Notifications</Text>
                            <View style={styles.settingDetailsContainer}>
                                <View style={styles.switchContainer}>
                                    <Text style={styles.settingOption}>Allow Notifications</Text>
                                    <Switch
                                        value={notifications}
                                        onValueChange={value => setNotifications(value)}
                                    />
                                </View>
                                <View style={styles.switchContainer}>
                                    <Text style={styles.settingOption}>Show Preview</Text>
                                    <Switch
                                        value={showPreview}
                                        onValueChange={value => setShowPreview(value)}
                                    />
                                </View>
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
                                <View style={styles.switchContainer}>
                                    <Text style={styles.settingOption}>Dark Mode</Text>
                                    <Switch
                                        value={darkMode}
                                        onValueChange={value => setDarkMode(value)}
                                    />
                                </View>
                                <View style={styles.sliderContainer}>
                                    <Text style={styles.settingOption}>Font Size: {fontSize}</Text>
                                    <Slider
                                        style={{ width: 200, height: 40 }}
                                        minimumValue={12}
                                        maximumValue={24}
                                        step={2}
                                        value={fontSize}
                                        onValueChange={value => setFontSize(value)}
                                    />
                                </View>
                                <View style={styles.colorPickerContainer}>
                                    <Text style={styles.settingOption}>Theme Color:</Text>
                                    <ColorPicker
                                        style={{ width: 200, height: 40 }}
                                        defaultColor={themeColor}
                                        onColorChange={color => setThemeColor(color)}
                                    />
                                </View>
                            </View>
                        </View>
                    </>
                ) : (
                    <Text style={styles.settingContainer}>Please login first...</Text>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    settingContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    settingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingDetailsContainer: {
        marginTop: 10,
    },
    settingOption: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default SettingsScreen;
