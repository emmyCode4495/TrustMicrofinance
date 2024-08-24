import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../constants/colors'
import HomeHeader from '../components/HomeHeader'
import HomePageCardContent from '../components/HomePageCardContent'
import ServiceCardContent from '../components/ServicesCardContent'
import TransactionsCardContent from '../components/TransactionsCardContent'

const HomePage = () => {
  const navigation = useNavigation()

  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <HomeHeader />
        <ScrollView>
          <HomePageCardContent />
          <ServiceCardContent />
          <TransactionsCardContent />
        </ScrollView>
      </View>
    </>
  )
}

export default HomePage