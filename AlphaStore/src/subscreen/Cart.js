import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/slices/productSlices';

const Cart = () => {
  const dispatch = useDispatch();
  const itemCart = useSelector((state) => state.products);

  const RemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const IncrementQuantity = (index) => {
    dispatch(updateQuantity({ index, quantity: itemCart[index].quantity + 1 }));
  };

  const DecrementQuantity = (index) => {
    if (itemCart[index].quantity > 1) {
      dispatch(updateQuantity({ index, quantity: itemCart[index].quantity - 1 }));
    }
  };

  const [price, setPrice] = useState(0);

  // Calculate total price whenever itemCart changes
  useEffect(() => {
    let totalPrice = itemCart.reduce((total, item) => total + item.price * item.quantity, 0);
    setPrice(totalPrice);
  }, [itemCart]);
  

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>My Cart</Text>
      <FlatList
        data={itemCart}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={({ item, index }) => (
          <View style={{ width: '80%', height: 200, borderRadius: 10, elevation: 5, backgroundColor: "#fff", marginLeft: 30, marginBottom: 10, marginTop: 20 }}>
            <Image source={item.image} style={{ width: '100%', height: '50%', borderTopLeftRadius: 10 }} />
            <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>{"₹" + item.price * item.quantity}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => DecrementQuantity(index)} style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity onPress={() => IncrementQuantity(index)} style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, marginLeft: 10 }}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => RemoveFromCart(index)} style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={{ position: 'absolute', bottom: 60, width: '100%', height: 50, backgroundColor: 'gray', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>CheckOut</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Total</Text>
          <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{"₹" + price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
