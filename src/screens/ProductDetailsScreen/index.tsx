import { ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CartButton from '../../components/CartButton';

const ProductDetailsScreen = (props) => {
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(props.route?.params.product)
    }, [])
    
  return (
   <View className='flex-1'>
     <ScrollView >
      <ImageCarousel images={product?.images}/>
      <DetailBox price={product?.fiyat} name={product?.name} quantity={product?.miktar}/>
      <Text className='py-3 pl-3 font-bold text-[#808B99] text-md'>Detaylar</Text>
      <DetailProperty/>
    </ScrollView>
    <CartButton item={product}/>
   </View>
  )
}

export default ProductDetailsScreen

