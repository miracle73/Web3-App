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
    CreateAccount: undefined;
    ForgotPassword: undefined;
};

type SecondRootStackParamList = {
    BottomNavigation: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount', 'ForgotPassword'>;
type SecondNavigationProp = StackNavigationProp<SecondRootStackParamList, 'BottomNavigation' >;

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const secondNavigation = useNavigation<SecondNavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        secondNavigation.navigate('BottomNavigation');
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
                    <Text style={styles.firstText}> Sign In</Text>
                    <View></View>
                </View>

                <Text style={styles.secondText}>Welcome </Text>
                <Text style={[styles.thirdText, { marginTop: 10, }]}>Enter your Phone number or Email for  </Text>
                <View style={{ justifyContent: 'flex-start', gap: 12, alignItems: 'center', flexDirection: 'row', marginBottom: 30, }}>
                    <Text style={[styles.thirdText]}>sign in, Or </Text>

                    <MaskedView maskElement={<Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            backgroundColor: 'transparent',

                        }}
                    >
                        Create new account.
                    </Text>}>
                        <LinearGradient
                            colors={['#F62E8E', '#AC1AF0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <TouchableOpacity onPress={() => { navigation.navigate('CreateAccount'); }}>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: 16,
                                        opacity: 0,

                                    }}
                                >
                                    Create new account.
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient >
                    </MaskedView>
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

                <View style={[styles.container, { borderWidth: password ? 0 : 1, borderBottomWidth: 1, marginTop: password ? 0 : 10 }]}>
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
                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword'); }}>
                    <Text style={styles.fourthText}> Forgot Password? </Text>
                </TouchableOpacity>
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
                            SIGN IN
                        </Text>
                    </LinearGradient >
                </TouchableOpacity>
                <Text style={[styles.thirdText, { color: '#E3E3E3', textAlign: 'center', marginVertical: 20 }]}> Or</Text>
                <TouchableOpacity style={[styles.secondContainer, { justifyContent: 'space-between', marginBottom: 20 }]}>
                    <View style={styles.innerContainer}>
                        <EvilIcons name="sc-facebook" size={22} color='blue' />
                    </View>
                    <Text style={[styles.firstText, { fontSize: 14 }]}> Connect with Facebook </Text>
                    <View></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.secondContainer, { justifyContent: 'space-between', marginBottom: 10, backgroundColor: '#4285F4' }]}>
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
        paddingHorizontal: 10
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

export default LoginScreen