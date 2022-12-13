import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import Login from './src/Login';
import DrawerContent from './src/Drawer/DrawerContent';
import Settings from "./src/Drawer/Settings";
import AboutUs from "./src/Drawer/AboutUs";
import Flexbox from './src/Flexbox';
import Homes from "./src/Drawer/Homes";
import Profiles from "./src/Drawer/Profiles";
import Cart from "./src/Tab/Cart";
import Order from "./src/Tab/Order";
import Category from "./src/Tab/Category";
import Search from "./src/Tab/Search";
import Home from "./src/BottamTab/Home";
import Recent from "./src/BottamTab/Recent";
import Exams from "./src/BottamTab/Exams";
import Profile from "./src/BottamTab/Profile";
import Contact from "./src/BottamTab/Contact";
import Biology from "./src/Biology";
import Biology2 from "./src/Biology2"
import Verification from "./src/Verification"
import photoUpload from "./src/photoUpload"

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab =createBottomTabNavigator();

function Mystack(){
    return(
        <stack.Navigator>
            <stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Verification"
            component={Verification}
            options={{headerShown:false}}
            />
           <stack.Screen
            name="photoUpload"
            component={photoUpload}
            options={{headerShown:false}}
            /> 
            <stack.Screen
            name="Flexbox"
            component={Flexbox}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Tab"
            component={MyTab}
            options={{headerShown:false}}/>
            <stack.Screen
            name="BottomTab"
            component={MyBottom}
            options={{headerShown:false}}
            />
            <stack.Screen
            name="Biology"
            component={Biology}
            options={{headerShown:false}}/>
            <stack.Screen
            name="Biology2"
            component={Biology2}
            options={{headerShown:false}}/>
        </stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent={(props)=><DrawerContent{...props}/>}>
        <Drawer.Screen
        name="Home"
        component={Homes}
        />
        <Drawer.Screen
        name="Profiles"
        component={Profiles}
        options={{headerShown:false}}/>
        <stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown:false}}/>
        <stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown:false}}/>
        <Drawer.Screen
        name="BottomTab"
        component={MyBottom}/>
    </Drawer.Navigator>
    )
}

function MyTab(){
    return(
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: {fontSize :14},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'#fff'}
    }}>
        <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused})=>
            focused ? <Icon name="shopping-cart" size={24} color="blue"/> : <Icon name="shopping-cart" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Order"
        component={Order}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> 
            focused ? <Icon name="shopping-bag" size={24} color="blue"/> : <Icon name="shopping-bag" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Category"
        component={Category}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=>
            focused ? <Icon name="category" size={24} color="blue"/> : <Icon name="category" size={24} color="gray"/>
        }}/>
        <Tab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused})=>
            focused ? <Icon name="search" size={24} color="blue"/> : <Icon name="search" size={24} color="gray"/>
        }}/>
    </Tab.Navigator>
    )
}

function MyBottom(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:14},
            tabBarItemStyle:{width:100},
            tabBarStyle:{backgroundColor:"#fff"}
        }}>
            <BottomTab.Screen
            name="Drawer"
            component={MyDrawer}
            options={{
            headerShown:false,
            title:"Home",
            tabBarActiveTintColor:"green",
            tabBarInactiveTintColor:"gray",
            tabBarIcon: ({focused})=>
            focused ? <Icon name="home" size={24} color="green"/> : <Icon name="home" size={24} color="gray"/>
        }}/>
                <BottomTab.Screen
                name="Recent"
                component={Recent}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon: ({focused})=>
                    focused? <Icon name="slideshow" size={24} color="green"/> : <Icon name="slideshow" size={24} color="gray"/>
                }}/>
                <BottomTab.Screen
                name="Exams"
                component={Exams}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon:({focused})=>
                    focused ? <Icon name="bookmark" size={24} color="green"/> :  <Icon name="bookmark" size={24} color="gray"/>
                }}/>
                <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon:({focused})=>
                    focused ? <Icon name="person" size={24} color="green"/> :  <Icon name="person" size={24} color="gray"/>
                }}/>
                <BottomTab.Screen
                name="Contact"
                component={Contact}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:"green",
                    tabBarInactiveTintColor:"gray",
                    tabBarIcon:({focused})=>
                    focused ? <Icon name="mail" size={24} color="green"/> :  <Icon name="mail" size={24} color="gray"/>
                }}/>
                </BottomTab.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}