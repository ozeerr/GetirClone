import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView} from 'react-native'
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'


const HomeScreen = () => {
  return (
    <ScrollView className="flex-1"  StickyHeaderComponent={HeaderMain}>
    <HeaderMain/> 
      <BannerCarousel/>
      <MainCategories/>
    </ScrollView>

  )
}

export default HomeScreen

