import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
}from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <View>
                <Text style={{fontSize:15,marginLeft:30,marginTop:30,color:"#062e27"}}>Goodmorning</Text>
                <Text style={{fontSize:23,marginLeft:30,marginTop:2,fontWeight:"bold",color:"#062e27"}}>Aaron Taylor</Text>
                </View>
                <View style={{backgroundColor:"#062e27",height: 80,width:"90%",borderRadius:5,marginLeft:20,marginTop:20}}>
                    <Text style={{color:"#fff",marginLeft:40,marginTop:20}}>Class</Text>
                    <Text style={{color:"#fff",marginLeft:40,fontWeight:"bold"}}>Plus two science</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableHighlight
                    underlayColor={"transparent"}
                   onPress={()=>this.props.navigation.navigate('Biology')}>
                    <View style={{borderColor:"green",height:40,width:100,backgroundColor:"#fff",marginLeft:10,marginTop:30,borderRadius:4,borderWidth:1/2,flexDirection:"row"}}>
                        <Image style={{width:30,height:30,marginLeft:5,marginTop:5}}
                          source={require("./green.png")}/>
                   
                    <Text style={{marginTop:8,marginLeft:8,fontWeight:"bold"}}>Biology</Text>
                    </View>
                    </TouchableHighlight>
                    <View style={{borderColor:"green",height:40,width:100,backgroundColor:"#fff",marginLeft:10,marginTop:30,borderRadius:4,borderWidth:1/2,flexDirection:"row"}}>
                        <Image style={{width:30,height:30,marginLeft:5,marginTop:5}}
                          source={require("./green.png")}/>
                        <Text style={{marginTop:8,marginLeft:8,fontWeight:"bold"}}>Physics</Text>
                    </View>
                    <View style={{borderColor:"green",height:40,width:100,backgroundColor:"#fff",marginLeft:10,marginTop:30,borderRadius:4,borderWidth:1/2,flexDirection:"row"}}>
                        <Image style={{width:30,height:30,marginLeft:2,marginTop:5}}
                          source={require("./green.png")}/>
                        <Text style={{marginTop:8,marginLeft:1,fontWeight:"bold"}}>Chemistry</Text>
                    </View>
                    <View style={{borderColor:"green",height:40,width:100,backgroundColor:"#fff",marginLeft:10,marginTop:30,borderRadius:4,borderWidth:1/2,flexDirection:"row"}}>
                        <Image style={{width:30,height:30,marginLeft:5,marginTop:5}}
                          source={require("./green.png")}/>
                        <Text style={{marginTop:8,marginLeft:8,fontWeight:"bold"}}>Biology</Text>
                    </View>
                </View>
                    <Text style={{fontSize:15,marginLeft:20,marginTop:20,color:"#062e27",fontWeight:"bold"}}>Recent courses</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={{width:210,height:130,backgroundColor:"#000",marginLeft:20,marginTop:5,borderRadius:5}}>
                        <Image style={{width:210,height:130}}
                        source={require("./video.jpg")}></Image>
                    </View>
                    <View style={{width:210,height:130,backgroundColor:"#000",marginLeft:20,marginTop:5,borderRadius:5}}>
                        <Image style={{width:210,height:130}}
                        source={require("./video.jpg")}></Image>
                    </View>
                </View>
                <View style={{flexDirection:"row",width:"200%",height:"100%"}}>
                    <View style={{width:210,height:250,backgroundColor:"#062e27",marginLeft:20,marginTop:10,borderRadius:5}}>
                        <View style={{width:80,height:80,borderRadius:50,backgroundColor:"#fff",marginLeft:20,marginTop:20}}>
                        </View>
                        <Text style={{color:"#fff",fontSize:15,fontWeight:"bold",marginLeft:20,paddingTop:10}}>Target live classes</Text>
                            <Text style={{color:"#eeeeee",marginLeft:20,paddingTop:5,marginRight:20}}>Live classes by best 
                            teachers from LearningHub
                            to clear your doubts and 
                            to provide individual 
                            attention</Text>
                    </View>
                    <View style={{width:210,height:250,backgroundColor:"#062e27",marginLeft:20,marginTop:10,borderRadius:5}}>
                        <View style={{width:80,height:80,borderRadius:50,backgroundColor:"#fff",marginLeft:20,marginTop:20}}>
                        </View>
                        <Text style={{color:"#fff",fontSize:15,fontWeight:"bold",marginLeft:20,paddingTop:10}}>Target live classes</Text>
                            <Text style={{color:"#eeeeee",marginLeft:20,paddingTop:5,marginRight:20}}>Live classes by best 
                            teachers from LearningHub
                            to clear your doubts and 
                            to provide individual 
                            attention</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
    },
    Text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
        }
})