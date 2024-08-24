import { View, Text, FlatList, Dimensions,Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { accountDetailsData } from '../../constants/data/data'
import HomePageCard from './HomePageCard'
import Carousel from 'react-native-reanimated-carousel'
import { ICarouselInstance } from "react-native-reanimated-carousel";
import { ExpandingDot,LiquidLike } from 'react-native-animated-pagination-dots'
import colors from '../../constants/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const PAGE_WIDTH = window.width;

const HomePageCardContent = () => {
    const width = Dimensions.get('window').width;
  return (
    <GestureHandlerRootView style={{flex:1}}> 

    <Carousel
        data={accountDetailsData}
        loop
        width={width }
        autoPlay={false}
        height={250}
        scrollAnimationDuration={1000}
        mode='circular'
        keyExtractor={(item,index)=>index.toString()}
        viewabilityConfig={{
            itemVisiblePercentThreshold:100
        }}
        renderItem={({item,index})=>(
            <View>
                <HomePageCard
                accountType={item.accountType}
                accountBalance={item.accountBalance}
                accountName={item.accountName}
                accountNumber={item.accountNumber}
               
                />
            </View>
        )}
        />
        {/* <ExpandingDot
        data={accountDetailsData}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
            width:10,
            height:10,
            backgroundColor:colors.main,
            borderRadius:5,
            marginHorizontal:5
        }}
        containerStyle={{
            top:30
        }}
        />
        <LiquidLike
        data={accountDetailsData}
        scrollX={scrollX}

        
        /> */}

    </GestureHandlerRootView>
  )
}

export default HomePageCardContent