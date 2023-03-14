import React from 'react';
import { View, Text, FlatList } from 'react-native';

const FriendsScreen = () => {
    const data = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
        { id: '4', name: 'David' },
        { id: '5', name: 'Eve' },
    ];

    const Item = ({ name }) => (
        <View style={{ padding: 10 }}>
            <Text>{name}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item name={item.name} />
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

export default FriendsScreen;
