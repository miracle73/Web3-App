import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Mine from '../screen/Mine';
import Notification from '../screen/Notification';
import Profile from '../screen/Profile';
import HomeIcon from '../assets/images/homeIcon.png';
import MineIcon from '../assets/images/mine.png';
import NotificationIcon from '../assets/images/notification.png';
import ProfileIcon from '../assets/images/pro.png';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import New from '../screen/New';

const Tab = createBottomTabNavigator();

// Define a component for the TouchableOpacity


const BottomNavigation = () => {
    return (
        <>
            <Tab.Navigator initialRouteName="Home" screenOptions={{
                tabBarStyle: { backgroundColor: '#000000', elevation: 10, height: 70, borderColor: '#000000' },
            }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                <Image source={HomeIcon} />
                            </View>
                        ),
                        tabBarLabel: '',
                    }}
                />
                <Tab.Screen name="Mine"
                    component={Mine}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                <Image source={MineIcon} />
                            </View>
                        ),
                        tabBarLabel: ''
                    }}
                />
                {/* Wrap the TouchableOpacity within a Screen */}
                <Tab.Screen
                    name="EarnCXA"
                    component={New}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#F62E8E', '#AC1AF0']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.secondContainer}
                                >
                                    <FontAwesome6 name="plus" size={25} color="#FFFFFF"/>
                                </LinearGradient>
                            </TouchableOpacity>
                        ),
                        tabBarLabel: ''
                    }} />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                <Image source={NotificationIcon} />
                            </View>
                        ),
                        tabBarLabel: ''
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                <Image source={ProfileIcon} />
                            </View>
                        ),
                        tabBarLabel: ''
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    secondContainer: {
        height: 40,
        width: 40,
        borderRadius: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BottomNavigation;
