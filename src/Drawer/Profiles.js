import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>This is Profile</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    },
    profileIcon:{
        width:100,
        height:100,
        backgroundColor:"#bbb",
        marginTop:19,
        marginLeft:10,
        borderRadius:50,
    },
})