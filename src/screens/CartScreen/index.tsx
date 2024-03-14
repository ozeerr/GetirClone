import {  Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsGetir from '../../../assets/productsGetir'
import CartItem from '../../components/CartItem'
import ProductItem from '../../components/ProductItem';
import { connect } from 'react-redux';
import { Product } from '../../models';

const {width,height} = Dimensions.get("window");
const CartScreen = ({cartItems}:{cartItems:{product:Product,quantity:number}[]}) => {

    const [totalPrice,setTotalPrice]=useState<number>(0);
    const getProductsPrice=()=>{
        let total=0;
        cartItems.forEach(item=>{
            total+=item.product.fiyat
            setTotalPrice(total)
        })
        cartItems.length ? null : setTotalPrice(0)
    }

    useEffect(()=>{
        getProductsPrice();

    },[cartItems])

  return (
  <View className='flex-1'>
 <View style={{height:height*0.60}}>
 <FlatList
   data={cartItems}
   renderItem={({item})=>(
        <CartItem product={item.product} quantity={item.quantity}/>
   )}
   />
 </View>
    <Text className='m-2 font-bold text-gray-500'>Önerilen Ürünler</Text>
    <ScrollView
    className='bg-white absolute bottom-[70px]'
    horizontal
    showsHorizontalScrollIndicator={false}>
        {
            productsGetir.map((item)=>{
                return(
                    <ProductItem key={item.id} item={item}/>
                )
            })
        }
    </ScrollView>
    <View className=' bg-white w-full items-center justify-center shadow-2xl absolute bottom-0' style={{height:height*0.09}}>
        <TouchableOpacity className='w-[90%] h-[55%] border-[0.2px] border-gray-400 rounded-lg flex-row items-center shadow-2xl'>
            <View className='h-full w-[65%] bg-[#5D3EBD] rounded-l-lg items-center justify-center'><Text className='text-white font-bold text-md'>Devam</Text></View>
            <View className='items-center justify-center w-[35%]'><Text className='font-bold  text-[20px] text-[#5D3EBD]'><Text>{"\u20BA"}</Text>{totalPrice.toFixed(2)}</Text></View>
        </TouchableOpacity>
    </View>
  </View>
  )
}

const mapStateToProps = (state) => {
    const {cartItems}=state;
    return {
        cartItems:cartItems
    }
}

export default connect(mapStateToProps,null)(CartScreen);

