import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import colors from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const LoginInput = () => {

  // State to control visibility of password
  const [passwordVisible, setPasswordVisible] = useState(false)

  //States forr Errror Validation
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [phoneError, setPhoneError] = useState("")
  const [passwordError, setPasswordError] = useState("")


  // Error Validation logic
  const handleSubmit = () => {
    var phoneValid = false;
    if (phone.length == 0) {
      setPhoneError("Phone number is required")
    } else if (phone.length != 11) {
      setPhoneError("Phone number must be 11 digit")
    } else {
      setPhoneError('')
      phoneValid = true
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError("Password is required")

    } else if (password.length < 6) {
      setPasswordError("Paasword must have a minimum of 6 characters")

    } else {
      setPasswordError('')
      passwordValid = true
    }

    if (phoneValid && passwordValid) {
      navigation.navigate('bottomTabs')
    }
  }

  const navigation = useNavigation()

  // Fuunction to toggle password visibility
  const toggleShowPassword = () => {
    setPasswordVisible(!passwordVisible)
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        label="Phone Number"
        keyboardType='number-pad'
        value={phone}
        onChangeText={text => setPhone(text)}
        theme={{
          colors: {
            onSurfaceVariant: colors.black,
            primary: colors.lightGrey,
            error: "red"
          }
        }}
        style={{ width: '95%', color: colors.lightGrey }}
      />
      {phoneError.length > 0 && <View style={{ marginTop: 4, marginLeft: 3 }}><Text style={{ color: "rgba(204, 0, 0, 1)", fontFamily: 'Rubik' }}>{phoneError}</Text></View>}
      <View style={{ marginTop: 25 }}>
        <TextInput
          mode='outlined'
          label="Your Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!passwordVisible}
          theme={{
            colors: {
              onSurfaceVariant: colors.black,
              primary: colors.lightGrey
            }
          }}
          style={{ width: '95%', color: colors.lightGrey }}
        />

        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 35, marginTop: -35 }}>
          <Ionicons
            name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={25}
            onPress={toggleShowPassword}
          />
        </View>
      </View>
      {passwordError.length > 0 && <View style={{ marginTop: 10, marginLeft: 3 }}><Text style={{ color: "rgba(204, 0, 0, 1)", fontFamily: 'Rubik' }}>{passwordError}</Text></View>}
      <TouchableOpacity onPress={handleSubmit} >
        <View style={styles.btnView}>
          <Text style={{ fontFamily: 'Mulish', fontWeight: 'bold', color: colors.white }}>
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
    marginLeft: 12,
    marginTop: 30
  },
  btnView: {
    borderWidth: 1,
    padding: 17,
    marginTop: 40,
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.main,
    borderColor: colors.white,
    width: "95%"
  }
});