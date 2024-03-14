import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Category } from '../../models';

const height = Dimensions.get("window").height;

const TypeBox=({item,active,setCategory}:{item:string,active:string,setCategory:any})=>{
    return(
        <TouchableOpacity onPress={()=>setCategory(item)} style={{height:height*0.045}} className={`px-[10px] mr-4 rounded-[8px] items-center justify-center ${item==active && "bg-[#5C3EBC]"} border-[#f0eff7] border-2`}>
            <Text className={`text-[12px] text-[#7849F7] font-bold ${item==active && "text-white"}`}>{item}</Text>
        </TouchableOpacity>
    )
}

const TypeFiltering = () => {
    const [category, setCategory] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView className='w-full bg-white pt-[2%] pl-1' style={{height:height*0.071}}  showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {
                ["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"]
                .map((item,index)=>{
                    return(
                        <TypeBox key={index} item={item} active={category} setCategory={setCategory}/>
                    )
                })
            }
    </ScrollView>
  )
}

export default TypeFiltering

