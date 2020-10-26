import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class WorkScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            stu1:'',
            stu2:'',
            stu3:'',
            stu4:'',
            stu5:'',
            stu6:'',
            stu7:'',
            stu8:'',
            stu9:'',
            stu10:'',
            
        }
    }

    AddStudentAttendance = ()=>{
        db.collection('STUDENTS').doc('ABC').set({
            student1:this.state.stu1,
            student2:this.state.stu2,
            student3:this.state.stu3,
            student4:this.state.stu4,
            student5:this.state.stu5,
            student6:this.state.stu6,
            student7:this.state.stu7,
            student8:this.state.stu8,
            student9:this.state.stu9,
            student10:this.state.stu10
        })
    }

    UpdateStudentAttendance = ()=>{
        db.collection('STUDENTS').doc('ABC').update({
            "student1":this.state.stu1,
            "student2":this.state.stu2,
            "student3":this.state.stu3,
            "student4":this.state.stu4,
            "student5":this.state.stu5,
            "student6":this.state.stu6,
            "student7":this.state.stu7,
            "student8":this.state.stu8,
            "student9":this.state.stu9,
            "student10":this.state.stu10
        })
    }

    componentDidMount(){
        this.AddStudentAttendance()
    }
    render(){
        return(
            <View style = {styles.container}>
                <View>
                <Text style = {styles.heading}>TAKE YOUR ATTENDANCE</Text>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 1</Text>
                    <TouchableOpacity
                        style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu1:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu1:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 2</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu2:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu2:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 3</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu3:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu3:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 4</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu4:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu4:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 5</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu5:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu5:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 6</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu6:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                       style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu6:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 7</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu7:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu7:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 8</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu8:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu8:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 9</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu9:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu9:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.attConatiner}>
                    <Text style = {styles.name}>STUDENT 10</Text>
                    <TouchableOpacity
                    style = {styles.presentButton}
                        onPress = {()=>{
                            this.setState({
                                stu10:'PRESENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>PRESENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.absentButton}
                        onPress = {()=>{
                            this.setState({
                                stu10:'ABSENT'
                            })
                        }}
                    >
                        <Text style = {styles.buttonText}>ABSENT</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.submitContainer}>
                    <TouchableOpacity
                        style = {{alignSelf:'center',backgroundColor:'black',width:200,height:30}}
                        onPress = {()=>{
                            this.UpdateStudentAttendance()
                            this.props.navigation.navigate('result')
                        }}
                    >
                        <Text style = {{alignSelf:'center',color:'white'}}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FCE4EC',
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:30,
        color:'#1A237E',
        marginTop:30
    },
    attConatiner:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:40
    },
    name:{
        fontSize:20,
        color:'#1A237E',
        marginRight:80,
        fontWeight:'bold'
    },
    presentButton:{
        width:80,
    height:30,
    backgroundColor:'green',
    alignItems:'center',
    
    marginRight:50
    },
    absentButton:{
        width:80,
    height:30,
    backgroundColor:'red',
    alignItems:'center',
    
    marginLeft:20
    },
    buttonText:{
        color:'white',
        alignSelf:'center'
    },
    
    
    submitContainer:{
        alignSelf:'center',
        marginTop:30
    }
})