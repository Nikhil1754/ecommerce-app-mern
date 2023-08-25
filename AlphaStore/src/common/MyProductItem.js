import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { addToCart } from '../../redux/slices/productSlices';
import { useDispatch } from 'react-redux';

const MyProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{"₹" + item.price}</Text>
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <Image
          style={styles.favoriteIcon}
          source={require('../images/heart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
  },
  name: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  addToCartButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addToCartText: {
    fontSize: 14,
  },
  favoriteButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
});

export default MyProductItem;
