import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    CheckoutConfirm: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'CheckoutConfirm'>;

const ResetEmail = () => {
    const navigation = useNavigation<NavigationProp>();
    const handleSubmit = () => {
     
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',
            paddingTop: 60,
            paddingHorizontal: 20
        }}>
            <StatusBar style="light" />
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
            >
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                    <MaterialIcons name="keyboard-arrow-left" size={20} color="#E3E3E3" />
                    <Text style={styles.firstText}> Reset Email </Text>
                    <View></View>
                </View>

                <Text style={styles.secondText}>Reset email sent </Text>
                <Text style={[styles.thirdText, {marginTop: 10,  }]}>We have sent a instructions email to </Text>
                <View style={{ justifyContent: 'flex-start', gap: 12,  alignItems: 'center', flexDirection: 'row',  marginBottom: 30, }}>
                    <Text style={[styles.thirdText]}>Nawfazim@icloud.com</Text>

                    <MaskedView maskElement={<Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            backgroundColor: 'transparent',

                        }}
                    >
                        Having Problems?
                    </Text>}>
                        <LinearGradient
                            colors={['#F62E8E', '#AC1AF0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text
                                style={{
                                    fontWeight: "400",
                                    fontSize: 16,
                                    opacity: 0,

                                }}
                            >
                                 Having Problems?
                            </Text>
                        </LinearGradient >
                    </MaskedView>
                </View>


                <TouchableOpacity onPress={handleSubmit}>
                    <LinearGradient
                        colors={['#F62E8E', '#AC1AF0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.secondContainer}
                    >
                        <Text
                            style={{
                                color: '#E3E3E3',
                                fontWeight: "700",
                                fontSize: 14,
                                textAlign: 'center',

                            }}
                        >
                            SEND AGAIN
                        </Text>
                    </LinearGradient >
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    firstText: {
        color: '#E3E3E3',
        fontWeight: "600",
        fontSize: 16,
    },
    secondText: {
        color: '#E3E3E3',
        fontWeight: "500",
        fontSize: 34,
        marginTop: 25
    },
    thirdText: {
        color: '#868686',
        fontWeight: "400",
        fontSize: 16,
    },

  
    sixthText: {
        color: '#868686',
        fontWeight: "500",
        fontSize: 12,


    },
   
    secondContainer: {
        height: 50,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#395998',
        paddingHorizontal: 10,
        marginTop: 40
    },
   
})

export default ResetEmail