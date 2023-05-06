import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../assests/Colors/Colors';
export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
