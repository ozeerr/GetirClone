import {  Dimensions, FlatList, Image, Text, View } from 'react-native'
import React, { useState } from 'react'


const {width,height}=Dimensions.get("window");
const ImageCarousel = ({images}:{images:string[]}) => {
    const [activeIndex, setActiveIndex] =useState(0);
    const onViewRef=React.useRef((viewableItems)=>{
        if(viewableItems.viewableItems.length>0){
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })
    const virwConfigRef=React.useRef({viewAreaCoveragePercentThreshold:50})
  return (
 <View className='items-center w-full bg-white pt-[25px]' style={{height:height*0.25}}>
       <FlatList
    data={images}
    horizontal
    style={{height:height*0.21, width:width*0.5}}
    showsHorizontalScrollIndicator={false}
    snapToInterval={width*0.5}
    snapToAlignment='center'
    decelerationRate={"fast"}
    viewabilityConfig={virwConfigRef.current}
    onViewableItemsChanged={onViewRef.current}
    renderItem={({item})=>{
        return(
            <View>
                <Image source={{uri:item}} style={{height:height*0.21,width:width*0.5,resizeMode:"stretch"}}/>
            </View>
        )
    }}/>
    <View className='flex-row h-9 items-center justify-center'>
        {
            images?.map((image,index)=>{
                return(
                    <Text key={index} className={`${activeIndex==index ? "text-[#5D3EBD]" : "text-[#C4C4C4]"}  text-[40px]`}>{"\u2022"}</Text>
                )
            })
        }
    </View>
 </View>
  )
}

export default ImageCarousel

