import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class ResultScreen extends React.Component{
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
            stu10:''
        }
    }
    getAttendanceDetails = () =>{
        db.collection('STUDENTS').doc('ABC').onSnapshot(documentSnapshot => {
        
           
          
      
        this.setState({
          stu1   : documentSnapshot.data().student1,
          stu2 : documentSnapshot.data().student2,
          stu3 : documentSnapshot.data().student3,
          stu4   : documentSnapshot.data().student4,
          stu5 : documentSnapshot.data().student5,
          stu6 : documentSnapshot.data().student6,
          stu7   : documentSnapshot.data().student7,
          stu8 : documentSnapshot.data().student8,
          stu9 : documentSnapshot.data().student9,
          stu10   : documentSnapshot.data().student10,
          
        })
      
    });
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.heading}>TODAY'S ATTENDANCE</Text>
                <TouchableOpacity
                style = {styles.button}
                    onPress = {()=>{
                        this.getAttendanceDetails()
                    }}
                >
                    <Text style = {styles.buttontext}>CLICK HERE</Text>
                </TouchableOpacity>
                <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT1 - </Text>
        <Text style = {styles.text}>{this.state.stu1}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT2 - </Text>
        <Text style = {styles.text}>{this.state.stu2}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT3 - </Text>
        <Text style = {styles.text}>{this.state.stu3}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT4 - </Text>
        <Text style = {styles.text}>{this.state.stu4}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT5 - </Text>
        <Text style = {styles.text}>{this.state.stu5}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT6 - </Text>
        <Text style = {styles.text}>{this.state.stu6}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT7 - </Text>
        <Text style = {styles.text}>{this.state.stu7}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT8 - </Text>
        <Text style = {styles.text}>{this.state.stu8}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT9 - </Text>
        <Text style = {styles.text}>{this.state.stu9}</Text>
        </View>
        <View style = {styles.dataConatiner}>
        <Text style = {styles.text}>STUDENT10 - </Text>
        <Text style = {styles.text}>{this.state.stu10}</Text>
        </View>
        


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FCE4EC',
        width:'100%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:35,
        color:'#1A237E',
        alignSelf:'center'
        
    },
    button:{
        alignSelf:'center',
        marginTop:50
    },
    buttontext:{
        fontSize:20,
        color:'#1A237E',
        alignSelf:'center'
    },
    dataConatiner:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:40
    },
    text:{
        color:'#1A237E',
        fontSize:20,
        fontWeight:'bold',
        
    }
})