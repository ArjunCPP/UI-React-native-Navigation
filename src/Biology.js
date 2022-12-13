import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image
}from "react-native"

export default class Biology extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{backgroundColor:"#062e27",width:'100%',height:"26%",position:"absolute"}}>
                    <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={()=> this.props.navigation.navigate('BottomTab')}>
                    <View style={{width:30,height:30,backgroundColor:"#062e27",borderWidth:1,borderColor:"#fff",marginLeft:30,marginTop:30,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                        <Image style={{width:10,height:10}}
                         source={require("./arrow.jpg")}> 
                        </Image>
                    </View>
                    </TouchableHighlight>
                    <Text style={{color:"#fff",marginLeft:30,marginTop:40,fontWeight:"bold",fontSize:20}}>Biology</Text>
                    <View style={{flexDirection:"row",marginTop:10,marginLeft:30}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>12 Chapters</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:15}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>124 hours</Text>
                        </View>
                    </View>
                    <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={()=> this.props.navigation.navigate('Biology2')}>
                    <View style={{width:"90%",height:140,backgroundColor:"#fff",elevation:4,marginLeft:20,borderRadius:5,marginTop:30}}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"#000",marginLeft:20,marginTop:20}}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>Chapters 1</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:15}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>3 parts</Text>
                        </View>
                    </View>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={()=> this.props.navigation.navigate('Biology2')}>
                    <View style={{width:"90%",height:140,backgroundColor:"#fff",elevation:4,marginLeft:20,borderRadius:5,marginTop:10}}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"#000",marginLeft:20,marginTop:20}}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>Chapters 1</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:15}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>3 parts</Text>
                        </View>
                    </View>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={()=> this.props.navigation.navigate('Biology2')}>
                    <View style={{width:"90%",height:140,backgroundColor:"#fff",elevation:4,marginLeft:20,borderRadius:5,marginTop:30}}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"#000",marginLeft:20,marginTop:20}}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>Chapters 1</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:15}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>3 parts</Text>
                        </View>
                    </View>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={()=> this.props.navigation.navigate('Biology2')}>
                    <View style={{width:"90%",height:140,backgroundColor:"#fff",elevation:4,marginLeft:20,borderRadius:5,marginTop:30}}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"#000",marginLeft:20,marginTop:20}}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>Chapters 1</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:15}}>
                            <Image style={{width:20,height:20,marginRight:5}}
                            source={require("./checkbox.png")}/>
                            <Text style={{color:"green"}}>3 parts</Text>
                        </View>
                    </View>
                    </View>
                    </TouchableHighlight>
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