import { Image, StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { Product } from '../../models'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/cartActions'
type CartItemProps={
    product:Product
    quantity:number
    removeFromCart:(product:Product)=>void
}
const { width,height } = Dimensions.get("window");
const CartItem = ({product,quantity,removeFromCart}:CartItemProps) => {
  return (
    <View style={{height:height*0.13}} className='justify-between items-center px-3 bg-white flex-row border-b-[0.2px] border-b-gray-300'>
      <View className='flex-row items-center'>
        <Image style={{height:height*0.09,width:height*0.09}} source={{uri:product.image}}/>
        <View className='ml-[8px]'>
            <Text className='text-[13px] font-bold' style={{maxWidth:width*0.45}}>{product.name}</Text>
            <Text className='text-[12px] text-[#848897] font-bold'>{product.miktar}</Text>
            <Text className='text-[#5D3EBD] font-bold mt-2 text-[15px]'>
                <Text>{"\u20BA"}</Text>
                {product.fiyat}</Text>
        </View>
      </View>
      <View className='shadow-2xl  flex-row border-[0.5px] border-gray-300 rounded-xl' style={{width:width*0.22,height:height*0.04}}>
         <TouchableOpacity onPress={()=>removeFromCart(product)} className='flex-1 items-center justify-center'>
                <Text className='text-[#5D3EBD] font-bold'>-</Text>
            </TouchableOpacity>
            <View className='flex-1 items-center justify-center px-1 bg-[#5D3EBD]'>
                <Text className='text-white font-bold'>{quantity}</Text>
            </View>
            <TouchableOpacity className='flex-1 items-center justify-center'>
                <Text className='text-[#5D3EBD] font-bold'>+</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart:(product:Product)=>
        dispatch(actions.removeFromCart(product))
    }
}

export default connect(null,mapDispatchToProps)(CartItem)

