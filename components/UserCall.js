import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const UserCall = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.picture.thumbnail }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
                <Text style={styles.time}>10:00 AM</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#ccc',
    },
});

export default UserCall;