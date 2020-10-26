
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import db from '../Config';
import firebase from 'firebase';


export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <View style = {styles.Container}>
                <Text style = {styles.heading}>WELCOME TO STUDENT ATTENDANCE APP!</Text>
                <Text style = {styles.subheading}>A faster way of taking attendance</Text>
                <TouchableOpacity
                    style = {styles.button}
                   onPress = {()=>{
                       this.props.navigation.navigate('work')
                   }} 
                >
                    <Text style = {styles.buttontext}>Click here to continue</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FCE4EC',
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:45,
        color:'#1A237E',
        
    },
    subheading:{
        fontSize:25,
        color:'#1A237E',
        fontWeight:'bold',
        marginTop:20
    },
    button:{
        alignSelf:'center',
        marginTop:50
    },
    buttontext:{
        fontSize:20,
        color:'#1A237E',
        alignSelf:'center'
    }
})