import React, { useEffect, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Register from './components/Register';
import ChatScreen from './components/screens/ChatScreen';
import FriendsScreen from './components/screens/FriendsScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import CallsScreen from './components/screens/CallsScreen';
import Profile from './components/Profile.js';
import Login from './components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [user, setUser] = useState(null);
  const [initRouteName, setInitRouteName] = useState('Welcome');

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    if(user) {
      setInitRouteName('Chat');
    }
  }, [isFirstLaunch, initRouteName]);

  const handleLogout = async () => {
    const token = user.token;
    await AsyncStorage.removeItem('user');
    setUser(null);

    await fetch('https://yumemi-backend.vercel.app/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token
      }),
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('user').then((value) => {
      if (value != null) {
        setUser(JSON.parse(value));
      }
    });
  })

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initRouteName}
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
        {isFirstLaunch == null ? null : isFirstLaunch ? (
          <Tab.Screen name='Welcome' component={WelcomeScreen} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            headerShown: true,
          }} />
        ) : (
          null
        )}
        {
          !user && (
            <>
              <Tab.Screen name='Register' component={Register} options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="person-add-outline"
                    size={30}
                    color={focused ? '#2f95dc' : '#ccc'}

                  />
                ),
              }} />
              <Tab.Screen name='Login' component={Login} options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="log-in-outline"
                    size={30}
                    color={focused ? '#2f95dc' : '#ccc'}

                  />
                ),
              }} />
            </>
          )
        }
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: true,
        }} />
        {
          user && (
            <>
              <Tab.Screen
                name="Calls"
                component={CallsScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name="call-outline"
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
                  tabBarBadge: 3,
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name="chatbox-outline"
                      size={30}
                      color={focused ? '#2f95dc' : '#ccc'}
                    />
                  ),
                  headerRight: () => (
                    <Ionicons
                      name="add-circle-outline"
                      size={30}
                      color="#2f95dc"
                      style={{ marginRight: 10 }}
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
                name="Logout"
                component={WelcomeScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name="log-out-outline"
                      size={30}
                      color={focused ? '#2f95dc' : '#ccc'}
                      onPress={handleLogout}
                    />
                  ),
                }}
              />
            </>
          )
        }
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