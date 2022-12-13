import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.View1}>
                </View>
                <View style={styles.View2}>
                </View>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                    <View style={styles.profileIcon}>
                        <Image style={styles.Image}
                        source={require("../Drawer/profile.png")}></Image>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:20,marginLeft:20,marginTop:45,color:"#000",fontWeight:"bold"}}>Jane Doe</Text>
                    <Text style={{fontSize:13,marginLeft:20}}>ID: 1234578</Text>
                    </View>
                    </View>
                    <View>
                 <Text style={{fontSize:17,marginTop:20,marginLeft:30,fontWeight:"bold",color:"#000"}}>Personal info</Text>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                  <View style={{flexDirection:"row"}}>
                 <Text style={{fontWeight:"bold",marginLeft:30,marginTop:10,color:"#000"}}>Accout Settings</Text>
                 <Text style={{marginLeft:30,marginTop:10}}>Accout Settings</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Text style={{fontWeight:"bold",marginLeft:30,marginTop:10,color:"#000"}}>Email</Text>
                 <Text style={{marginLeft:95,marginTop:10}}>emailidd123@server.com</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                  <View style={{flexDirection:"row"}}>
                 <Text style={{fontWeight:"bold",marginLeft:30,marginTop:10,color:"#000"}}>Number</Text>
                 <Text style={{marginLeft:80,marginTop:10}}>+91 9876543210</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                 <Text style={{fontSize:17,marginTop:20,marginLeft:30,fontWeight:"bold",color:"#000"}}>Course Info</Text>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                  <View style={{flexDirection:"row"}}>
                 <Text style={{marginLeft:30,marginTop:10}}>Center</Text>
                 <Text style={{marginLeft:95,fontWeight:"bold",marginTop:10,color:"#000"}}>Inmakes edu</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                 <View style={{flexDirection:"row"}}>
                 <Text style={{marginLeft:30,marginTop:10}}>Course</Text>
                 <Text style={{marginLeft:90,fontWeight:"bold",marginTop:10,color:"#000"}}>Plus Two Science</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                 <View style={{flexDirection:"row"}}>
                 <Text style={{marginLeft:30,marginTop:10}}>Payment Status</Text>
                 <Text style={{marginLeft:40,fontWeight:"bold",marginTop:10,color:"#000"}}>Free</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                 }}/>
                 <View style={{flexDirection:"row"}}>
                 <Text style={{marginLeft:30,marginTop:10}}>Expiry Date</Text>
                 <Text style={{marginLeft:70,fontWeight:"bold",marginTop:10,color:"#000"}}>Not Applicable</Text>
                 </View>
                 <View
                  style={{
                  marginTop:20,
                  borderBottomColor: '#000',
                  borderBottomWidth: .2,
                  marginBottom:10
                 }}/>
                 <TouchableHighlight style={styles.TouchableHighlight}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{width:30,height:30,marginLeft:30,marginTop:7}}
                        source={require("./payment.png")}></Image>
                    <Text style={{color:"#fff",marginLeft:20,marginTop:15}}>Custom Payment</Text>
                    </View>
                 </TouchableHighlight>
                 <TouchableHighlight style={styles.TouchableHighlight1}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{width:40,height:40,marginLeft:30,marginTop:7}}
                        source={require("./share.png")}></Image>
                    <Text style={{color:"#fff",marginLeft:20,marginTop:15}}>Referrals</Text>
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
    },
    View1:{
        width:"100%",
        height:"30%",
        backgroundColor:"#062e27"
    },
    View2:{
        width:"100%",
        height:"70%",
    },
    View3:{
        width:"90%",
        height:"100%",
        backgroundColor:"#fff",
        position:"absolute",
        margin:20,
        borderRadius:5,
        elevation:3
    },
    View4:{
        flexDirection:"row"
    },
    profileIcon:{
        width:100,
        height:100,
        backgroundColor:"#bbb",
        marginTop:19,
        marginLeft:40,
        borderRadius:50,
    },
    Image:{
        width:100,
        height:100,
    },
    TouchableHighlight:{
        width:"100%",
        height:50,
        backgroundColor:"#29cf5b",
        borderRadius:5,
        elevation:5
    },
    TouchableHighlight1:{
        width:"100%",
        height:50,
        backgroundColor:"#29cf5b",
        marginTop:10,
        borderRadius:5,
        elevation:5
    }
})