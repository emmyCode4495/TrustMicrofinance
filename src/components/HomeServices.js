import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import ServicesCard from './ServicesCard'
import ServiceCardContent from './ServicesCardContent'

const HomeServices = () => {
  return (
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:25, marginLeft:25, marginTop:35}}>
        <View style={{marginTop:10}}>
        <Text style={{color:colors.black,fontWeight:'bold', fontSize:20, fontFamily:'Mulish'}}>Services</Text>
        </View>
        <Pressable>
        <View style={{backgroundColor:"rgba(32, 130, 32, 0.1)", marginTop:5, padding:10, borderRadius:10}}>
        <Text style={{fontSize:15,color:colors.main}}>View all</Text>
        </View>
        </Pressable>
        </View>
    </View>
  )
}

export default HomeServices