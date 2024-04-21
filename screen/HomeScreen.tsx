import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Project from '../assets/images/project.png'
import Message from '../assets/images/message.png'
import Navbar from '../assets/images/navbar.png'
import Home from '../assets/images/Home.png'
import Background from '../assets/images/Background.png'


const HomeScreen = () => {
    const handleSubmit = () => {
        console.log('cool')

    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',
            paddingTop: 50,

        }}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View>
                        <Text style={styles.firstText}>Good Morning, Rey.</Text>
                        <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'flex-start', gap: 4, alignItems: 'center' }}>
                            <MaskedView maskElement={<Text
                                style={{
                                    fontWeight: "400",
                                    fontSize: 14,
                                    backgroundColor: 'transparent',

                                }}
                            >
                                Your CXA Streek
                            </Text>}>
                                <LinearGradient
                                    colors={['#F62E8E', '#AC1AF0',]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "400",
                                            fontSize: 14,
                                            opacity: 0,

                                        }}
                                    >
                                        Your CXA Streek
                                    </Text>
                                </LinearGradient >
                            </MaskedView>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#323436', borderRadius: 10, height: 20, width: 35, paddingHorizontal: 5 }}>
                                <Image source={Project} />
                                <Text style={styles.secondText}>5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Image source={Message} />
                        <Image source={Navbar} />

                    </View>
                </View>
                <Image source={Home} style={{height: 350,}}/>
                <View style={{ flexDirection: 'row', gap: 4, marginHorizontal: 20, marginTop: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={styles.thirdText}>Earning</Text>
                    <Text></Text>
                    <MaskedView maskElement={<Text
                        style={{
                            fontWeight: "600",
                            fontSize: 16,
                            backgroundColor: 'transparent',

                        }}
                    >
                        21h 23m
                    </Text>}>
                        <LinearGradient
                            colors={['#F62E8E', '#AC1AF0',]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    fontSize: 16,
                                    opacity: 0,

                                }}
                            >
                                21h 23m
                            </Text>

                        </LinearGradient >
                    </MaskedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', gap: 8, marginTop: 5, borderWidth: 2, borderColor: '#242424', borderRadius: 6, width: 100, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={styles.fourthText}>000839.43</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 4, marginHorizontal: 20, marginTop: 15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <ImageBackground source={Background} style={styles.container}>
                        <Text style={styles.fifthText}>Rates</Text>
                        <Text style={styles.sixthText}>000839.43</Text>
                    </ImageBackground>
                    <ImageBackground source={Background} style={styles.container}>
                        <Text style={styles.fifthText}>Total Mined</Text>
                        <Text style={styles.sixthText}>000839.43</Text>
                    </ImageBackground>
                </View>
                <View style={{  justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, gap: 4 }}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <LinearGradient
                            colors={['#F62E8E', '#AC1AF0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.secondContainer}
                        >

                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontWeight: "700",
                                    fontSize: 16,
                                    textAlign: 'center',

                                }}
                            >
                                Earn CXA
                            </Text>
                        </LinearGradient >
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.secondContainer, { backgroundColor: '#242424' }]}>
                        <Text style={styles.seventhText}> Send to Wallet </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    firstText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 18,
    },
    secondText: {
        color: '#D9D9D9',
        fontWeight: "400",
        fontSize: 14,
    },
    thirdText: {
        color: '#727477',
        fontWeight: "400",
        fontSize: 16,
    },
    fourthText: {
        color: '#ECEBED',
        fontWeight: "700",
        fontSize: 16,
    },
    fifthText: {
        color: '#727477',
        fontWeight: "400",
        fontSize: 16,
    },
    sixthText: {
        color: '#ECEBED',
        fontWeight: "700",
        fontSize: 18,
    },
    seventhText: {
        color: '#727477',
        fontWeight: "700",
        fontSize: 16,
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: 150

    },
    secondContainer: {
        height: 40,
        width: 200,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10
    },
})
export default HomeScreen