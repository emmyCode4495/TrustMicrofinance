import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
    const navigation = useNavigation()

  return (
    <>
   <Pressable onPress={()=>{navigation.navigate("login")}}>
    <View>
      <Text>HomePage</Text>
    </View>
    </Pressable>
    </>
  )
}

export default HomePage