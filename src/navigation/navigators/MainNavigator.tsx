/* eslint-disable global-require */
/* eslint-disable default-case */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';

import Header from 'src/components/Header';
import CreatePostScreen from 'src/screens/CreatePost';
import HomeScreen from 'src/screens/Home';
import ProfileScreen from 'src/screens/Profile';
import SearchScreen from 'src/screens/Search';
import { scale } from 'src/utils';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: scale(22),
    height: scale(24),
    resizeMode: 'contain',
  },
  tabBarBackground: {
    backgroundColor: 'rgba(250,250,250,0.01)',
  },
});
const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => <Header />,
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Home':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('src/assets/icons/HomeSelectedIcon.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('src/assets/icons/HomeIcon.png')}
                  />
                );

              case 'Search':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('src/assets/icons/SearchSelectedIcon.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('src/assets/icons/SearchIcon.png')}
                  />
                );

              case 'Create Post':
                return (
                  <Image
                    style={styles.icon}
                    source={require('src/assets/icons/CreatePostIcon.png')}
                  />
                );
              case 'Market':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('src/assets/icons/NotificationsSelectedIcon.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('src/assets/icons/NotificationsIcon.png')}
                  />
                );

              case 'Profile':
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('src/assets/icons/ProfileSelectedIcon.png')}
                    />
                  );
                }
                break;
              default:
                return (
                  <Image
                    style={styles.icon}
                    source={require('src/assets/icons/ProfileIcon.png')}
                  />
                );
            }
            return (
              <Image
                style={styles.icon}
                source={require('src/assets/icons/ProfileIcon.png')}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarBackground: () => <View style={styles.tabBarBackground} />,
          tabBarStyle: {
            borderTopColor: '#CCC',
            borderTopWidth: 0.5,
          },
        };
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create Post" component={CreatePostScreen} />
      <Tab.Screen name="Market" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
