/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import { useCallback, useEffect } from 'react';

import FirebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Questions from 'src/screens/Questions';

import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = (): JSX.Element | null => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>();

  const handleAuthStateChanges = useCallback(
    (newUser: FirebaseAuthTypes.User | null) => {
      setUser(newUser);
      console.log(user);
      if (initializing) setInitializing(false);
    },
    [initializing, user],
  );

  useEffect(() => {
    const subscriber = FirebaseAuth().onAuthStateChanged(
      handleAuthStateChanges,
    );

    return subscriber;
  }, [handleAuthStateChanges]);

  if (initializing) return null;

  const screenOptions = () => {
    return {
      headerShown: false,
    };
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
