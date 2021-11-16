import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={{
          uri: 'https://image.winudf.com/v2/image1/Y29tLmNvZmZlZWxvZ29pZGVhcy5oZnppbmNfc2NyZWVuXzBfMTU4NDc5MDMzNl8wMzU/screen-0.jpg?fakeurl=1&type=.jpg',
        }}
      />
      <Text style={styles.title}>Welcome to BeanSean!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'gray',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 350,
    height: 350,
  },
});
