import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserCall = ({ user }) => {
    const { name, picture } = user;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigation.navigate('Profile', { user: user });
            }}>
                <Image source={{ uri: picture.thumbnail }} style={styles.image} id={"profile-avatar"} />
            </Pressable>
            <View style={styles.info}>
                <Text style={styles.name}>{`${name.first} ${name.last}`}</Text>
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