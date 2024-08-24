import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors'

const NewsUsersTaskCards = () => {
  return (
    <View>
        <View style={styles.mainView}>
    <View style={{flexDirection:'row'}}>
      <View>
        <Ionicons
        name="shield-checkmark-outline"
        size={25}
        color={colors.main}
        />
      </View>
      <View style={{marginTop:5, marginLeft:10}}>
        <Text style={{fontSize:18, color:'rgba(102, 102, 102, 1)'}}>Upgrade KYC Level</Text>
      </View>
      </View>

      <View>
      <Ionicons
      name="checkmark-outline"
      size={30}
      color={colors.main}
      />
      </View>
      </View>

      <View style={{...styles.mainView, borderColor:'rgba(214, 233, 241, 1)'}}>
    <View style={{flexDirection:'row'}}>
      <View>
        <MaterialIcons
        name="insert-chart-outlined"
        size={25}
        color="rgba(51, 181, 236, 1)"
        />
      </View>
      <View style={{marginTop:5, marginLeft:10}}>
        <Text style={{fontSize:18, color:'rgba(102, 102, 102, 1)'}}>Set Account Limits</Text>
      </View>
      </View>
      </View>

      <View style={{...styles.mainView, borderColor:'rgba(233, 95, 40, 0.3)'}}>
    <View style={{flexDirection:'row'}}>
      <View>
        <Ionicons
        name="finger-print"
        size={25}
        color="rgba(233, 95, 40, 1)"
        />
      </View>
      <View style={{marginTop:5, marginLeft:10,}}>
        <Text style={{fontSize:18, color:'rgba(102, 102, 102, 1)'}}>Enable your biometrics</Text>
      </View>
      </View>
      </View>
    </View>
  )
}

export default NewsUsersTaskCards

const styles = StyleSheet.create({
    mainView:{
        justifyContent:'space-between', 
        flexDirection:'row', 
        borderWidth:1, 
        padding:15, 
        marginRight:20, 
        marginLeft:20, 
        borderColor:colors.main,
        marginTop:10,
        borderRadius:10,
    
    }
})