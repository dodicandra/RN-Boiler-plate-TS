import React from 'react';

import {StyleSheet, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import Button from '#components/Button';

type HomeProps = StackScreenProps<StackApp, 'Home'>;

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Detail')} title="navigate to Detail Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 25,
    color: 'black'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    paddingHorizontal: 24,
    borderRadius: 7
  }
});

export default Home;
