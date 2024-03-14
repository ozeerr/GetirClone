import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from '../CategoryItem'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
const MainCategories = () => {
    const [categories,setCategories] = useState<Category[]>(categoriesGetir)
  return (
    <View className='flex-1'>
        <View className='flex-row flex-wrap justify-center mt-3 '>
           {categories.map((item)=>(
            <CategoryItem key={item.id} item={item}/>
           ))}
        </View>
    </View>
  )
}

export default MainCategories

