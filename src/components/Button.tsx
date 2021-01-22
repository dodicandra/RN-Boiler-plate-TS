import React from 'react';

import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...props}) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    paddingHorizontal: 24,
    borderRadius: 7
  },
  text: {
    color: 'white',
    fontSize: 19
  }
});

export default Button;
