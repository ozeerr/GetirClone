import {  Text,Dimensions, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'

type categoryItemProps={
    item:Category
}

const CategoryItem = ({item}:categoryItemProps) => {
    const navigation=useNavigation();
    const { width } = Dimensions.get("window");
    
    
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("CategoryDetails",{category:item})} className='items-center justify-between m-[4px] bg-white rounded-md shadow-md' style={{width:width*0.21,height:width*0.21} }>
        <Image source={{uri:item.src}} style={{width:width*0.17,height:width*0.17}}/>
        <Text className='text-[10px] text-[#616161] font-bold'>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem

