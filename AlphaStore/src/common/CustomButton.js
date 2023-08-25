import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '85%',
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3, // Add shadow for touch feedback
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
