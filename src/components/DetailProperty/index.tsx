import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DetailProperty = () => {
    const [details, setDetails] = useState(
        [
            "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
            "İçindekiler",
            "Besin Değerleri",
            "Kullanım",
            "Ek Bilgiler"
        ]
    )

    const TextComponent=({detail,index}:{detail:string,index:number})=>{
        return(
           <View className={` border-gray-300 flex-row items-center justify-between ${index==(details.length - 1) ? "border-b-[0px]":"border-b-[0.3px]"}`}>
             <Text className={`py-4 px-4 text-[#687482] text-[14px] font-medium ${index==0 && "text-xs text-gray-800"}`}>{detail}</Text>
             {index!=0 && <TouchableOpacity className='px-4'><Feather name="chevron-down" size={24} color="#687482" /></TouchableOpacity>}
           </View>
        )
    }
  return (
    <View className='bg-white shadow-xl'>
     <ScrollView>
     {details.map((item,index)=>{
            return(
                <TextComponent key={index} index={index} detail={item}/>
            )
      })}
     </ScrollView>
    </View>
  )
}

export default DetailProperty

const styles = StyleSheet.create({})