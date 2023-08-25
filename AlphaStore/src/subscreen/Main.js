import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../common/Header';
import { products } from '../Products';
import MyProductItem from '../common/MyProductItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setCategoryList(products.category);
    setCategoryData(products.category[0].data);
  }, []);

  const handleCategoryChange = (index) => {
    setActiveCategoryIndex(index);
    setCategoryData(categoryList[index].data);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <Image
          source={require('../images/bannerMain.jpg')}
          style={styles.bannerImage}
        />
        <View style={styles.categoryContainer}>
          {categoryList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                {
                  backgroundColor:
                    index === activeCategoryIndex ? '#AF0A57' : 'white',
                },
              ]}
              onPress={() => handleCategoryChange(index)}
            >
              <Icon
                name={item.icon} // Use the icon name from the icon pack
                size={20}
                color={index === activeCategoryIndex ? 'white' : '#000'}
                style={styles.icon}
              />
              <Text
                style={[
                  styles.categoryButtonText,
                  {
                    color:
                      index === activeCategoryIndex ? 'white' : '#000',
                  },
                ]}
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MyProductItem item={item} />}
          keyExtractor={(item, index) => index.toString()} // Use index as the key
          contentContainerStyle={styles.productList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: '94%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  categoryContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  productList: {
    marginTop: 20,
  },
});

export default Main;
