import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class Settigs extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>This is Settigs Page</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'yellow',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    }
})