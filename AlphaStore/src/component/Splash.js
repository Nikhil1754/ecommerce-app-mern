import { View, Text, Image, StyleSheet, Animated, Easing,TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
// Import TouchableOpacity for touch interactions

const Splash = () => {
  const navigation = useNavigation();

  // Create animated value for logo rotation
  const rotation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Animate logo rotation
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
    
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../images/logo.jpg")}
        style={[
          styles.logo,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Splash;
