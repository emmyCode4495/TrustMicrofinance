import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import LoginInput from '../components/LoginInput'

const LoginPage = () => {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'paddding': 'height'} 
    style={{backgroundColor:colors.white, flex:1}}>
    <View style={{marginTop:45, marginLeft:20}}>
      <Text style={styles.textStyle}>Login to your account</Text>
      </View>

      <View style={{marginLeft:20, marginTop:20}}>
      <View>
        <Text style={styles.textStyle1}>We are glad to have you, kindly enter
            </Text>
      </View>
      <View>
        <Text style={styles.textStyle1}>
            your login details.</Text>
      </View>
      </View>
    
      <LoginInput/>
     
      <View style={{alignItems:'center', justifyContent:'center', marginTop:30}}>
        <Text style={{...styles.textStyle1, color:colors.main}}>
             Don’t have an account? Sign up
        </Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Text 
        
        style={{...styles.textStyle1}}>
            Forgot Password?
        </Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Ionicons
        name="finger-print"
        size={45}
        color={colors.main}
        />
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Text style={{...styles.textStyle1}}>
            v.1.1.1
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginPage

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
    }
})