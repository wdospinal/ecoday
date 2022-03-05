import * as React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  question: {
    backgroundColor: 'white',
    width: 280,
    height: 70,
    marginTop: 100,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

const options = [
  {
    title: 'Con que fecuencia utilizas el metro?',
    options: [
      'Ocasionalmente',
      '3 dias a la semana',
      '5 dias a la semana',
      'Todos los dias',
    ],
  },
  {
    title: 'Cuantas veces a la semana usas auto o moto para desplazarte?',
    options: [
      'Ocasionalmente',
      '3 dias a la semana',
      '5 dias a la semana',
      'Todos los dias',
    ],
  },
];

const QuestionsScreen = (): JSX.Element => {
  const [current, setCurrent] = React.useState(0);
  const [question, setQuestion] = React.useState(options[current]);
  const renderItem = React.useCallback(
    ({ item }) => (
      <View style={{ flex: 1 }}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <ImageBackground
      style={styles.container}
      source={require('src/assets/images/trees.png')}>
      <View style={styles.question}>
        <Text style={styles.title}>{question.title}</Text>
      </View>
      <View style={styles.container}>
        <FlatList data={question.options} renderItem={renderItem} />
      </View>
    </ImageBackground>
  );
};

export default QuestionsScreen;
