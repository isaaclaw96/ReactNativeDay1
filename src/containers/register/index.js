import React from 'react';
import {Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image} from "react-native";
import Login from '../login';

function Register(props){
    return(
        <SafeAreaView style={styles.registerContainer}>
            <Image source={require("../../assets/registericon.png")} style={{width:100, height:100}} />
            <Text> This is Register </Text>
            <TextInput placeholder="Enter Username" keyboardType="default" style={styles.inputStyle}/>
            <TextInput placeholder="Enter Password" keyboardType="number-pad" secureTextEntry={true} style={styles.inputStyle}/>
            <TextInput placeholder="Enter Email" keyboardType="default" style={styles.inputStyle}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text> Register Now! </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate("Login")}>
                <Text> Login </Text>
            </TouchableOpacity> 
        </SafeAreaView>
    )
}

const styles = {
    registerContainer: {
        paddingTop: 50,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "skyblue",
    },
    inputStyle: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        width: "50%",
        // margin: 20,
        marginTop: 20,
        marginBottom: 20,
        marginVertical:20,
        marginHorizontal: 20,

    },
    buttonStyle: {
        backgroundColor: "orange",
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingVertical: 10,
        margin: 20,
        borderRadius: 20,
    }
}

export default Register;