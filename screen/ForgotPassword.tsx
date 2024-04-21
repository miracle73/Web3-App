import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    CheckoutConfirm: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'CheckoutConfirm'>;

const ForgotPassword = () => {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputsFilled, setInputsFilled] = useState(false); // New state to track if inputs are filled

    const handleSubmit = () => {
        console.log(email)
        setEmail('')
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
                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <MaterialIcons name="keyboard-arrow-left" size={20} color="#E3E3E3" />
                    </TouchableOpacity>
                    <Text style={styles.firstText}> Forgot Password </Text>
                    <View></View>
                </View>

                <Text style={styles.secondText}> Forgot Password </Text>
                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', marginBottom: 30, marginTop: 10 }}>
                    <Text style={styles.thirdText}> Enter your email address and we will send you a reset instructions. </Text>

                </View>

                {email && <Text style={styles.sixthText}> EMAIL ADDRESS </Text>}
                <TextInput
                    style={{ borderRadius: 5, color: '#E3E3E3', paddingVertical: 10, paddingHorizontal: 10, borderWidth: email ? 0 : 1, borderColor: '#727477', borderBottomWidth: 1 }}
                    placeholderTextColor='#E3E3E3'
                    placeholder='Email'
                    onChangeText={text => {
                        setEmail(text);
                    }}
                    value={email}
                />

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
                            RESET PASSWORD
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

export default ForgotPassword