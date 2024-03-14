import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from '../ProductItem'
import productsGetir from '../../../assets/productsGetir'

const ProductsContainer = () => {
  return (
    <View>
      <View className='flex-row items-start bg-white shadow-lg ' >
      {productsGetir.slice(0,2).map((item)=>{
            return(
                <ProductItem key={item.id} item={item}/>
            )
      })}        
      </View>
        <Text className='text-gray-500 font-bold p-[14px]'>Çubuk</Text>
    <View className='flex-row flex-wrap bg-white pt-5 flex-1'>
    {productsGetir.slice(2).map((item)=>{
            return(
                <ProductItem key={item.id} item={item}/>
            )
        })}
    </View>
      
    </View>
  )
}

export default ProductsContainer

const styles = StyleSheet.create({})