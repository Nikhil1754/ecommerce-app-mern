import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText, icon, placeholder, type, keyBoardType }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: isFocused ? '#007bff' : '#888' },
      ]}
    >
      <Image source={icon} style={styles.icon} />
      <TextInput
        value={value}
        keyboardType={keyBoardType ? keyBoardType : 'default'}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '85%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  icon: {
    width: '9%',
    height: 24,
  },
  input: {
    marginLeft: 10,
    width: '91%',
    height: '90%',
    fontSize: 16,
  },
});

export default CustomTextInput;
