import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import HidePassword from '../assets/images/hidepassword.png'
import Google from '../assets/images/google.png'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    LoginScreen: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const CreateAccount = () => {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputsFilled, setInputsFilled] = useState(false); // New state to track if inputs are filled

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const checkInputsFilled = () => {
        if (email && password) {
            setInputsFilled(true);
        } else {
            setInputsFilled(false);
        }
    };

    useEffect(() => {
        checkInputsFilled();
    }, [email, password]);

    const handleSubmit = () => {
        console.log(email, password)
        setEmail('')
        setPassword('')
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
                    <Text style={styles.firstText}> Create Account </Text>
                    <View></View>
                </View>

                <Text style={styles.secondText}> Create Account</Text>
                <Text style={[styles.thirdText, { marginTop: 10, }]}>Enter your Name, Email and Password for  </Text>
                <View style={{ justifyContent: 'flex-start', gap: 12, alignItems: 'center', flexDirection: 'row', marginBottom: 30, }}>
                    <Text style={[styles.thirdText]}>sign up. </Text>

                    <MaskedView maskElement={<Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            backgroundColor: 'transparent',

                        }}
                    >
                        Already have account?
                    </Text>}>
                        <LinearGradient
                            colors={['#F62E8E', '#AC1AF0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen'); }}>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: 16,
                                        opacity: 0,

                                    }}
                                >
                                    Already have account?
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient >
                    </MaskedView>
                </View>
                {name && <Text style={[styles.sixthText, { marginTop: 20 }]}> FULL NAME </Text>}
                <TextInput
                    style={{ borderRadius: 5, color: '#E3E3E3', paddingVertical: 10, paddingHorizontal: 10, borderWidth: email ? 0 : 1, borderColor: '#727477', borderBottomWidth: 1 }}
                    placeholderTextColor='#E3E3E3'
                    placeholder='Full Name'
                    onChangeText={text => {
                        setName(text);
                    }}
                    value={name}
                />
                {email && <Text style={[styles.sixthText, { marginTop: 10 }]}> EMAIL ADDRESS </Text>}
                <TextInput
                    style={{ borderRadius: 5, color: '#E3E3E3', marginTop: 20, paddingVertical: 10, paddingHorizontal: 10, borderWidth: email ? 0 : 1, borderColor: '#727477', borderBottomWidth: 1 }}
                    placeholderTextColor='#E3E3E3'
                    placeholder='Email'
                    onChangeText={text => {
                        setEmail(text);
                    }}
                    value={email}
                />
                {
                    password &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        <Text style={styles.sixthText}> PASSWORD </Text>
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image
                                source={passwordVisible ? HidePassword : HidePassword}
                            />
                        </TouchableOpacity>
                    </View>
                }

                <View style={[styles.container, { borderWidth: password ? 0 : 1, borderBottomWidth: 1, marginTop: password ? 0 : 20 }]}>
                    <TextInput
                        style={{ flex: 1, color: '#E3E3E3' }}
                        placeholderTextColor='#E3E3E3'
                        placeholder='Password'
                        onChangeText={text => {
                            setPassword(text);
                        }}
                        secureTextEntry={!passwordVisible}
                        value={password}
                    />
                    {!password &&
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image
                                source={passwordVisible ? HidePassword : HidePassword}
                            />
                        </TouchableOpacity>}

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
                            SIGN UP
                        </Text>
                    </LinearGradient >
                </TouchableOpacity>
                <Text style={[styles.thirdText, { color: '#E3E3E3', textAlign: 'center', marginTop: 10 }]}> By Signing up you agree to our Terms Conditions & Privacy Policy.</Text>
                <Text style={[styles.thirdText, { color: '#E3E3E3', textAlign: 'center', marginTop: 10 }]}> Or</Text>
                <TouchableOpacity style={[styles.secondContainer, { justifyContent: 'space-between', }]}>
                    <View style={styles.innerContainer}>
                        <EvilIcons name="sc-facebook" size={22} color='blue' />
                    </View>
                    <Text style={[styles.firstText, { fontSize: 14 }]}> Connect with Facebook </Text>
                    <View></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.secondContainer, { marginTop: 10, justifyContent: 'space-between', backgroundColor: '#4285F4', marginBottom: 50 }]}>
                    <View style={styles.secondInnerContainer}>
                        <Image source={Google} />
                    </View>
                    <Text style={[styles.firstText, { fontSize: 14 }]}> Connect with google </Text>
                    <View></View>
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
    fourthText: {
        color: '#E3E3E3',
        fontWeight: "500",
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 20
    },
    fifthText: {
        color: '#E3E3E3',
        fontWeight: "700",
        fontSize: 14,
        textAlign: 'center',
    },
    sixthText: {
        color: '#868686',
        fontWeight: "500",
        fontSize: 12,


    },
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#727477',
        paddingHorizontal: 10,


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
        marginTop: 20
    },
    innerContainer: {
        height: 28,
        width: 28,
        borderRadius: 5,
        backgroundColor: '#E3E3E3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    secondInnerContainer: {
        height: 28,
        width: 28,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CreateAccount