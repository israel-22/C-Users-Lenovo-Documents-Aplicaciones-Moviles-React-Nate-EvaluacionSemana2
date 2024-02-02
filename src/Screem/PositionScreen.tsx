import { StyleSheet, Text, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={style.container}>
        <View style={style.boxpurple}></View>
        <View style={style.boxOrange}></View> 
        <View style={style.boxGreen}></View> 

        
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        //width:411,
        //height:820,
        //width:300,
       // height:300,
        backgroundColor:'skyblue',
        //justifyContent:'center',
        alignItems:'center'
       
    },

    boxpurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        position:'relative',
        alignItems:'center',
        top:280,
        right:90,
        //bottom:10,//va para abajo,
        //position:'relative',
        //top:50, va para arriba
        //left:50
    },
    //oxOrange
    boxOrange:{
        width:100,
    height:100,
    //flex:0,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        //bottom:0,
       // left:310,
       left:0,
        position:'relative',
        top:180
    },
//boxGreen
boxGreen:{
    width:100,
    height:100,
    backgroundColor:'green',
    borderWidth:10,
    borderColor:'white',
    position:'relative',
    top:80,
    //top:0,
    //bottom:0,
    //right:0,
    left:90
    }
})

// '#239B56 '