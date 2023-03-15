import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import UserCall from '../UserCall';

const CallsScreen = () => {
    // Get random users function
    const getRandomUsers = async (num) => {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`).then((res) =>
            res.json()
        ).catch((err) => console.log(err));

        return response.results;
    };

    const data = getRandomUsers(10)[0];

    console.table(data);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Calls</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <UserCall user={item} />}
                    keyExtractor={(item) => item.login.uuid}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default CallsScreen;
