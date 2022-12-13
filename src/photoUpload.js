import React,{Component} from "react";
import{
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
}from "react-native"


export default class App extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <View style={styles.View1}>
         <Text style={styles.Text}>Image/Illustrations</Text>
           </View>
           <View style={styles.View2}>
            <Text style={styles.Text2}>App tour title</Text>
            <Text>The app tour description goes here.</Text>
            <TouchableHighlight style={{height:"100%",width:"100%",marginTop:15,marginLeft:270}}
            onPress={()=> this.props.navigation.navigate("BottomTab")}
            underlayColor="Transpirant">
    <Image style={{height:"40%",width:"30%"}} source={require("./Tab/Arrow.png")} />
            </TouchableHighlight>
        </View>
   </View>
    )
  }
}
const styles= StyleSheet.create({
  Container:{
    height:"100%",
    width:"100%",
    backgroundColor:"#fff"
  },
  View1:{
    width:"90%",
    height:"70%",
    backgroundColor:"#eeeeee",
    marginLeft:20,
    marginTop:20,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  },
  View2:{
    height:"30%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:40
  },
  Text:{
    fontWeight:"bold",
    color:"#000"
  },
  Text2:{
    fontWeight:"bold",
    color:"#000",
    fontSize:20
  },
  Onboarding:{
    backgroundColor:"#fff"
  }
})

