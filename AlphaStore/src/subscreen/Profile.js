// ProfileScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useDispatch ,useSelector} from 'react-redux';
import userSlice from '../../redux/slices/userSlices';

const ProfileScreen = () => {
 const dispatch = useDispatch();
 const user = useSelector((state) => state.user); // Replace with your Redux user state

  const [address, setAddress] = useState(user.address || '');
  const [profileImage, setProfileImage] = useState(user.profileImage || null);

  const pickImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select Profile Picture',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setProfileImage(response.uri);
        }
      }
    );
  };

  const updateAddress = () => {
    // Implement the logic to update address here
    // You can use API calls to your Express server
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      {profileImage && <Image source={{ uri: profileImage }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
      <TouchableOpacity onPress={pickImage}>
        <Text>Select Profile Picture</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={{ width: '80%', height: 40, borderBottomWidth: 1 }}
      />
      <TouchableOpacity onPress={updateAddress}>
        <Text>Update Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
