import { View, Text,
  ToastAndroid, // For Android-specific toast message
  AlertIOS,     // For iOS-specific alert message
  Platform,      // To handle cross-platform differences
  Pressable
} from 'react-native'

import  Clipboard from '@react-native-clipboard/clipboard'
import React, { useState } from 'react'
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../constants/colors'

const HomePageCard = ({
    accountType,
    accountBalance,
    accountName,
    accountNumber
}) => {

  const [passwordVisible, setPasswordVisible] = useState(false)

  const copyIt = () =>{Clipboard.setString(accountNumber)}

  const [copyText, setCopyText] = useState('');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (copyText) {
        Clipboard.setString(copyText);

        // Display a success message
        if (Platform.OS === 'android') {
            ToastAndroid.show('Text copied to clipboard!',
                ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert('Text copied to clipboard!');
        }

        setCopied(true);
    }
};

    const handleCopyText = (text) => {
        setCopyText(text);
        setCopied(false);
    };

  const toggleShowPassword = () =>{
    setPasswordVisible(!passwordVisible)
  }

  return (
    <View style={{backgroundColor:'rgba(32, 130, 32, 1),rgba(197, 201, 222, 0.2)', marginTop:30,padding:30,marginRight:20, marginLeft:20, borderRadius:15}}>
      <View style={{marginBottom:15}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:colors.white}}>{accountType}</Text>
      </View>
      {passwordVisible ? 
      <View>
        <Text  style={{fontSize:25, fontWeight:'bold',fontFamily:'Mulish', color:colors.white}}>
            NGN{accountBalance}
        </Text>
      </View>: <View>
        <Text  style={{fontSize:25, fontWeight:'bold',fontFamily:'Mulish', color:colors.white}}>
            NGN ********
        </Text>
      </View>}
      
      <View style={{marginTop:20}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:colors.white}}>
            {accountName}
        </Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>

       
     <View style={{marginTop:15, marginRight:5}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:colors.white}}
        >{accountNumber}</Text>
      </View>
      
      <View style={{marginTop:15}}>
        <AntDesign
          name='copy1'
          size={14}
          color={colors.white}
          onPress={copyIt}
        />
      </View>
     
      </View>
      

    <View style={{flexDirection:'row', marginTop:15}}>
      <View style={{marginRight:3}}>
        <Text style={{fontSize:14, fontFamily:'Mulish', color:colors.white}}>Hide Balance</Text>
      </View>

      <View>
        <Fontisto
        name={passwordVisible ? 'toggle-off':'toggle-on'}
        size={20}
        color={passwordVisible? colors.lightGrey:colors.white}
        onPress={toggleShowPassword}
        />
      </View>
      </View>
      </View>
    </View>
  )
}


export default HomePageCard