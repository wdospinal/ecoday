/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import { useCallback, useEffect } from 'react';

import FirebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GreenBondScreen from 'src/screens/GreenBond';
import HomeScreen from 'src/screens/Home';
import ProductScreen from 'src/screens/Product';
import ProductsScreen from 'src/screens/Products';
import Questions from 'src/screens/Questions';
import RewardsScreen from 'src/screens/Rewards';
import VoluntaryScreen from 'src/screens/Voluntary';
import VoluntaryFormScreen from 'src/screens/VoluntaryForm';

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Rewards" component={RewardsScreen} />
      <Stack.Screen name="Voluntary" component={VoluntaryScreen} />
      <Stack.Screen name="VoluntaryForm" component={VoluntaryFormScreen} />
      <Stack.Screen name="GreenBond" component={GreenBondScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
