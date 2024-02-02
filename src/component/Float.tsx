import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

//documentacion forzada de nuestro componente Fab
interface Props{
  title: string;
  position:'bl'|'br';//'br'-'bl'- 
  onPress:()=>void;
}

export const Float = ({title,position='bl', onPress}:Props) => {
  //console.log(props.title)
    return (
        <TouchableOpacity style={[styles.fablcation, 
          (position=='bl')
          ?styles.left
          :styles.right]} 
        
        onPress={onPress}>
            <View style={styles.Float}>
                <Text style={styles.fabtext}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Float: {// se utiiza por unidades
        backgroundColor: 'black',
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center'
    },
    fabtext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    fablcation: {
        position: 'absolute',
        bottom: 0,
     
    },right:{
       right:20
    },left:{
      left:20

    }
   
})