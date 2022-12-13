import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
}from 'react-native'
import { TextInput } from "react-native-gesture-handler";

export default class Recent extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={{width:"100%",height:"30%",backgroundColor:"#fff"}}>
                <Image style={{width:395,height:222}}
                source={require("./vid.png")}
                ></Image>
               </View>
               <View style={{flexDirection:"row"}}>
                <View style={{width:300,height:100,marginLeft:10,marginTop:20}}>
               <Text style={{fontSize:20,color:"#fff",marginLeft:20,marginTop:20,fontWeight:"bold"}}>Long chapter name can be shown here</Text>
               </View>
               <View style={{flexDirection:"column",marginTop:22,marginLeft:20}}>
               <Image style={{width:10,height:10,marginTop:30,marginLeft:14}}
                source={require("./dow.png")}
                ></Image>
                <Text style={{color:"#fff",fontSize:8,marginTop:6}}>Download</Text>
                </View>
               </View>
               <View
                  style={{
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5
                 }}
                />
                <View style={{width:"100%",height:50,flexDirection:"row"}}>
                <View style={{flexDirection:"row",marginTop:10,marginLeft:10}}>
                            <Image style={{width:20,height:20,marginRight:10}}
                            source={require("./aro1.png")}/>
                            <Text style={{color:"#eee"}}>Previous</Text>
                        </View>
                <View style={{flexDirection:"row",marginLeft:60,marginTop:10}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("../checkbox.png")}/>
                            <Text style={{color:"green"}}>Part 1</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:15,marginLeft:90}}>
                            <Text style={{color:"#fff"}}>Next</Text>
                            <Image style={{width:15,height:15,marginLeft:10,paddingBottom:10}}
                            source={require("./aro2.png")}/>
                        </View>
                </View>
                <View
                  style={{
                  borderBottomColor: '#fff',
                  borderBottomWidth: 1/5
                 }}
                />
                <View style={{width:"90%",height:60,backgroundColor:"#000",marginLeft:20,marginTop:160,borderRadius:5,flexDirection:"row"}}>
                    <View style={{width:"75%",height:40,marginLeft:20,marginTop:10}}>
                    <Text style={{color:"#fff"}}>Your sample question can be shown here no matter how long</Text>
                    </View>
                    <Image style={{width:35,height:35,marginTop:10,marginLeft:15}}
                    source={require("../Drawer/profile.png")}></Image>
                </View>
                <View style={styles.TextInput}>
                <TextInput 
                placeholder="Ask a question"
                placeholderTextColor={"#fff"}>
                </TextInput>
                <View style={{width:50,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",marginLeft:145,marginTop:8,borderRadius:5}}>
                    <Text style={{fontWeight:"bold",color:"#000"}}>Post</Text>
                </View>
                </View>
                <View>
                <TouchableHighlight style={styles.TouchableHighlight1}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{width:30,height:30,marginLeft:110,marginTop:7}}
                        source={require("./what.png")}></Image>
                    <Text style={{color:"green",marginLeft:10,marginTop:12,fontWeight:"bold"}}>Chat with teacher</Text>
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
        backgroundColor:'#062e27'
    },
    TextInput:{
        width:"90%",
        height:50,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#fff",
        marginLeft:20,
        marginTop:10,
        paddingLeft:30,
        flexDirection:"row"
    },
    TouchableHighlight1:{
        width:"90%",
        height:50,
        borderColor:"green",
        borderWidth:1,
        borderRadius:5,
        marginTop:10,
        marginLeft:20
    }
})