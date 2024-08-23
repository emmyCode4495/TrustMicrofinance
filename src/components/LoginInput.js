import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {TextInput} from 'react-native-paper'
import colors from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const LoginInput = () => {
  // State to control visibility of password
  const [passwordVisible, setPasswordVisible] = useState(false)

  const navigation = useNavigation()

  const toggleShowPassword = () =>{
    setPasswordVisible(!passwordVisible)
  }
  return (
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        label="Phone Number"
        theme={{colors:{
            onSurfaceVariant: colors.black,
            primary:colors.lightGrey
        }}}
        style={{width:'95%', color:colors.lightGrey}}
      />
          <View style={{marginTop:25}}>
            
              <TextInput
                  mode='outlined'
                  label="Your Password"
                  secureTextEntry={!passwordVisible}
                  theme={{colors:{
                    onSurfaceVariant: colors.black,
                    primary:colors.lightGrey
                }}}
                  style={{ width: '95%', color: colors.lightGrey }}
              />
              <View style={{justifyContent:'flex-end', alignItems:'flex-end', marginRight:35, marginTop:-35}}>
                <Ionicons
                name={passwordVisible ? 'eye-outline':'eye-off-outline'}
                size={25}

                onPress={toggleShowPassword}
                />
              </View>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('loginerror')}}>
            <View style={styles.btnView}>
                <Text style={{fontFamily:'Mulish', fontWeight:'bold', color:colors.white}}>
                    Login
                </Text>
            </View>
          </TouchableOpacity>
    </View>
  )
}

export default LoginInput

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginLeft:12,
        marginTop:30
    },
  btnView:{
    borderWidth:1,
    padding:17,
    marginTop:40,
    marginRight:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:colors.main,
    borderColor:colors.white,
    width:"95%"
  }
  });