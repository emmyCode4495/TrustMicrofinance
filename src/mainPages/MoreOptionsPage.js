import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const MoreOptionsPage = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:colors.white}}>
    <Text style={{fontSize:20}}>More Options</Text>
  </View>
  )
}

export default MoreOptionsPage