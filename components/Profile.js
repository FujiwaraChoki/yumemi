import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {
    // Get user object from route params
    const [user, setUser] = useState({
        name: {
            first: 'Loading...',
            last: '',
        },
        email: '',
        phone: '',
        location: {
            street: {
                number: 0,
                name: '',
            },
            city: '',
            state: '',
            country: '',
        },
        picture: {
            large: 'https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png',
        },
    });
    const navigation = useNavigation();

    // If user is null, return error message
    useEffect(() => {
        if (user !== null) {
            setUser(route.params?.user);
        }
    }, [route.params?.user]);

    if (!user) {
        navigation.navigate('Chat');
        return null;
    }

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
                        <Text style={styles.infoTitle}>Adress</Text>
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
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f00',
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
