import { View, Text, Pressable, ScrollView, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../constants/colors'
import HomeHeader from '../components/HomeHeader'
import HomePageCardContent from '../components/HomePageCardContent'
import NewUsersServiceCard from '../components/NewUsers/NewUsersServiceCard'
import NewsUsersTaskCards from '../components/NewUsers/NewsUsersTaskCards'
import NewUserHeader from '../components/NewUsers/NewUserHeader'

const DashboardNewUsers = () => {
    const navigation = useNavigation()

  return (
    <>
    <View style={{flex:1,backgroundColor:colors.white, marginBottom:Platform.OS === 'ios'?0:80}}>
    <NewUserHeader/>
    <ScrollView>
    <HomePageCardContent/>
    <NewUsersServiceCard/>
    <NewsUsersTaskCards/>
    </ScrollView>
    </View>
    </>
  )
}

export default DashboardNewUsers