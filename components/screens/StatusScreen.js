import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StatusScreen = () => {
    const [statusData, setStatusData] = useState([
        { id: 1, image: require('../../assets/status1.jpg'), clicked: false },
        { id: 2, image: require('../../assets/status2.jpg'), clicked: true },
        { id: 3, image: require('../../assets/status3.jpg'), clicked: false },
        { id: 4, image: require('../../assets/status4.jpg'), clicked: true },
        { id: 5, image: require('../../assets/status5.jpg'), clicked: false },
    ]);

    const handleClick = (id) => {
        setStatusData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, clicked: true } : item
            )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                {statusData.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => handleClick(item.id)}>
                        <View style={styles.statusItemContainer}>
                            <Image source={item.image} style={styles.statusImage} />
                            {item.clicked ? (
                                <View style={styles.statusOverlayClicked} />
                            ) : (
                                <View style={styles.statusOverlay} />
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
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
    statusContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statusItemContainer: {
        width: '30%',
        height: 120,
        marginBottom: 10,
        position: 'relative',
    },
    statusImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    statusOverlay: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#00ff00',
    },
    statusOverlayClicked: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ddd',
    },
});

export default StatusScreen;
