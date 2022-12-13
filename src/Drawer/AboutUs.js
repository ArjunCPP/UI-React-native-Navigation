import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class AboutUs extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>This is AboutUs Page</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'red',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    }
})