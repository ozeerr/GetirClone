import {  Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/cartActions'
import { Product } from '../../models'

type cartButtonTypes={
    addItemToCart:(a:Product)=>void
    item:Product
}

const CartButton = ({item,addItemToCart}:cartButtonTypes) => {
  return (
    <View className='bg-white w-full h-[13%] absolute bottom-0 items-center justify-center'>
      <TouchableOpacity onPress={()=>addItemToCart(item)} className='bg-[#5C3EBC] py-4 px-[35%] rounded-md'><Text className='text-white font-bold'>Sepete Ekle</Text></TouchableOpacity>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart:(product:Product)=>dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(CartButton)

