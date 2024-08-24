import { View, Text, FlatList, Dimensions,Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { TransactionsData, accountDetailsData } from '../../constants/data/data'
import HomePageCard from './HomePageCard'
import Carousel from 'react-native-reanimated-carousel'
import { ExpandingDot,LiquidLike } from 'react-native-animated-pagination-dots'
import colors from '../../constants/colors'
import TransactionsCard from './TransactionsCard'

const TransactionsCardContent = () => {
    const {width} = Dimensions.get('window')
    const flatListRef = useRef(null)
    const scrollX = React.useRef(new Animated.Value(0)).current

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0)


  return (
    <View>

    <FlatList
       pagingEnabled
       scrollEnabled={false}
        data={TransactionsData}
        contentContainerStyle={{
          marginBottom:80
        }}
        ItemSeparatorComponent={()=>(
            <View style={{borderBottomWidth:1, marginLeft:20, marginRight:20, borderColor:colors.lightGrey}}/>
        )}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>(
            <View>
                <TransactionsCard
                customerName={item.customerName}
                transactionDate={item.transactionDate}
                transactionTime={item.transactionTime}
                debitAmount={item.debitAmount}
                balAmount={item.balAmount}
                creditAmount={item.creditAmount}
                />
            </View>
        )}
        />

    </View>
  )
}

export default TransactionsCardContent