import * as React from 'react';

import {BlurView} from '@react-native-community/blur';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScreenProps} from 'src/@types/navigation';

import Sticker from './auxilars/Sticker';

const {height} = Dimensions.get('window');

type StoryCreatorScreenProps = ScreenProps<
  RootNavigatorParmsList,
  'StoryCreator'
>;

const StoryCreatorScreen = (props: StoryCreatorScreenProps) => {
  const modalizeRef = React.useRef<Modalize>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const insets = useSafeAreaInsets();
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/7148953/pexels-photo-7148953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
          style={StyleSheet.absoluteFillObject}
        />

        <Pressable
          style={{
            position: 'absolute',
            left: 17,
            top: 16 + insets.top + 10,
            zIndex: 2,
          }}
          onPress={() => props.navigation.goBack()}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 20,
              height: 20,
              tintColor: 'white',
            }}
            source={require('src/assets/icons/BackIcon.png')}
          />
        </Pressable>

        <Pressable
          style={{
            position: 'absolute',
            right: 17,
            top: 16 + insets.top,
            zIndex: 2,
          }}
          onPress={onOpen}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 35,
              height: 30,
            }}
            source={require('src/assets/icons/StickerIcon.png')}
          />
        </Pressable>

        {media.map((sticker, i) => {
          return (
            <Sticker
              key={`STICKER__${sticker.id}_${i}`}
              imageUrl={sticker.data.images.original.url}
            />
          );
        })}
      </View>

      <Modalize
        modalHeight={height * 0.8}
        modalStyle={{
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
        ref={modalizeRef}>
        <BlurView
          blurType="dark"
          reducedTransparencyFallbackColor="white"
          style={{
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }}
        />
        <View
          style={{
            paddingTop: 14,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'rgba(255,255,255,0.75)',
              height: 34,
              borderRadius: 8,
              paddingLeft: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('src/assets/icons/SearchIcon.png')}
              style={{
                tintColor: 'white',
                width: 16,
                height: 16,
                marginRight: 8,
              }}
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
        </View>
      </Modalize>
    </>
  );
};

export default StoryCreatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
