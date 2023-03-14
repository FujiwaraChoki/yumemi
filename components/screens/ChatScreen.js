import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ChatScreen = () => {

    const data = [
        { id: '1', name: 'John', message: 'Hey, what\'s up?' },
        { id: '2', name: 'Jane', message: 'Not much, how about you?' },
        { id: '3', name: 'Mark', message: 'Hey, do you have a minute?' },
        { id: '4', name: 'Sarah', message: 'Sorry, I\'m busy right now.' },
        { id: '5', name: 'Chris', message: 'Did you finish that project yet?' },
        { id: '6', name: 'Emily', message: 'No, I still have some work to do.' },
        { id: '7', name: 'Mike', message: 'Hey, I\'m running late for our meeting.' },
        { id: '8', name: 'Julia', message: 'No worries, I\'ll wait for you.' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>{item.name.slice(0, 1)}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    avatarContainer: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    avatar: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 16,
    },
});

export default ChatScreen;