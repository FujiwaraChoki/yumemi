import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AccountScreen from './screens/AccountScreen';
import ChatScreen from './screens/ChatScreen';
import FriendsScreen from './screens/FriendsScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatusScreen from './screens/StatusScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                style: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="person-outline"
                            size={30}
                            color={focused ? '#2f95dc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="chatbox-outline"
                            size={30}
                            color={focused ? '#2f95dc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Friends"
                component={FriendsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="people-outline"
                            size={30}
                            color={focused ? '#2f95dc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="settings-outline"
                            size={30}
                            color={focused ? '#2f95dc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Status"
                component={StatusScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="information-circle-outline"
                            size={30}
                            color={focused ? '#2f95dc' : '#ccc'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
