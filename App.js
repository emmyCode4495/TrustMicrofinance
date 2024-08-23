import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginPage from './src/authentication/LoginPage';
import HomePage from './src/mainPages/HomePage';
import { View } from 'react-native';
import colors from './constants/colors';

import  {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import LoginErrorPage from './src/authentication/LoginErrorPage';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync()

export default function App() {

    const [loadedFonts, error] = useFonts({
        'Mulish': require("./assets/fonts/Mulish-Regular.ttf"),
        'Mulish-Bold': require("./assets/fonts/Mulish-Bold.ttf"),
        'Mulish-Black': require("./assets/fonts/Mulish-Black.ttf"),
        'Mulish-Light': require("./assets/fonts/Mulish-Light.ttf")
        
      })
     
      useEffect(() => {
        if(loadedFonts || error){
          SplashScreen.hideAsync()
        }
      }, [loadedFonts, error])
    
      if(!loadedFonts && !error){
        return null
      }

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='loginerror'>
        <Stack.Screen name="login" component={LoginPage}
         options={{
           title:'',
           headerShadowVisible:false,
            headerLeft:()=>(
            <TouchableOpacity style={styles.cancelView}>
             <Text style={{color:colors.main}}>Cancel</Text>
            </TouchableOpacity>
          )
         }}
           
        />
        <Stack.Screen name="home" component={HomePage}/>
        <Stack.Screen name="loginerror" component={LoginErrorPage}
        options={{
            title:'',
            headerShadowVisible:false,
             headerLeft:()=>(
             <TouchableOpacity style={styles.cancelView}>
              <Text style={{color:colors.main}}>Cancel</Text>
             </TouchableOpacity>
             )
        }}
        />
     </Stack.Navigator>
   </NavigationContainer>

  )
}

const styles = StyleSheet.create({
    cancelView:{
        borderWidth:1,
        paddingRight:23,
        paddingLeft:23,
        paddingTop:8,
        paddingBottom:8,
        marginTop:20,
        borderRadius:10,
        borderColor:colors.main
    }
})