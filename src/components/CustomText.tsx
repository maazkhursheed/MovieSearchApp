import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ text }) => {
  return (
    <Text style={styles.info}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff',
  },
});

export default CustomText;
