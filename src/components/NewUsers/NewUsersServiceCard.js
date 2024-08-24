import { View, Text, FlatList, Dimensions, Animated, Image, Pressable, Platform, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'


import { FlatGrid, SimpleGrid } from 'react-native-super-grid'
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../../constants/colors'
import image from '../../../assets/images/image'


const NewUsersServiceCard = () => {
    return (
        <>
            <View style={styles.mainView}>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.servicesTextStyle}>Services</Text>
                </View>
                <Pressable>
                    <View style={{ backgroundColor: "rgba(32, 130, 32, 0.1)", marginTop: 5, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: colors.main }}>View all</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.sendMoneyView}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{...styles.iconStyleView,backgroundColor: 'rgba(214, 250, 209, 1)' }}>
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
                                style={{ width: 40, height: 30 }}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Mulish' }}>Remita</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{...styles.iconStyleView, backgroundColor: 'rgba(239, 199, 182, 1)'}}>
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
                        <View style={{...styles.iconStyleView, backgroundColor: 'rgba(221, 237, 244, 1)'}}>
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

            <View style={styles.thingsToDoContainer}>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 25, fontFamily: 'Mulish' }}>Things to do</Text>
                </View>
                <Pressable>
                    <View style={{  marginTop: 5, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight:'bold', color: colors.main }}>Done 1 of 3</Text>
                    </View>
                </Pressable>
            </View>

        </>

    )
}

export default NewUsersServiceCard

const styles = StyleSheet.create({
    mainView:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight:Platform.OS === 'ios'?25:25, 
        marginLeft: 25, 
        marginTop: 20 
    },
    iconStyleView:{ 
        backgroundColor: 'rgba(214, 250, 209, 1)', 
        paddingRight: Platform.OS === 'ios'? 20:20, 
        paddingTop: Platform.OS === 'ios'? 20:20, 
        paddingBottom: Platform.OS === 'ios'? 20:20,  
        paddingLeft: Platform.OS === 'ios'? 20:20, 
        borderRadius: 10 
    },
    thingsToDoContainer:{
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         marginRight: 25, 
         marginLeft: 25,
          marginTop:Platform.OS === 'ios'?30:25 
    },
    sendMoneyView:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 30, 
        marginRight:Platform.OS === 'ios'?25:30 
    },
    servicesTextStyle:{
        color: colors.black, 
        fontWeight: 'bold', 
        fontSize: 20, 
        fontFamily: 'Mulish' 
    }
})