import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../constants/colors'

const ServicesCard = ({
   name
}) => {
  return (
    <View style={{}}>
      <View style={{marginBottom:15}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:colors.black}}>{name}</Text>
      </View>
    </View>
  )
}


export default ServicesCard