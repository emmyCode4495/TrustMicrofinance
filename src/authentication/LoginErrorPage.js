import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import LoginInput from '../components/LoginInput'

import image from '../../assets/images/image'
import { TextInput } from 'react-native-paper'
import LoginErrorInput from '../components/LoginErrorInput'

const LoginErrorPage = () => {
  return (
    <View style={{backgroundColor:colors.white, flex:1}}>
    <View style={styles.imageViewStyle}>
    <Image
    source={image.profileImage}
    resizeMode='cover'
    style={styles.imageStyle}
    />
      </View>

        <View style={{marginTop:40, marginLeft:20}}>
          <Text style={{fontFamily:'Mulish', fontSize:24, color:colors.main}}>Damilare,</Text>
        </View>
      <View style={{marginTop:30, marginLeft:20}}>
        <Text style={styles.textStyle1}>Kindly enter your login details.</Text>
      </View>

    <LoginErrorInput/>

    <Pressable onPress={()=>{alert("Enable Biometric Login")}}>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:30}}>
        <Text style={{...styles.textStyle1, color:colors.main}}>
             Enable biometric Login
        </Text>
      </View>
      </Pressable>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Text style={{...styles.textStyle1}}>
            Forgot Password?
        </Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Ionicons
        name="finger-print"
        size={40}
        color={colors.main}
        />
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Text style={{...styles.textStyle1}}>
            v.1.1.1
        </Text>
      </View>
    </View>
  )
}

export default LoginErrorPage

const styles = StyleSheet.create({
    textStyle:{
        fontFamily:'Mulish-Bold', 
        color:colors.main, 
        fontSize:24
    },
    textStyle1:{
        fontFamily:'Mulish', 
        color:colors.black, 
        fontSize:15
    },
    imageViewStyle:{
      justifyContent:'center', 
      alignItems:'center', 
      marginTop:50,
    },
    imageStyle:{
      width:109,
      height:109, 
      borderRadius:30
    }
})