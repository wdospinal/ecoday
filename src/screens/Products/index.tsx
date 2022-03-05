/* eslint-disable global-require */
import * as React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchContainer: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.75)',
    height: 34,
    borderRadius: 8,
    paddingLeft: 8,
    alignItems: 'center',
    marginHorizontal: '10%',
  },
  search: {
    width: '100%',
    height: 300,
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
  searchIcon: {
    tintColor: 'black',
    width: 16,
    height: 16,
    marginRight: 8,
  },
  categorias: {
    fontSize: 24,
    lineHeight: 26,
    marginTop: 50,
    marginLeft: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  icon: {
    width: 66,
    height: 66,
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    lineHeight: 19,
  },
  more: { marginTop: 50, alignItems: 'center' },
});

const ProductsScreen = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
  const navigateWishes = React.useCallback(() => {
    navigation.navigate('Wishes');
  }, [navigation]);
  const navigateProduct = React.useCallback(() => {
    navigation.navigate('Product');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('src/assets/icons/background.png')}
        style={styles.search}
      />
      <View style={{ top: -200 }}>
        <View style={styles.searchContainer}>
          <Image
            source={require('src/assets/icons/SearchIcon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            autoFocus
            onChangeText={setSearchQuery}
            placeholder="Search..."
            value={searchQuery}
            placeholderTextColor="white"
            style={{
              color: 'white',
            }}
          />
        </View>
        <Text style={styles.categorias}>Categorias</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={navigateProduct}>
            <Image
              source={require('src/assets/icons/aseo.png')}
              style={{
                width: 66,
                height: 66,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 19,
              }}>
              Aseo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={navigateProduct}>
            <Image
              source={require('src/assets/icons/comida.png')}
              style={{
                width: 66,
                height: 66,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 19,
              }}>
              Comida
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image
              source={require('src/assets/icons/variedad.png')}
              style={{
                width: 66,
                height: 66,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 19,
              }}>
              Variedad
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={navigateProduct}>
            <Image
              source={require('src/assets/icons/deport.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Deporte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={navigateProduct}>
            <Image
              source={require('src/assets/icons/hoteles.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Hoteles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={navigateProduct}>
            <Image
              source={require('src/assets/icons/hogar.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Hogar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.more}>
          <TouchableOpacity style={styles.button} onPress={navigateWishes}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('src/assets/images/money.png')}
              />
            </View>
            <Text style={styles.buttonText}>Carrito</Text>
            <Image source={require('src/assets/icons/arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateWishes}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('src/assets/images/money.png')}
              />
            </View>
            <Text style={styles.buttonText}>Lista de deseos</Text>
            <Image source={require('src/assets/icons/arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductsScreen;
