import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Image
}from 'react-native'

export default class Exams extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={{flexDirection:'row'}}>
    <View>
      <TextInput
          style={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}
          placeholder = 'Search'
          keyboardType = 'web-search'
          ref = 'searchBar'
          />
    </View>
    <TouchableHighlight style={{alignItems:'center',justifyContent:'center'}} underlayColor = 'transparent'>
        <View>
          <Image></Image>
        </View>
    </TouchableHighlight>
</View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    }
})