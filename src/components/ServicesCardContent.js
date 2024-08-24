import { View, Text, FlatList, Dimensions, Animated, Image, Pressable, StyleSheet, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import { ServicesCardData, accountDetailsData } from '../../constants/data/data'
import HomePageCard from './HomePageCard'
import Carousel from 'react-native-reanimated-carousel'
import { ExpandingDot, LiquidLike } from 'react-native-animated-pagination-dots'
import colors from '../../constants/colors'
import ServicesCard from './ServicesCard'
import { FlatGrid, SimpleGrid } from 'react-native-super-grid'
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import image from '../../assets/images/image'


const ServiceCardContent = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 25, marginLeft: 25, marginTop: 35 }}>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 20, fontFamily: 'Mulish' }}>Services</Text>
                </View>
                <Pressable>
                    <View style={{ backgroundColor: "rgba(32, 130, 32, 0.1)", marginTop: 5, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: colors.main }}>View all</Text>
                    </View>
                </Pressable>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={styles.firstRowCardView}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.iconStyleView}>
                            <Feather
                                name="send"
                                size={25}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Send Money</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{...styles.iconStyleView, backgroundColor: 'rgba(249, 231, 219, 1)'}}>
                            <Image
                                source={image.remita}
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Remita</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style= {{...styles.iconStyleView, backgroundColor: 'rgba(239, 199, 182, 1)'}}>
                            <Ionicons
                                name="receipt-outline"
                                size={30}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Pay Bills</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(221, 237, 244, 1)', padding: 20, borderRadius: 10 }}>
                            <Feather
                                name="smartphone"
                                size={30}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Airtime</Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={styles.firstRowCardView1}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(255, 242, 201, 1)', paddingRight: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20, borderRadius: 10 }}>
                            <Image
                                source={image.moneybag}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Loans</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(235, 235, 235, 1)', padding: 20, borderRadius: 10 }}>
                            <Feather
                                name='tv'
                                size={30}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Cable TV</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(221, 237, 244, 1)', padding: 20, borderRadius: 10 }}>
                            <MaterialCommunityIcons
                                name="chart-line"
                                size={30}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Invest</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(191, 233, 213, 1)', paddingRight: 25, paddingTop: 20, paddingBottom: 20, paddingLeft: 25, borderRadius: 10,marginLeft:5 }}>
                            <FontAwesome
                                name="lightbulb-o"
                                size={30}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Electricity</Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 25, marginLeft: 25, marginTop: 35 }}>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 20, fontFamily: 'Mulish' }}>Recent Transactions</Text>
                </View>
                <Pressable>
                    <View style={{ backgroundColor: "rgba(32, 130, 32, 0.1)", marginTop: 5, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: colors.main }}>View all</Text>
                    </View>
                </Pressable>
            </View>

        </>

    )
}

export default ServiceCardContent

const styles = StyleSheet.create({
    firstRowCardView:{
     justifyContent: 'center', 
     alignItems: 'center', 
     marginTop: 20,
     marginLeft:Platform.OS === 'ios'? 5:10,
     marginRight:Platform.OS === 'ios'? 30:25
     },
     firstRowCardView1:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 25,
        marginLeft:Platform.OS === 'ios'? 5:2,
        marginRight:Platform.OS === 'ios'? 30:10
    },
    iconStyleView:{ 
        backgroundColor: 'rgba(214, 250, 209, 1)', 
        paddingRight: Platform.OS === 'ios'? 20:20, 
        paddingTop: Platform.OS === 'ios'? 20:20, 
        paddingBottom: Platform.OS === 'ios'? 20:20,  
        paddingLeft: Platform.OS === 'ios'? 20:20, 
        borderRadius: 10 
    }
})