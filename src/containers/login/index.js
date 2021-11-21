import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image} from "react-native";

import {PRIMARY_COLOR, INPUT_STYLE} from "../../assets/styles";


function Login({navigation}){
    return(
        <SafeAreaView style={styles.loginContainer}>
        <Image source={require("../../assets/trial.png")} style={{width:100, height:100}} />
            <Text style={{color: PRIMARY_COLOR}}> This is Login</Text>
            <TextInput placeholder="Username" keyboardType="default" style={styles.inputStyle}/>
            <TextInput placeholder="Password" keyboardType="number-pad" secureTextEntry={true} style={styles.inputStyle}/>
            
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Home")}>
                <Text>Login Here!!!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.buttonStyle}>
                <Text>Go to Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = {
    loginContainer: {
        padding: 50,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "skyblue",
    },
    inputStyle: INPUT_STYLE,
    buttonStyle: {
        backgroundColor: "orange",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingVertical: 20,
        margin: 20,
        borderRadius: 15,
    }
}

export default Login;

