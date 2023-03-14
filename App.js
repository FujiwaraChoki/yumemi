import React from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Register from './components/Register';
import AccountScreen from './components/screens/AccountScreen';
import ChatScreen from './components/screens/ChatScreen';
import FriendsScreen from './components/screens/FriendsScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import StatusScreen from './components/screens/StatusScreen';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { setStatusBarHidden } from 'expo-status-bar';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Welcome'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Status') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screenOptions={{
          activeTintColor: '#FF6347',
          inactiveTintColor: 'gray',
        }}
        tabBarStyle={styles.tabBar}
      >
        <Tab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: true,
        }} />
        <Tab.Screen name='Register' component={Register} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: true,
        }} />
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
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 0,
  },
});

export default App;