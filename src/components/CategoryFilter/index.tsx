import { ScrollView,Dimensions, Text, View } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir';
import { Category } from '../../models';

const height = Dimensions.get("window").height;

const CategoryBox=({item,active}:{item:Category,active:Category})=>{
    return(
        <View className={`items-center justify-center px-[9px] ${active.name==item.name &&" border-b-4 border-b-[#F7D102] "}`}>
            <Text className='text-white text-[14px] font-bold'>{item.name}</Text>
        </View>
    )

}

const CategoryFilter = ({category}:{category:Category}) => {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView className='w-full bg-[#7849F7]' style={{height:height*0.06}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true} >
       {
      categories.map((item)=>{
            return(
               <CategoryBox key={item.id} item={item} active={category} />
                
            )
      })
       }
    </ScrollView>
  )
}

export default CategoryFilter

