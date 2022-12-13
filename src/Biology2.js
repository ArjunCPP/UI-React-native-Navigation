import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image
}from "react-native"

export default class Biology2 extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={{backgroundColor:"#062e27",width:'100%',height:"26%",position:"absolute"}}>
                <View style={{flexDirection:"row"}}>
                <TouchableHighlight
                underlayColor={"transparent"}
                onPress={()=> this.props.navigation.navigate('Biology')}>
                <View style={{width:30,height:30,backgroundColor:"#062e27",borderWidth:1,borderColor:"#fff",marginLeft:30,marginTop:30,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                    <Image style={{width:10,height:10}}
                     source={require("./arrow.jpg")}> 
                    </Image>
                </View>
                </TouchableHighlight>
                <Text style={{color:"#fff",marginLeft:100,marginTop:30,fontSize:20}}>Biology</Text>
                </View>
                <View style={{width:"80%",height:80,marginLeft:10}}>
                <Text style={{fontSize:25,color:"#fff",marginLeft:20,marginTop:10}}>Long chapter name can be shown here</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:1,marginLeft:30}}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"green",fontSize:12}}>Chapters 1</Text>
                    </View>
                    <View style={{flexDirection:"row",marginLeft:15}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"green",fontSize:12}}>3 parts</Text>
                    </View>
                </View>
                <View style={{width:"100%",height:30,marginTop:15,flexDirection:"row"}}>
                    <View style={{width:"20%",height:30}}>
                    <Text style={{color:"#fff",marginLeft:20,marginBottom:8,fontWeight:"bold"}}>Videos</Text>
                    <View
                  style={{
                  borderBottomColor: '#fff',
                  borderBottomWidth:5,
                  borderBottomColor:"green",
                  marginLeft:20,
                  marginRight:10,
                  borderBottomEndRadius:5
                 }}
                />
                </View>
                <View>
                <Text style={{color:"#fff",marginLeft:30,marginBottom:8,fontWeight:"bold"}}>Chapter Text</Text>
                </View>
                <View>
                <Text style={{color:"#fff",marginLeft:30,marginBottom:8,fontWeight:"bold"}}>Resources</Text>
                </View>
                <View>
                <Text style={{color:"#fff",marginLeft:30,marginBottom:8,fontWeight:"bold"}}>QN Bank</Text>
                </View>
                </View>
                <View style={{backgroundColor:"#fff",width:"85%",height:290,marginLeft:25,marginTop:30,borderRadius:5,elevation:4}}>
                    <Image style={{width:334,height:190}}
                    source={require("./imp.png")}></Image>
                    <View style={{width:"98%",height:70}}>
                <Text style={{fontSize:20,color:"#000",marginLeft:20,marginTop:10,fontWeight:"bold"}}>Long chapter name can be shown here</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:1,marginLeft:30}}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"#000",fontSize:12}}>Chapters 1</Text>
                    </View>
                    <View style={{flexDirection:"row",marginLeft:15}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"#000",fontSize:12}}>parts 1</Text>
                    </View>
                </View>
                </View>
                <View style={{backgroundColor:"#fff",width:"85%",height:290,marginLeft:25,marginTop:30,borderRadius:5,elevation:4}}>
                    <Image style={{width:334,height:190}}
                    source={require("./imp2.png")}></Image>
                    <View style={{width:"98%",height:70}}>
                <Text style={{fontSize:20,color:"#000",marginLeft:20,marginTop:10,fontWeight:"bold"}}>Long chapter name can be shown here</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:1,marginLeft:30}}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"#000",fontSize:12}}>Chapters 1</Text>
                    </View>
                    <View style={{flexDirection:"row",marginLeft:15}}>
                        <Image style={{width:15,height:15,marginRight:5}}
                        source={require("./checkbox.png")}/>
                        <Text style={{color:"#000",fontSize:12}}>parts 1</Text>
                    </View>
                </View>
                </View>
                </View>
                </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%"
    }
})