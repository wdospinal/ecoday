import {ScreenProps} from 'src/@types/navigation';
import Post from 'src/components/Post';
import StoriesSlider from 'src/components/StoriesSlider';
import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HomeScreenProps
  extends ScreenProps<MainNavigationParamsList, 'Home'> {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <StoriesSlider />

        <Post />

        <Post />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
