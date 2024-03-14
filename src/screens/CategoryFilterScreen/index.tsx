import { StyleSheet, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFilter from '../../components/CategoryFilter'
import { Category } from '../../models';
import TypeFiltering from '../../components/TypeFiltering';
import ProductItem from '../../components/ProductItem';
import ProductsContainer from '../../components/ProductsContainer';

const CategoryFilterScreen = (props:any) => {
  const [category, setCategory] = useState<Category[]>(props.route?.params.category);
  return (
    <ScrollView>
      <CategoryFilter category={category}/>
      <TypeFiltering/>
      <ProductsContainer/>
    </ScrollView>
  )
}

export default CategoryFilterScreen

const styles = StyleSheet.create({})