import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Entypo,FontAwesome,Ionicons,FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import HomeNavigator from "./HomeNavigator";
const Tab = createBottomTabNavigator();

const height = Dimensions.get("window").height;
const RootNavigator = () => {

    const CustomTabBarIcon=({children})=>{
        return(
            <TouchableOpacity className="bg-[#5C3EBC] w-14 h-14 mt-[-8px] rounded-full items-center justify-center shadow-xl">
                <Entypo name="list"  size={40} color="#F7D102" />
            </TouchableOpacity>
        )
    }
    
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        tabBarStyle: { height: height * 0.08},
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} options={{
        tabBarIcon:({color})=>(
            <Entypo name="home" size={24} color={color} />
        )
      }} />
      <Tab.Screen name="Search" component={HomeNavigator} options={{
        tabBarIcon:({color})=>(
            <FontAwesome name="search" size={24} color={color} />
        )
      }} />
        <Tab.Screen name="List" component={HomeNavigator} options={{
        tabBarButton: (props) => <CustomTabBarIcon {...props} />,
      }} />
      <Tab.Screen name="Person" component={HomeNavigator} options={{
        tabBarIcon:({color})=>(
            <Ionicons name="person-sharp" size={24} color={color} />
        )
      }} /><Tab.Screen name="Gift" component={HomeNavigator} options={{
        tabBarIcon:({color})=>(
            <FontAwesome6 name="gift" size={24} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
