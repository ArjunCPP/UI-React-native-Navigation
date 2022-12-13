import React,{Component}from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Drowercostom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.profileIcon}>
                        <Image style={styles.Image}
                         source={require("./profile.png")}></Image>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",marginLeft:5}}>Aaron Taylor</Text>
                    <Text style={{color:"#fff",marginLeft:5}}>ID: 1234</Text>
                    </View>
                    <View>
                    <Text style={{color:"#4fff6c",marginLeft:40}}>^</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Exam corner</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Subscription</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Analytics</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Downloads</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Notifications</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Referrals</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.round}
                         source={require("./round.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Share app</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                  <View style={{flexDirection:"row"}}>
                    <Image style={styles.red}
                         source={require("./red.png")}></Image>
                <Text style={{fontSize:15,color:'#fff',marginLeft:20,flexDirection:"row",marginTop:20,color:"red"}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Logout</Text>
                </View>
                <View
                  style={{
                  marginLeft:25,
                  marginTop:10,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5,
                  marginRight:25
                 }}
                />
                <TouchableHighlight style={styles.TouchableHighlight}>
                    <Text style={{color:"#4fff6c"}}>Enquire now</Text>
                </TouchableHighlight>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#062e27'
    },
    Text:{
        fontSize:15,
        marginTop:10,
        marginLeft:10,
        color:'#fff',
        marginLeft:30
    },
    profileIcon:{
        width:100,
        height:100,
        backgroundColor:"#bbb",
        marginTop:19,
        marginLeft:10,
        borderRadius:50,
    },
    view:{
        width:'100%',
        height:"25%",
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#062e27'
    },
    info:{
        marginLeft:15,
        marginTop:10
        },
    Image:{
        width:100,
        height:100
    },
    round:{
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
        width:25,
        height:25,
        marginTop:15,
        marginLeft:30,
        borderRadius:5
    },
    texts:{
        flex:2,
        borderColor:'#6074d6',
        borderWidth:1,
        borderRadius:5,
        paddingLeft:20,
        paddingRight:40
    },
    red:{
            display:'flex',
            flexDirection:'row',
            marginBottom:10,
            width:25,
            height:25,
            marginTop:15,
            marginLeft:30,
            borderRadius:5
    },
    TouchableHighlight:{
        width:"80%",
        height:40,
        borderColor:"#4fff6c",
        borderWidth:1,
        borderRadius:5,
        marginTop:15,
        marginLeft:25,
        alignItems:"center",
        justifyContent:"center"
    }
})