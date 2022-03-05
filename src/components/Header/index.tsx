/* eslint-disable global-require */
import * as React from 'react';

import FirebaseAuth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scale } from 'src/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scale(6),
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  icon: {
    width: scale(24),
    height: scale(22),
    resizeMode: 'contain',
  },
  logo: {
    width: scale(105),
    height: scale(28),
    resizeMode: 'contain',
  },
});

const Header = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();

  const navigateReward = React.useCallback(() => {
    navigation.navigate('Rewards');
  }, [navigation]);
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Pressable
        style={{
          position: 'absolute',
          left: scale(12),
          bottom: scale(12),
        }}
        onPress={navigateReward}>
        <Image
          style={[styles.icon]}
          source={require('src/assets/icons/CameraIcon.png')}
        />
      </Pressable>
      <Image
        style={styles.logo}
        source={require('src/assets/images/InstagramLogo.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: scale(12),
          bottom: scale(10),
        }}>
        <Image
          style={[styles.icon, { marginRight: scale(18) }]}
          source={require('src/assets/icons/IGTVIcon.png')}
        />

        <Pressable onPress={FirebaseAuth().signOut}>
          <Image
            style={styles.icon}
            source={require('src/assets/icons/MenssangerIcon.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
