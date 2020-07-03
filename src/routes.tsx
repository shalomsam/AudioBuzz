import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const LoginScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Login Screen</Text>
        </View>
    )
}

const SignUpScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>SignUp Screen</Text>
        </View>
    );
}

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export const PostAuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

