import React,{Component} from "react";
import axios from "axios";
import{
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
}from 'react-native'
import { color } from "react-native-reanimated";

export default class Cart extends Component{
    constructor(){
        super()
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response)=> response.json())
        .then((response)=>{
            if(response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log("Data of cart is:",response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log("Error of cart is:",error)
        })
    }

    getAxios(){
        this.setState({loader:true})
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((response)=>{
            this.setState({loader:false})
            console.log("Cart Axios:",response)
            })
            .catch((error)=>{
                this.setState({loader:false})
                console.log("Error cart :",error)
            })
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        const renderItem =({item}) => (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Email:  {item.email}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} color="blue" animating={this.state.loader}/>
                <Text style={styles.text}
                onPress={()=>this.getAxios()}>Cart</Text>
                <FlatList style={{width:"95%", marginTop:10}}
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
    itemContainer:{
        width:"100%",
        padding:10,
        backgroundColor:"#fff",
        elevation:4,
        marginTop:10
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"
    }
})