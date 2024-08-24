import { View, FlatList, Dimensions, Animated, Platform } from 'react-native'
import React from 'react'
import { accountDetailsData } from '../../constants/data/data'
import HomePageCard from './HomePageCard'
import { SlidingDot } from 'react-native-animated-pagination-dots'
import colors from '../../constants/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const HomePageCardContent = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <FlatList
                data={accountDetailsData}
                horizontal
                pagingEnabled
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false
                    }
                )}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item, index }) => (
                    <View>
                        <HomePageCard
                            accountType={item.accountType}
                            accountBalance={item.accountBalance}
                            accountName={item.accountName}
                            accountNumber={item.accountNumber}
                            image={item.image}
                        />
                    </View>
                )}
                contentContainerStyle={{
                    marginLeft: Platform.OS === 'ios' ? 20 : -5,
                    marginRight: Platform.OS === 'ios' ? 40 : 30
                }}
            />

            {/* Pagination Dots */}
            <SlidingDot
                data={accountDetailsData}
                expandingDotWidth={30}
                scrollX={scrollX}
                inActiveDotOpacity={0.6}
                dotSize={9}
                dotStyle={{
                    backgroundColor: colors.lightGrey,
                    opacity: 0.4
                }}
                containerStyle={{
                    position: 'absolute',
                    bottom: -30,
                    flexDirection: 'row',
                    alignSelf: 'center'
                }}
                slidingIndicatorStyle={{
                    backgroundColor: colors.main,
                    zIndex: 99,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
            />
            {/* Pagination Dots */}

        </GestureHandlerRootView>
    )
}

export default HomePageCardContent