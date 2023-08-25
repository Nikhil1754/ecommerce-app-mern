import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paasword, setPaasword] = useState('');
  const [cpaasword, setcPaasword] = useState('');
  const [badname, setBadName] = useState(false);
  const [bademail, setBadEmail] = useState(false);
  const [badphone, setBadPhone] = useState(false);
  const [badpaasword, setBadPaasword] = useState(false);
  const [badcpaasword, setBadcPaasword] = useState(false);
  const validate = () => {
    name == '' ? setBadName(true) : setBadName(false);
    email == '' ? setBadEmail(true) : setBadEmail(false);
    phone == '' ? setBadPhone(true) : setBadPhone(false);
    paasword == '' ? setBadPaasword(true) : setBadPaasword(false);
    cpaasword == '' ? setBadcPaasword(true) : setBadcPaasword(false);
    if (paasword != cpaasword) {
      Alert.alert("Paasword and Confirm paasword Not same");
      return;
    }

    if (badname == false && bademail == false && badphone == false && badpaasword == false && badcpaasword == false) {
      fetch('http://192.168.29.149:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
          email: email,
          phone:phone,
          paasword: paasword,
          cpaasword:cpaasword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg) {
            console.log(data);
            Alert.alert("Register Succefful");
            navigation.navigate("Login");
          } else {
            Alert.alert('Login Failed', data.msg);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Alert.alert('Login Failed', 'An error occurred during login.');
        });
    };

  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/logo.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 30, borderRadius: 100 }} />
      <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Create New Account</Text>
      <CustomTextInput value={name} onChangeText={setName} placeholder={"Enter Your Name"} icon={require("../images/user.png")} />
      {
        badname == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Name</Text>)
      }
      <CustomTextInput value={email} onChangeText={setEmail} placeholder={"Enter Your Email"} icon={require("../images/mail.png")} />
      {
        bademail == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Email</Text>)
      }
      <CustomTextInput value={phone} keyBoardType={'number-pad'} onChangeText={setPhone} placeholder={"Enter Your Phone No."} icon={require("../images/smartphone.png")} />
      {
        badphone == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Phone No.</Text>)
      }
      <CustomTextInput value={paasword} onChangeText={setPaasword} placeholder={"Enter Your paasword"} type={true} icon={require("../images/padlock.png")} />
      {
        badpaasword == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your paasword</Text>)
      }
      <CustomTextInput value={cpaasword} onChangeText={setcPaasword} placeholder={"Confirm Your paasword"} type={true} icon={require("../images/padlock.png")} />
      {
        badcpaasword == true && (<Text style={{ color: 'red', marginTop: 6, marginLeft: 30, }}>Enter Your Confirm Paasword</Text>)
      }
      <CustomButton onPress={() => {
        validate();
      }} title={"Signup"} bgColor={"#000"} textColor={"#fff"} />
      <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10, textDecorationLine: 'underline', fontWeight: '800' }} onPress={() => {
        navigation.goBack();
      }
      }>Already Have an Account?</Text>
    </View>
  )
}

export default Signup