import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Transactions = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:colors.white}}>
    <Text style={{fontSize:20}}>Transactions</Text>
  </View>
  )
}

export default Transactions