import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../constants/colors'


const TransactionsCard = ({
    customerName,
    transactionDate,
    transactionTime,
    debitAmount,
    balAmount,
    creditAmount
}) => {
  return (
    <View style={{backgroundColor:colors.white, padding:20,marginRight:10, marginLeft:10}}>
     <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
        <View style={{ backgroundColor:colors.lightGrey, padding:15,borderRadius:50, justifyContent:'center', alignItems:'center', marginRight:10}}>
            <Feather
            name="send"
            size={20}
            />
        </View>

    <View>
      <View style={{marginBottom:3, marginTop:5}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:colors.black}}>{customerName}</Text>
      </View>

    <View style={{flexDirection:'row'}}>
      <View style={{marginRight:3}}>
        <Text  style={{fontSize:12, fontWeight:'bold',fontFamily:'Mulish', color:colors.black}}>
            {transactionDate}
        </Text>
      </View>
      <View>
        <Text style={{fontSize:12, fontFamily:'Mulish', color:colors.black}}>
            {transactionTime}
        </Text>
      </View>
      </View>
      </View>
      </View>

     <View>
      
     {creditAmount ?  
     <View style={{marginRight:5, marginTop:5}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:"rgba(32, 130, 32, 1)",fontWeight:'bold'}}>{creditAmount}</Text>
      </View>: 
      <View style={{marginRight:5, marginTop:5}}>
        <Text style={{fontSize:15, fontFamily:'Mulish', color:"rgba(204, 0, 0, 1)", fontWeight:'bold'}}>{debitAmount}</Text>
      </View>}
     
     
      <View style={{marginRight:3}}>
        <Text style={{fontSize:14, fontFamily:'Mulish', color:colors.black}}>{balAmount}</Text>
      </View>
    </View>
    </View>

    </View>
  )
}


export default TransactionsCard