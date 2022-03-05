/* eslint-disable react/jsx-no-bind */
/* eslint-disable global-require */
import * as React from 'react';

import CheckBox from '@react-native-community/checkbox';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const options = [
  {
    image: require('src/assets/images/city.png'),
    title: 'Con que fecuencia utilizas el metro?',
    options: [
      'Ocasionalmente',
      '3 dias a la semana',
      '5 dias a la semana',
      'Todos los dias',
    ],
  },
  {
    image: require('src/assets/images/subway.png'),
    title: 'Cuantas veces a la semana usas auto o moto para desplazarte',
    options: [
      'Ocasionalmente',
      '3 dias a la semana',
      '5 dias a la semana',
      'Todos los dias',
    ],
  },
  {
    image: require('src/assets/images/mall.jpeg'),
    title: 'Cuanto en promedio gastas al mes en ropa?',
    options: [
      'Menos de 500 mil',
      'Entre 500 mil y un millon',
      'Entre 500 mil y un millon',
      'Mas de 2 millones',
    ],
  },
  {
    image: require('src/assets/images/family.jpeg'),
    title: 'Cuantas personas viven en tu casa?',
    options: ['Solo yo', 'Dos', 'Tres', 'Cuatro o mas'],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {},
  question: {
    backgroundColor: 'white',
    width: 280,
    height: 70,
    marginTop: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionOptions: {
    backgroundColor: 'white',
    width: 280,
    height: 280,
    marginTop: 100,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const QuestionsScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();

  const [current, setCurrent] = React.useState(0);
  const [isSelected, setSelected] = React.useState(0);
  const [question, setQuestion] = React.useState(options[current]);
  const [value, setValue] = React.useState(0);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const onPress = React.useCallback(
    index => {
      setValue(value + index);
      setSelected(index);
    },
    [value],
  );
  const nextQuestion = React.useCallback(
    index => {
      if (current + 1 >= options.length) {
        navigation.navigate('Home');
      } else {
        setValue(value + index);
        setCurrent(current + 1);
        setQuestion(options[current + 1]);
        setSelected(-1);
      }
    },
    [current, navigation, value],
  );

  const renderItem = React.useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={{
          flex: 1,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => onPress(index)}>
        <CheckBox
          disabled={false}
          value={isSelected === index}
          onValueChange={setToggleCheckBox}
        />
        <Text style={{ marginLeft: 10 }}>{item}</Text>
      </TouchableOpacity>
    ),
    [onPress, isSelected],
  );
  return (
    <ImageBackground style={styles.container} source={question.image}>
      <View style={styles.question}>
        <Text style={styles.title}>{question.title}</Text>
      </View>
      <View style={styles.questionOptions}>
        <FlatList data={question.options} renderItem={renderItem} />
        <TouchableOpacity
          onPress={nextQuestion}
          style={{
            backgroundColor: '#7EBB45',
            borderRadius: 10,
            width: 50,
            alignContent: 'flex-end',
          }}>
          <Image source={require('src/assets/icons/arrow.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default QuestionsScreen;
