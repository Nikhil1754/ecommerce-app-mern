import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement your dark mode logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alpha Store</Text>
      <TouchableOpacity
        style={[
          styles.darkModeButton,
          { backgroundColor: darkMode ? '#AF0A57' : 'black' },
        ]}
        onPress={toggleDarkMode}
      >
        <Text style={styles.buttonText}>{darkMode ? 'Light' : 'Dark'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#AF0A57',
  },
  darkModeButton: {
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Header;
