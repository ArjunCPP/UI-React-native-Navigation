import React,{Component} from "react"
import{
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native'

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            name:null
        }
    }

    updateValue(username){
        this.setState({name:username})
    }

    render(){
        return(
            <View style={styles.container}>
                    <Image source={require('./Tab/Apple.png')}
                    style={styles.Image}>
                    </Image>
                    <Text style={styles.Text}>Apple</Text>
                    <TextInput style={styles.TextInput}
                    placeholderTextColor="black"
                    placeholder="username"
                    maxLength={10}
                    onChangeText={(username)=>this.updateValue(username)}>
                    </TextInput>
                    <TextInput style={styles.TextInput}
                    placeholderTextColor="black"
                    placeholder="password"
                    secureTextEntry={true}
                    maxLength={5}>
                    </TextInput>
                    <View style={styles.countrycode}>
                    <TextInput style={styles.code}
                    placeholderTextColor="black"
                    placeholder="CountryCode"
                    secureTextEntry={true}
                    maxLength={5}>
                    </TextInput>
                    <TextInput style={styles.mobile}
                    placeholderTextColor="black"
                    placeholder="Mob No"
                    secureTextEntry={true}
                    maxLength={5}>
                    </TextInput>
                    </View>
                    <TextInput style={styles.TextInput}
                    placeholderTextColor="black"
                    placeholder="password"
                    secureTextEntry={true}
                    maxLength={5}>
                    </TextInput>
                    <TouchableHighlight style={styles.TouchableHighlight}
                    onPress={()=>this.props.navigation.navigate('Verification',{username:this.state.name})}
                    underlayColor='transparent'>
                        <Text style={styles.Buttontext}>Sign Up</Text>
                    </TouchableHighlight>
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
        justifyContent:"center"
    },
    Image:{
        height:125,
        width:100
    },
    Text:{
        fontSize:35,
        fontWeight:'bold',
        marginBottom:40,
        color:'#062e27',
        marginTop:20
    },
    TextInput:{
        width:"65%",
        height:45,
        borderColor:'#062e27',
        borderWidth:1,
        paddingLeft:20,
        marginBottom:20,
        borderRadius:4
    },
    TouchableHighlight:{
        height:55,
        width:'50%',
        backgroundColor:'#062e27',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    Buttontext:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    countrycode:{
        width:'65%',
        display:'flex',
        flexDirection:'row',
        marginBottom:10
    },
    mobile:{
        flex:2,
        borderColor:'#062e27',
        borderWidth:1,
        borderRadius:5,
        paddingLeft:20,
        paddingRight:40
    },
    code:{
        flex:2,
        borderColor:'#062e27',
        borderWidth:1,
        borderRadius:5,
        marginRight:13
    },
})
 