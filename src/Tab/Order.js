import React,{Component} from "react";
import axios from "axios";
import{
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList
}from 'react-native'
import { ThemeProvider } from "@react-navigation/native";

export default class Order extends Component{
    constructor(){
        super()
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response) => response.json())
        .then((response) =>{
            if(response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log("Your response is:",response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log("Error is:",error)
        })
    }
    getAxios(){
        this.setState({loader:true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response)=>{
            this.setState({loader:false})
            console.log("order axios:",response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('error order:',error)
        })
    }
componentDidMount(){
    this.getData()
}

    render(){
        const renderItem=({item})=>(
            <View style={styles.ItemContainer}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} animating={this.state.loader}/>
                <Text style={styles.text}
                onPress={()=>this.getAxios()}>This is Order </Text>
                <FlatList style={{ width:"95%" ,marginTop:10}}
                data={this.state.DATA}
                renderItem={renderItem}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#eeeeee',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    ItemContainer:{
        width:"100%",
        padding:10,
        backgroundColor:"#fff",
        elevation:4,
        marginBottom:10
    }
})