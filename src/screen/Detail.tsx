import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

type DetailProps = StackScreenProps<StackApp, 'Detail'>;

const Detail: React.FC<DetailProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Haloo you in Detail Screen</Text>
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
  }
});

export default Detail;
