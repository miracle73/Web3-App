import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';


type RootStackParamList = {
    LoginScreen: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LandingScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <StatusBar style="light" />
            <View style={{ flexDirection: 'row',  justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.firstText}>Co</Text>

                <MaskedView maskElement={<Text
                    style={{
                        fontWeight: "200",
                        fontSize: 43,
                        backgroundColor: 'transparent',
                   
                    }}
                >
                    x
                </Text>}>
                    <LinearGradient
                        colors={['#F62E8E', '#AC1AF0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text
                            style={{
                                fontWeight: "200",
                                fontSize: 43,
                                opacity: 0,
                                
                            }}
                        >
                            x
                        </Text>
                    </LinearGradient >
                </MaskedView>
           



            <Text style={styles.firstText}>una</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstText: {
        color: '#FFFFFF',
        fontWeight: "200",
        fontSize: 43,
        textAlign: 'center'
    },
    secondText: {
        fontWeight: "500",
        fontSize: 43,
        textAlign: 'center',
    }
});

export default LandingScreen;
