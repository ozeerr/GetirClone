import {  Text, View, Dimensions,Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
const HeaderMain = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="bg-[#F7D102]  flex-row " style={{ height: height * 0.065,width:width }}>
      <View className="h-[100%] w-[85%] items-center justify-center bg-white rounded-tr-[30px] rounded-br-[30px] flex-row px-1">
        <Image className="w-[30px] h-[30px]" source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}} />
        <View className="flex-row items-center gap-1 ">
            <Text className="text-xl text-gray-300 pl-1">|</Text>
          <Text className="font-bold text-[17px] ">Ev</Text>
          <Text className="text-[11px] ">Karşıyaka mah. Geksi cad. Ayça sk. Sel...</Text>
          <TouchableOpacity><Feather name="chevron-right" size={25} color="#6D3EBD" /></TouchableOpacity>
        </View>
      </View>

      <View className="items-center justify-center ml-3">
        <Text className="text-[10px] text-[#6D3EBD]">TVS</Text>
        <Text className="text-xl font-bold text-[#6D3EBD]">13<Text className="text-[15px]">dk</Text></Text>
      </View>
    </View>
  );
};

export default HeaderMain;

