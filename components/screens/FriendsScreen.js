import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FriendsScreen = () => {
    const friends = [];
    const [friendUsername, setFriendUsername] = useState('');
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const userNow = await AsyncStorage.getItem('user');
        if (userNow != null) {
            setUser(JSON.parse(userNow));
        }
    };

    getUser();

    const handleAddFriend = async () => {
        await fetch("https://yumemi-backend-ih5q.vercel.app/api/friends", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                authorization: 'phaXf7,rxlO-jiFA',
                username: friendUsername,
                loggedInUsername: user.username
            }),
        })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friends</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.addFriendSearch}
                    placeholder="Search for friends"
                    onChangeText={setFriendUsername}
                    value={friendUsername}
                    placeholderTextColor="#aaa"
                />
                <Pressable style={styles.searchIcon} onPress={() => {
                    handleAddFriend();
                }}>
                    <Ionicons name="search" size={24} color="black" />
                </Pressable>
            </View>
            <FlatList
                data={friends}
                renderItem={({ item }) => <UserCall user={item} />}
                keyExtractor={(item) => item.login.uuid}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFriendSearch: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 4,
        marginTop: 16,
        width: '80%',
    },
    searchIcon: {
        padding: 12,
        marginTop: 16,
        width: '20%',
    }
})

export default FriendsScreen;
