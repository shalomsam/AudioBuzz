import React from "react";
import { NavigationState } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { View, StatusBar, Text } from "react-native";

type RootParam = {
    Login: {},
    Signup: {}
}

type LoginScreenProps = StackScreenProps<RootParam, 'Login'>

const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({
    navigation
}) => {
    return (
        <View>
            <StatusBar/>
            <View>
                <Text>Login</Text>
            </View>
            
        </View>
    )
}