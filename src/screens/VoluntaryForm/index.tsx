/* eslint-disable global-require */
import * as React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { scale } from 'src/utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 443,
    borderRadius: 46,
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
  titleForm: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontStyle: 'italic',
    color: 'black',
    fontSize: 24,
  },
  subtitleForm: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontStyle: 'italic',
    color: 'black',
    fontSize: 14,
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
    alignSelf: 'center',
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
  input: {
    backgroundColor: '#FAFAFA',
    marginBottom: scale(12),
    paddingVertical: scale(13.5),
    borderRadius: scale(5),
    paddingHorizontal: scale(15),
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

const VoluntaryFormScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  const navigateHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View>
      <ImageBackground
        style={styles.container}
        source={require('src/assets/images/treePlant.png')}>
        <View style={styles.header}>
          <Text style={styles.title}>3 mil</Text>
          <Text style={styles.subtitle}>Arboles 2023</Text>
        </View>
      </ImageBackground>
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.titleForm}>Registra tu correo</Text>
        <Text style={styles.subtitleForm}>
          Para enviarte informacion de como puedes ser voluntario
        </Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.button} onPress={navigateHome}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoluntaryFormScreen;
