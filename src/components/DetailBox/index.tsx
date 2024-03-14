import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DetailBoxTypes={
    quantity:string,
    name:string,
    price:number
}

const DetailBox = ({quantity,name,price}:DetailBoxTypes) => {
  return (
    <View className='w-full bg-white min-h-[40px] items-center py-3'>
     <Text className='font-bold text-xl text-[#5D3EBD]'>{"\u20BA"}<Text>{price}</Text></Text>
      <Text className='font-bold text-[16px] pt-2'>{name}</Text>
      <Text className='text-gray-400 font-bold text-xs pb-2'>{quantity}</Text>
    </View>
  )
}

export default DetailBox

