import { View, Text, TouchableOpacity, Image } from 'react-native'
import { React, useState } from 'react'
import Main from '../subscreen/Main';
import Profile from '../subscreen/Profile';
import Cart from '../subscreen/Cart';
import Search from '../subscreen/Search';
import Wishlist from '../subscreen/Wishlist';
const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (<Main />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Wishlist />) : (<Profile />)}
      <View style={{ height: 70, width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        onPress={()=>{
          setSelectedTab(0);
        }}>
          <Image source={require("../images/Main.png")} style={{ width: 24, height: 24 ,tintColor:selectedTab==0?'black':'#5A5A5A'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        onPress={()=>{
          setSelectedTab(1);
        }}>
          <Image source={require("../images/search.png")} style={{ width: 24, height: 24,tintColor:selectedTab==1?'black':'#5A5A5A'}} />
        </TouchableOpacity>
        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 60, height: 60, backgroundColor:selectedTab==2?'red':'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
          onPress={()=>{
            setSelectedTab(2);
          }}>
            <Image source={require("../images/bag.png")} style={{ width: '60%', height: '60%', tintColor: 'white' }} />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        onPress={()=>{
          setSelectedTab(3);
        }}>
          <Image source={require("../images/heart.png")} style={{ width: 24, height: 24 ,tintColor:selectedTab==3?'black':'#5A5A5A'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        onPress={()=>{
          setSelectedTab(4);
        }}>
          <Image source={require("../images/user.png")} style={{ width: 24, height: 24,tintColor:selectedTab==4?'black':'#5A5A5A' }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home