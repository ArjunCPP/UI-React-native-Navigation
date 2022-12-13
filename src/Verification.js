import React,{Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"

export default class App extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <View style={styles.View1}>
          <Image source={require("./Tab/Apple.png")}
           style={styles.Image}></Image>
           <Text style={styles.Enter}>Verification code</Text>
           <Text style={styles.OTP}>Please type the verification code sent to</Text>
           <Text style={styles.Number}>+91 9876543210</Text>
           </View>
           <View style={styles.View2}>
            <View style={styles.View3}>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
              <TextInput style={styles.TextInput}
              placeholder=""
              placeholderTextColor={"#fff"}>
              </TextInput>
            </View>
            <TouchableHighlight style={styles.TouchableHighlight}
            onPress={()=> this.props.navigation.navigate("photoUpload")}
            underlayColor="transpirant">
              <Text>Resend OTP</Text>
            </TouchableHighlight>
            <Text style={styles.Resend}>Resend after 28s</Text>
            <TouchableHighlight>
              <Text style={styles.Contact}>Contact Us</Text>
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
    width:"100%",
    height:"40%"
  },
  Image:{
    height:150,
    width:120,
    marginLeft:140,
    marginTop:140
  },
  Enter:{
    fontSize:22,
    fontWeight:"bold",
    color:"#000000",
    marginTop:160,
    marginLeft:110
  },
  OTP:{
    marginLeft:60
  },
  Number:{
    fontSize:18,
    fontWeight:"bold",
    marginTop:10,
    color:"#000",
    marginLeft:126
  },
  View2:{
    width:"100%",
    height:"60%",
    backgroundColor:"#062e27",
    marginTop:200,
    borderRadius:20,
  },
  TextInput:{
    width:40,
    height:40,
    borderColor:"#fff",
    borderWidth:1,
    borderRadius:5,
    marginRight:10
  },
  TextInput2:{
    width:150,
    height:40,
    borderColor:"#fff",
    borderWidth:1,
    borderRadius:5,
    paddingLeft:20,
  },
  View3:{
    width:"70%",
    display:"flex",
    flexDirection:"row",
    marginLeft:60,
    marginTop:60
  },
  TouchableHighlight:{
    width:"75%",
    height:40,
    backgroundColor:"#90EE90",
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:57,
    marginTop:20
  },
  Resend:{
    marginLeft:155,
    fontSize:13,
    paddingTop:8,
    color:"#fff"
  },
  Contact:{
    color:"#90EE90",
    fontSize:15,
    fontWeight:"bold",
    marginLeft:170,
    paddingTop:20
  }
})

