import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBadEmail, setIsBadEmail] = useState(false);
  const [isBadPassword, setIsBadPassword] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setIsBadEmail(true);
    } else {
      setIsBadEmail(false);
    }

    if (!password) {
      setIsBadPassword(true);
    } else {
      setIsBadPassword(false);
    }

    if (email && password) {
      performLogin();
    }
  };

  const performLogin = () => {
    fetch('http://192.168.29.149:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg) {
          Alert.alert('Login Successful');
          navigation.navigate('Home');
        } else {
          Alert.alert('Login Failed', data.msg);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Login Failed', 'An error occurred during login.');
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../images/logo.jpg')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 40,
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 50,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
        }}>
        Login
      </Text>
      <CustomTextInput
        value={email}
        placeholder={'Enter Your Email'}
        icon={require('../images/mail.png')}
        onChangeText={setEmail}
      />
      {isBadEmail && (
        <Text style={{ marginTop: 6, marginLeft: 30, color: 'red' }}>
          Please Enter Email
        </Text>
      )}
      <CustomTextInput
        value={password}
        placeholder={'Enter Your Password'}
        type={true}
        icon={require('../images/padlock.png')}
        onChangeText={setPassword}
      />
      {isBadPassword && (
        <Text style={{ marginTop: 6, marginLeft: 30, color: 'red' }}>
          Please Enter Password
        </Text>
      )}
      <CustomButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={handleLogin}
      />
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
          fontWeight: '800',
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text>Create New Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
