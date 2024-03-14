import { Image, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
const { width,height } = Dimensions.get("window");
type productItemTypes={
    item:Product
    addItemToCart:(a:Product)=>void

}
const ProductItem = ({item,addItemToCart}:productItemTypes) => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetails",{product:item})}} className=' mt-4 ml-4 mb-[10px]' style={{height:height*0.23,width:width*0.28}}>
       <View className='border-[0.4px] rounded-[12px] border-gray-600' style={{width:width*0.28, height:width*0.28}}><Image className='rounded-[12px] ' style={{width:width*0.28, height:width*0.28}} source={{uri:item?.image}}/></View>
        <View className='flex-row mt-[10px] items-center'>
            <Text className='text-[11px] text-[#747990] line-through'>
                <Text>{"\u20BA"}</Text>{item?.fiyat}
            </Text>
            <Text className='text-[#5D3EBD] font-bold text-[12px] ml-[4px]'>
                <Text>{"\u20BA"}</Text>{item?.fiyatIndirimli}
            </Text>
        </View>
        <Text className='text-[12px] font-bold mt-[5px]'>{item?.name}</Text>
        <Text className='text-[#747990] text-[12px] mt-1 font-[500]'>{item?.miktar}</Text>
        <TouchableOpacity onPress={()=>{addItemToCart(item)}} className='w-[37px] h-[37px] border-[0.3px] border-gray-400 bg-white absolute right-[-9px] top-[-9px] rounded-lg shadow-sm shadow-[#5e3ebd6e] items-center justify-center'>
        <Entypo name="plus" size={24} color="#5D3EBD" />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart:(product:Product)=>
        dispatch(addToCart({quantity:1,product:product}))
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)

