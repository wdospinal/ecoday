/* eslint-disable global-require */
import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontStyle: 'italic',
    color: 'white',
    fontSize: 144,
  },
  subtitle: {
    fontStyle: 'italic',
    color: 'white',
    fontSize: 48,
  },
  content: {
    color: 'white',
    fontSize: 24,
    lineHeight: 26,
    marginTop: 60,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  button: {
    height: 70,
    backgroundColor: '#26AA2B',
    alignItems: 'center',
    justifyContent: 'center',
    width: 314,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const VoluntaryScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  const navigateVoluntaryForm = React.useCallback(() => {
    navigation.navigate('VoluntaryForm');
  }, [navigation]);
  return (
    <ImageBackground
      style={styles.container}
      source={require('src/assets/images/treePlant.png')}>
      <View style={styles.header}>
        <Text style={styles.title}>3 mil</Text>
        <Text style={styles.subtitle}>Arboles 2023</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 100 }}>
        <Text style={styles.content}>
          Unete a los casi medio millon de voluntarios para ayudar al planeta y
          ganar mejores premios
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateVoluntaryForm}>
        <Text style={styles.buttonText}>SER VOLUNTARIO</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default VoluntaryScreen;
