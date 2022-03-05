/* eslint-disable global-require */
import * as React from 'react';

import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RewardsScreen = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('src/assets/mockups/Rewards.png')}
    />
  );
};

export default RewardsScreen;
