/* eslint-disable global-require */
import * as React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenProps } from 'src/@types/navigation';

type HomeScreenProps = ScreenProps<MainNavigationParamsList, 'Home'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#7EBB45',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  tons: {
    fontSize: 36,
    lineHeight: 42,
    color: 'white',
  },
  tonsE: {
    fontSize: 22,
    lineHeight: 26,
    color: 'white',
  },
  button: {
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#297B16',
    height: 48,
    width: 326,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 19,
    color: 'white',
    marginLeft: 10,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    maxWidth: 50,
    height: '100%',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: 'white',
    width: 33,
    height: 33,
  },
  buttonsContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = (props: HomeScreenProps) => {
  console.log(props);

  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  const navigateReward = React.useCallback(() => {
    navigation.navigate('Rewards');
  }, [navigation]);
  const navigateProducts = React.useCallback(() => {
    navigation.navigate('Products');
  }, [navigation]);
  const navigateVoluntary = React.useCallback(() => {
    navigation.navigate('Voluntary');
  }, [navigation]);
  const navigateBonds = React.useCallback(() => {
    navigation.navigate('GreenBond');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tons}>5,92</Text>
        <Text style={styles.tonsE}>Toneladas C02e</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateReward}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('src/assets/images/gift.png')}
            />
          </View>
          <Text style={styles.buttonText}>Sistema de recompensas</Text>
          <Image source={require('src/assets/icons/arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateProducts}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('src/assets/images/products.png')}
            />
          </View>
          <Text style={styles.buttonText}>Productos Ecosostenibles</Text>
          <Image source={require('src/assets/icons/arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateVoluntary}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('src/assets/images/voluntier.png')}
            />
          </View>
          <Text style={styles.buttonText}>Ser voluntario</Text>
          <Image source={require('src/assets/icons/arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateBonds}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('src/assets/images/money.png')}
            />
          </View>
          <Text style={styles.buttonText}>Bonos verdes</Text>
          <Image source={require('src/assets/icons/arrow.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
