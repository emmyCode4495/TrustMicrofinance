import { View, Text, Image, Platform, StyleSheet } from 'react-native'
import React from 'react'
import image from '../../assets/images/image'
import { AntDesign, Entypo,MaterialCommunityIcons} from '@expo/vector-icons'


const HomeHeader = () => {
  return (
    <View>

        <View style={styles.mainView}>
        <View style={{flexDirection:'row'}}>

    <View>
        <View style={{marginTop:10,marginLeft:25}}>
      <Image
      source={image.profileImage}
      style={{width:40, height:40, borderRadius:50, marginTop:5}}
      />
      </View>

      <View style={styles.ratingView}>
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:1}}>
        <Entypo
        name="star"
        size={8}
        />
        </View>
        <View style={{marginBottom:1}}>
      <Text style={{fontSize:9, fontFamily:'Mulish', fontWeight:'bold'}}>2</Text>
      </View>
      </View>
      </View>
      </View>
      
      <View style={{marginLeft:10, marginTop:10}}>
      <View>
        <Text style={{fontFamily:'Mullish', fontSize:16}}>Hi, Temitope</Text>
      </View>
      <View>
        <Text style={{fontFamily:'Mullish', fontSize:12}}>How are you today?</Text>
      </View>
      </View>
      </View>

      <View style={{flexDirection:'row', marginTop:12}}>
      <View>
      <MaterialCommunityIcons
        name="moon-waning-crescent"
        size={25}
      
        />
      </View>
      <View>
        <AntDesign
        name="bells"
        size={25}
        />
      </View>
      </View>

      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  ratingView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:-50,
    marginLeft:48,
    backgroundColor:"gold", 
    borderRadius:50, 
    width:20, 
    height:20
  },
  mainView:{
    flexDirection:'row', 
    marginTop:Platform.OS === 'ios' ?"18%":"2%" , 
    justifyContent:'space-between', 
    marginRight:12
  }
})