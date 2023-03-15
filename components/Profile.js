import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Profile = ({ route }) => {
    // Get user object from route params
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Image source={{ uri: user.picture.large }} style={styles.image} />
                    <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Phone</Text>
                        <Text style={styles.infoText}>{user.phone}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Address</Text>
                        <View style={styles.infoText}>
                            <Text>{user.location.street.number} {user.location.street.name}</Text>
                            <Text>{user.location.city}, {user.location.state} {user.location.postcode}</Text>
                            <Text>{user.location.country}</Text>
                        </View>
                    </View>
                </View>
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
    header: {
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
    },
    email: {
        fontSize: 14,
        color: '#ccc',
    },
    info: {
        padding: 16,
    },
    infoItem: {
        marginBottom: 16,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 14,
        color: '#ccc',
    },
});

export default Profile;
