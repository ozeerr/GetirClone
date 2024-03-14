import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Product } from '../models';
import * as actions from '../redux/actions/cartActions';
const Stack = createStackNavigator();

function MyStack({route,navigation,cartItems,clearCart}:{cartItems:{product:Product,quantity:number}[],clearCart:()=>void}) {

  const tabHiddenRoutes = ["ProductDetails","CartScreen"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);


  const [totalPrice,setTotalPrice]=useState<number>(0);
  const getProductsPrice=()=>{
      var total=0;
      cartItems.forEach(cartItem=>{
        const price=total+=cartItem.product.fiyat
        setTotalPrice(price)
      });
  }

  useEffect(()=>{
    getProductsPrice();
  },[cartItems,navigation,route])
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="HomePage" component={HomeScreen} 
      options={{
        headerStyle:{backgroundColor:'#5C3EBC'},
        headerTitle:()=>(
            <Image source={require("../../assets/getirlogo.png")} style={{width:70,height:30}} resizeMode="contain"/>
        )
      }}
      />
        <Stack.Screen name="CategoryDetails" component={CategoryFilterScreen} 
      options={{
        headerTintColor:'white',
        headerBackTitleVisible:false,
        headerStyle:{backgroundColor:'#5C3EBC'},
        headerRight:()=>(
            <TouchableOpacity onPress={()=>{navigation.navigate("CartScreen")}} className='mr-10 flex-row bg-white w-[60px] h-[35px] rounded-lg items-center'>
            <Image className='w-6 h-6 ml-1 ' source={require("../../assets/cart.png")}/>
            <View className='w-full h-full rounded-r-lg bg-[#F3EFFE] justify-center items-center '>
            <Text className='text-[#5C3EBC] font-bold text-[12px]'>
              <Text>{"\u20BA"}</Text>{totalPrice.toFixed(2)}
            </Text>
            </View>
            </TouchableOpacity>
        ),
        headerTitle:()=>(
            <Text className='text-white font-bold text-[16px]'>Ürünler</Text>
        )
      }}
      />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}
        options={{
          headerStyle:{backgroundColor:'#5C3EBC'},
          headerBackTitleVisible:false,
          headerTintColor:'white',
          headerLeft:()=>(
            <TouchableOpacity onPress={()=>navigation.goBack()} className='ml-4'>
              <Ionicons name="close" size={27} color="white" />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity onPress={()=>{}} className='mr-4'>
             <Ionicons name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          
          ),

          headerTitle:()=>(
            <Text className='text-white font-bold text-[16px]'>Ürün Detayı</Text>
          )
        }}/>
        <Stack.Screen name="CartScreen" component={CartScreen}
        options={
          {
            headerTintColor:'white',
            headerStyle:{backgroundColor:'#5C3EBC'},
            headerBackTitleVisible:false,
            headerTitle:()=>(
              <Text className='text-white font-bold text-[16px]'>Sepet</Text>
            ),
            headerLeft:()=>(
              <TouchableOpacity onPress={()=>navigation.goBack()} className='ml-4'>
              <Ionicons name="close" size={27} color="white" />
            </TouchableOpacity>
            ),
            headerRight:()=>(
              <TouchableOpacity onPress={()=>clearCart()} className='mr-4'>
                <Fontisto name="trash" size={19} color="white" />
              </TouchableOpacity>
            )

          }
        }
        />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const {cartItems}=state;
  return {
    cartItems:cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    clearCart:()=>dispatch(actions.clearCart())
  }
}

 function HomeNavigator({navigation,route,cartItems,clearCart}:{clearCart:()=>void}){
  return <MyStack route={route} navigation={navigation} cartItems={cartItems} clearCart={clearCart}/>
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator);