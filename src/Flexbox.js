import React,{Component} from "react"
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput
}from "react-native"

class Flexcontent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.Flexcontent}>My name is {this.props.name}</Text>
            </View>
        )
    }
}

export default class App extends Component{
    constructor(){
        super();
        this.state={
            main_text:'Hello',
        }
    }

    componentDidMount(){
        console.log('the username is :',this.props.route.params.username)
    }

    updatetext(){
        this.setState({
            main_text:'Hello updated'
        })
    }
    render(){
        return(
            <View style={styles.Flexbox}>
                <Text style={styles.Text}>{this.state.main_text}</Text>
                <Text style={styles.Text}>{this.state.sub_text}</Text>
                <Text style={styles.Text}>{this.state.last_text}</Text>
                <TouchableHighlight style={styles.TouchableHighlight}
                onPress={()=>this.updatetext()}>
                <Text style={styles.Texttouch}>Update</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.TouchableHighlight}
                underlayColor='#fff'
                onPress={()=>this.props.navigation.navigate("Drawer",{Name:this.state.name})}>
                    <Text style={styles.Texttouch}>Click Here</Text>
                </TouchableHighlight>
                <Flexcontent name={this.props.route.params.username}>

                </Flexcontent>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Flexbox:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:'center',
        flexDirection:'column'
    },
    Text:{
        fontSize:30,
        color:"#000",
        fontWeight:"bold"
    },
    TouchableHighlight:{
        height:55,
        width:'50%',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        marginTop:20
    },
    Texttouch:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    Flexcontent:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000',
        marginTop:20
    }
})